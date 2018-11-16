# Serverless Email Scheduler
Schedule future emails from your app using AWS Lambda and Step Functions.

TODO: link to blog article.

## Example Use Case
A new user signs up for your app. You want to schedule an on-boarding email to go out to them next week.

## Install
TODO: prereqs

## Run it
Deploy:

```
npm run deploy
```

To invoke with test data, first modify `data/test-request.json` to set the "to" email address and due date. Then run:

```
npm run invoke
```
