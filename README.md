# Twilio Lookup v2 Demo Page

## Solution Description

React application meant as a sample app for **Twilio Lookup v2**, with the following features:
* Simple Lookup
* Line Type Intelligence
* Identity Match
* SIM Swap 

**Live Activity** and **SMS Pumping Risk** to come.

**IMPORTANT:** As many of these features are currently on Private or Public Beta, make sure there are enabled on your Twilio Account.

## Requirements

### Functions Deployment
* [Twilio CLI](https://www.twilio.com/docs/twilio-cli/quickstart) installed
* [Twilio Serverless Toolkit](https://www.twilio.com/docs/labs/serverless-toolkit) installed
* [yarn](https://yarnpkg.com/)

## Setup

1. Clone this repository
2. Go to the page folder
    * `cd frontend/lookup-demo`
3. Install dependencies
    * `yarn add`
4. Log into your Twilio account using your credentials with the **Twilio CLI**
    * `twilio login`
5. Deploy the app
    * `yarn deploy`
6. Open the root domain in your browser
7. Start using the app :)

The **deploy** script also deploys a **Serverless project** in your Twilio Account that is used to call Twilio's APIs.

## Running Local Tests

This application is ready for local testing. To do so:

1. Go to the Serverless Project folder
    * `cd lookup-serverless`
2. Copy the sample environment variables file
   *  `cp .env.example .env`
3. Paste your Twilio credentials for the `ACCOUNT_SID` and `AUTH_TOKEN` variables
4. Start your server locally
    * `twilio serverless:start`
5. Go to the React app folder
    * `cd ../frontend/lookup-demo`
6. Copy the sample environment variables file to a development file
   *  `cp .env.example .env.development`
6. Run the app locally
    * `yarn start`
7. When asked to run in a different port than `3000`, accept it (the Serverless project will be at this port)

## Disclaimer

Beware that this solution is meant only as a quickstart for using Twilio Lookup.