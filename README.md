# Serverless Email Scheduler
Schedule future emails from your app using AWS Lambda and Step Functions.

[Read the blog article](https://winterwindsoftware.com/serverless-email-scheduler/).

## Pre-requisites
1. [Verify an email address in SES](https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-email-addresses.html) from which emails will be sent from
2. Run `npm install` in the root folder
3. Open `serverless.yml` and modify the `EMAIL_SENDER_ADDRESS` setting to be the email address you verified in step 1.

## Deploy and Run
Deploy:

```
npm run deploy
```

To invoke with test data, first modify `data/test-request.json` to set the "to" email address and due date. Then run:

```
npm run invoke
```
