const Contact = require("../models/contactModel");

const postMessage = async (request, response) => {

    const { email, subject, message } = request.body;
    
    try {
        const newMessage = await Contact.createMessage(email, subject, message);
        response.status(200).json(newMessage);
    } catch (error) {
        response.status(400).json({ error: error.message });
    }
};
module.exports = { postMessage };