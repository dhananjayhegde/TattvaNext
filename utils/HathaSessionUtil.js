import { google } from 'googleapis'

const getUpcomingSessionsFromGoogleSheets = async () => {
    let auth = new google.auth.GoogleAuth({
        credentials: {
            client_email: process.env.GOOGLE_CLIENT_EMAIL,
            private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n")
        },
        projectId: process.env.GOOGLE_PROJECT_ID,
        scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly']
    });
    let sheets = google.sheets({ version: 'v4', auth });

    const range = `UpcomingPrograms!C2:G10`;
    const response = await sheets.spreadsheets.values.get({
        spreadsheetId: process.env.SHEET_ID,
        range,
    });

    return {
        props: {
            events: response.data.values.map((event) => {
                return {
                    fromDateTime: event[0],
                    toDateTime: event[1],
                    title: event[2],
                    category: event[3],
                    location: event[4]
                }
            })
        }
    }
}

const getUpcomingSessionsFromWP = async () => {
    const apiUrl = process.env.WP_HOST + process.env.WP_REST_URL + 'session'
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
        return {
            props: {
                events: resultData.map((session) => {
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
    }
}

export async function getFeaturedImageFromWP( imageUrl ){
    let imageObjectUrl = await fetch( imageUrl ).then( response => response.blob() ).then( imageBlob => {
        return URL.createObjectURL( imageBlob );
    });

    return imageObjectUrl;
}

export default function getUpcomingSessions(source){
    if(source === "GoogleSheets") {
        return getUpcomingSessionsFromGoogleSheets();
    }else if(source == "WP") {
        return getUpcomingSessionsFromWP();
    }
}
