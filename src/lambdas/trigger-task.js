
module.exports.handle = async (event, context) => {
    console.log('HELLO THERE!', event);
    return {
        message: 'Hello!',
        event,
    };
};
