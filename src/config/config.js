require('dotenv').config();

const config = {
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 3000,
    secret: process.env.SECRET
}

module.exports = config;