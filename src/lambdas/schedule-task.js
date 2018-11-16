const AWS = require('aws-sdk');

const stepfunctions = new AWS.StepFunctions();

module.exports.handle = async (event, context) => {
    console.log('Starting ScheduleTask...', event);
    const stateMachineArn = process.env.statemachine_arn;
    const result = await stepfunctions.startExecution({
        stateMachineArn,
    }).promise();
    console.log(`Your statemachine ${stateMachineArn} executed successfully`, result);
    return result;
};
