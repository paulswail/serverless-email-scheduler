
module.exports.handle = async (event, context) => {
    console.log('HELLO THERE!');
    return {
        message: 'Hello!',
        event,
    };
};
