# Serverless Email Scheduler
A Serverless template with Lambda functions for scheduling future emails from your app using AWS Lambda and Step Functions.

[Read the blog article](https://winterwindsoftware.com/serverless-email-scheduler/).

## Pre-requisites
You need an AWS account. Complete the following steps:
1. [Verify an email address in SES](https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-email-addresses.html) from which emails will be sent from
2. [Configure your AWS credentials](https://serverless.com/framework/docs/providers/aws/guide/credentials/)
3. Run `npm install` in the root folder
4. Open `serverless.yml` and modify the `EMAIL_SENDER_ADDRESS` setting to be the email address you verified in step 1.

## Deploy and Run
Deploy:

```
npm run deploy
```

To invoke with test data, first modify `data/test-request.json` to set the "to" email address and due date. Then run:

```
npm run invoke
```
