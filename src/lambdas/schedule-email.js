const AWS = require('aws-sdk');

const stepfunctions = new AWS.StepFunctions();

module.exports.handle = async (event) => {
    const stateMachineArn = process.env.STATEMACHINE_ARN;
    const result = await stepfunctions.startExecution({
        stateMachineArn,
        input: JSON.stringify(event),
    }).promise();
    console.log(`State machine ${stateMachineArn} executed successfully`, result);
    return result;
};
