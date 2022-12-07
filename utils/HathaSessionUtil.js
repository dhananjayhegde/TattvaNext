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
    const resultData = await fetch(apiUrl).then((response) => response.json());

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

export default function getUpcomingSessions(source){
    if(source === "GoogleSheets") {
        return getUpcomingSessionsFromGoogleSheets();
    }else if(source == "WP") {
        return getUpcomingSessionsFromWP();
    }
}