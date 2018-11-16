# Serverless Task Scheduler
Schedule future tasks from your app using AWS Lambda and SNS.

Question: do we need to use DynamoDB or could Step Functions be used instead?
https://docs.aws.amazon.com/step-functions/latest/dg/amazon-states-language-wait-state.html

TODO: link to blog article.

## Use Case
A new user signs up for your app. You want to schedule an on-boarding email to go out to them next week.

## Install
TODO: prereqs

## Run it
Deploy:

```
npx sls deploy -v
```

Invoke:
```
sls invoke -f schedule-task -l
```


## How it works
1. Your app calls ScheduleTask Lambda, passing in:
  - `scheduledDate`: date when the task should be processed
  - `targetSnsTopic`: name of the SNS topic where notifications will be sent when a task is "ready" for processing.
  - `taskData`: task-specific fields (e.g. email content)
2. ScheduleTask Lambda creates record in DynamoDB "ScheduledTasks" table and sends acknowledgement back to your app.
3. TaskPoller Lambda is invoked every 5 minutes. It queries against ScheduledTasks table for any events with `scheduledDate <= currentTime`.
4. For each task found, a notification is sent to the `targetSnsTopic`. The record is then deleted from DynamoDB.
5. You can configure your custom Lambda functions to subscribe to this topic and process the "ready" task
