const AWS = require('aws-sdk');

const ses = new AWS.SES();

const { EMAIL_SENDER_ADDRESS } = process.env;

module.exports.handle = async (event) => {
    const result = await sendEmail(event.taskData.email);
    console.log('Sent email successfully', result);
    return result;
};

function sendEmail(email) {
    const params = {
        Destination: {
            ToAddresses: email.to,
        },
        Message: {
            Subject: {
                Data: email.subject,
            },
            Body: {
                Html: {
                    Data: email.htmlBody || email.textBody,
                },
                Text: {
                    Data: email.textBody || email.htmlBody,
                },
            },
        },
        Source: EMAIL_SENDER_ADDRESS,
    };
    return ses.sendEmail(params).promise();
}
