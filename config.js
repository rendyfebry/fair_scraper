const dotenv = require('dotenv').config();

let config = {
    mailgunMail: process.env.MAILGUN_MAIL,
    mailgunDomain: process.env.MAILGUN_DOMAIN,
    mailgunApiKey: process.env.MAILGUN_APIKEY
};

module.exports = config;
