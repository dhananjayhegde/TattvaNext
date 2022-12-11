import { Blob } from 'buffer'; 

// import { google } from 'googleapis'

// const getUpcomingSessionsFromGoogleSheets = async () => {
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

const getUpcomingSessionsFromWP = async () => {
    const apiUrl = process.env.WP_PROTOCOL + process.env.WP_HOST + process.env.WP_REST_URL + 'session'
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

    if(!resultData){
        return {
            props: {
                message: 'No sessions planned now'
            }
        }
    } else {    
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
}

const getProgramsFromWP = async () => {
    const apiUrl = process.env.WP_PROTOCOL + process.env.WP_HOST + process.env.WP_REST_URL + 'program'
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
    
    if(!resultData){
        return {
                message: 'No programs available'
            }
    } else {
        
        return resultData.map((program) => {            
            return {
                id: program.ID,
                title: program.post_title,
                excerpt: program.post_excerpt,
                details: program.details,
                benefits: Object.values(program.benefits),
                terms_and_conditions: Object.values(program.terms_and_conditions),
                featured_image_abs_url: program.featured_image,
                itensity: program.intensity,
                time_to_practice: program.time_to_practice
            }
        })
    }
}

// export async function getFeaturedImageFromWP( programId, imageUrl ){    
//     let imageBlob = await fetch( imageUrl )
//         .then(response => response.blob())
//         .catch(error => console.error)

//     return {
//         id: programId,
//         featured_image_url: URL.createObjectURL( new Blob([imageBlob.buffer], { type: imageBlob.type }) )
//     }
// }

export async function getHathaPrograms(){
    return await getProgramsFromWP();
}

export default function getUpcomingSessions(source){
    if(source === "GoogleSheets") {
        return getUpcomingSessionsFromGoogleSheets();
    }else if(source == "WP") {
        return getUpcomingSessionsFromWP();
    }
}
