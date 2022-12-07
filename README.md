This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Libraries/Frameworks
- NextJS
- TailwindCSS

You can use this project as a boilerplate for any NextJS + TailwindCSS projects.

## Getting Started

`yarn` package manager is used.  

Once you clone the repo, start by running:

```bash
yarn install
```

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Since the app now uses GoogleSheets API, you will need to create some environment variables to access your Google Sheets API.

Go ahead and 
- Enable Google Sheets API on your Google Cloud Platform account if not already done
- Create a Service account and download the secrets.json or credentials.json file
- add below environment variables to .env.local file
    - GOOGLE_CLIENT_EMAIL
    - GOOGLE_PRIVATE_KEY
    - GOOGLE_PROJECT_ID=
    - GOOGLE_SHEETS_API_KEY=
    - SHEET_ID=

App accesses certain cells from the sheet mentioned above