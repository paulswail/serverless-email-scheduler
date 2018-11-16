const AWS = require('aws-sdk');

const ses = new AWS.SES();

const { EMAIL_SENDER_ADDRESS } = process.env;

module.exports.handle = async (event) => {
    const email = event.appendScheduleDateToBody ? Object.assign(event.email,
        {
            htmlBody: `${event.email.htmlBody}<br>Scheduled to be sent at: ${event.dueDate}`,
        }) : event.email;
    const result = await sendEmail(email);
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
