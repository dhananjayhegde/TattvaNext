import { Blob } from 'buffer'; 

// import { google } from 'googleapis'

// const _getUpcomingSessionsFromGoogleSheets = async () => {
//     let auth = new google.auth.GoogleAuth({
//         credentials: {
//             client_email: process.env.GOOGLE_CLIENT_EMAIL,
//             private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n")
//         },
//         projectId: process.env.GOOGLE_PROJECT_ID,
//         scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly']
//     });
//     let sheets = google.sheets({ version: 'v4', auth });

//     const range = `UpcomingPrograms!C2:G10`;
//     const response = await sheets.spreadsheets.values.get({
//         spreadsheetId: process.env.SHEET_ID,
//         range,
//     });

//     return {
//         props: {
//             events: response.data.values.map((event) => {
//                 return {
//                     fromDateTime: event[0],
//                     toDateTime: event[1],
//                     title: event[2],
//                     category: event[3],
//                     location: event[4]
//                 }
//             })
//         }
//     }
// }

const _getUpcomingSessionsFromWP = async () => {
    
    const resultData = await _doFetchToWPForJson( 'session' )
    let response = {}

    if(!resultData){
        response.error = 'No sessions planned now'
    } else {    
        response.events = _mapSessionsToResponse( resultData )
    }

    return response
}

const _getProgramsFromWP = async () => {
    const resultData = await _doFetchToWPForJson( 'program' )
    let response = {}
    
    if( !resultData ){
        response.error = 'No programs available'
    } else {        
        response.programs = _mapProgramsToResponse( resultData )
    }

    return response
}

const _doFetchToWPForJson = async ( urlPart ) => {
    const apiUrl = process.env.WP_PROTOCOL + process.env.WP_HOST + process.env.WP_REST_URL + urlPart
    const resultData = await fetch(apiUrl)
        .then(async response => {
            const isJson = response.headers.get('content-type').includes('application/json');
            const data = isJson ? await response.json() : null;

            if(!response.ok){
                const error = (data && data.message) || response.status;
                return Promise.reject(error);
            }

            return data;
        })
        .catch(error => {
            console.error('Error during fetch: ' + error);            
        });

    return resultData
}

const _mapProgramsToResponse = ( resultData ) => {
    return resultData.map((program) => {            
        return {
            id: program.ID,
            title: program.post_title,
            slug: program.post_name,
            excerpt: program.post_excerpt,
            details: program.details,
            benefits: Object.values(program.benefits),
            terms_and_conditions: program.terms_and_conditions,
            featured_image_abs_url: program.featured_image,
            itensity: program.intensity,
            time_to_practice: program.time_to_practice,
            punch_line: program.punch_line
        }
    })
}

const _mapSessionsToResponse = ( resultData ) => {
    return resultData.map((session) => {
        return {
            fromDateTime: session.start_date_time,
            toDateTime: session.end_date_time,
            title: session.post_title,
            category: session.hatha_program[0].post_title,
            location: session.location_name,
            locatoin_address: session.location,
            location_map_url: session.location_url
        }
    })
}

export async function getHathaPrograms(){
    return await _getProgramsFromWP();
}

export async function getHathaProgramBySlug( slug ){
    const resultData = await _doFetchToWPForJson( 'program/' + slug )
    let response = {}
    
    if( !resultData ){
        response.error = 'No programs available'
    } else {        
        response.programs = _mapProgramsToResponse( resultData )
    }

    return response
}

export async function getUpcomingSessionsByProgram( programId ){
    const resultData = await _doFetchToWPForJson( 'session?program-id=' + programId )
    let response = {}

    if(!resultData){
        response.error = 'No sessions planned now'
    } else {    
        response.events = _mapSessionsToResponse( resultData )
    }

    return response
}

export async function getUpcomingSessionsByProgramSlug( programSlug ){
    const resultData = await _doFetchToWPForJson( 'session?program-slug=' + programSlug )
    let response = {}

    if(!resultData){
        response.error = 'No sessions planned now'
    } else {    
        response.events = _mapSessionsToResponse( resultData )
    }

    return response
}



export default function getUpcomingSessions(source){
    if(source === "GoogleSheets") {
        return _getUpcomingSessionsFromGoogleSheets();
    }else if(source == "WP") {
        return _getUpcomingSessionsFromWP();
    }
}
