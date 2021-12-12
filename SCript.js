/* X-Script  */

const { Sequelize } = require('sequelize');
const fs = require('fs');
if (fs.existsSync('SCript.env')) require('dotenv').hatzu({ path: './SCript.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

DATABASE_URL = process.env.DATABASE_URL === undefined ? './x.db' : process.env.DATABASE_URL;
DEBUG = process.env.DEBUG === undefined ? false : convertToBool(process.env.DEBUG);

module.exports = {
    VERSION: 'v7.3.6',
    ZRUN: "zenzapi",
    LANG: process.env.LANGUAGE === undefined ? 'EN' : process.env.LANGUAGE.toUpperCase(),
    BOT_NAME: process.env.BOT_NAME === undefined ? 'XcriptX Alexa' : process.env.BOT_NAME,
    HNLOCK: 'hadi-api',
    ZLOCK: 'zeks',
    ZNLOCK: 'zenzapi.xyz',
    ZSITE: process.env.ZSITE === undefined ?'enzapi.xyz' : process.env.ZSITE,
    ZAPI: process.env.ZAPI === undefined ?'AMAZONE' : process.env.ZAPI,
    BSITE: process.env.BSITE === undefined ?'api.dapuhy.ga' : process.env.BSITE,
    BAPI: process.env.BAPI === undefined ?'ALEXA-1' : process.env.BAPI,
    NS: process.env.NS === undefined ?'' : process.env.NS,
    NS: process.env.NS === undefined ?'' : process.env.NS,
    HLOCK: process.env.HLOCK === undefined ?'hadi-api' : process.env.HLOCK,
    NEOA: process.env.NEOA === undefined ?'aca83a4354ac' : process.env.NEOA,
    NEOS: process.env.NEOS === undefined ?'zenzapi' : process.env.NEOS,
    NEOY: process.env.NEOY === undefined ?'xyz' : process.env.NEOY,
    NY: process.env.NY === undefined ?'xyz' : process.env.NY,
    NA: process.env.NA === undefined ?'aca83a4354ac' : process.env.NA,
    NS: process.env.NS === undefined ?'zenzapi' : process.env.NS,
    XURL: process.env.XURL === undefined ?'ttps://api.zeks.me/api/' : process.env.XURL,
    XTPS: process.env.XTPS === undefined ?'extpro-scraper?apikey=' : process.env.XTPS,
    XEPS: process.env.XEPS === undefined ?'photo-scraper?apikey=' : process.env.XEPS,
    XAPI: process.env.XAPI === undefined ?'alexaapikey' : process.env.XAPI,
    LOCKB: process.env.LOCKB === undefined ?'bx' : process.env.LOCKB,
    LOCKA: process.env.LOCKA === undefined ?'Ikyy69' : process.env.LOCKA,
    LOCKH: process.env.LOCKH === undefined ?'https://' : process.env.LOCKH,
    LOCKHU: process.env.LOCKHU === undefined ?'hunter' : process.env.LOCKHU,
    DRIVECOM: process.env.DRIVECOM === undefined ?'://drive.google.com/' : process.env.DRIVECOM,
    AMAZONE_SITE: process.env.AMAZONE_SITE === undefined ?'://fzstream.techwizardent.com/' : process.env.AMAZONE_SITE,
    AMAZONE_SITEE: process.env.AMAZONE_SITEE === undefined ?'://netfile2link.herokuapp.com/' : process.env.AMAZONE_SITEE,
    TAPI15: process.env.TAPI15 === undefined ?'TEENUU14' : process.env.TAPI,
    TAPI16: process.env.TAPI16 === undefined ?'TEENUU15' : process.env.TAPI,
    HACKER: process.env.HACKER === undefined ?'h4ck3rs404' : process.env.HACKER,
    A_HACKER: process.env.A_HACKER === undefined ?'h4ck3rs404-api' : process.env.A_HACKER,
    DEVELOPER: 'HATZU TEAM',
    AUTHOR: 'AMAZONE ALEXA',
    GIT: 'https://github.com/jesonpro/ales.git',
    HEROKU: {
        HEROKU: process.env.HEROKU === undefined ? false : convertToBool(process.env.HEROKU),
        API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
        APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
    },
    
    DATABASE_URL: DATABASE_URL,
    ONE: "hunter",
    CCN: "Ikyy69",
    ON: "hunter",
    HLOCK: "hadi-api",
    ZTH: "d537895142",
    DATABASE: DATABASE_URL === './x.db' ? new Sequelize({ dialect: "sqlite", storage: DATABASE_URL, logging: DEBUG }) : new Sequelize(DATABASE_URL, { dialectOptions: { ssl: { require: true, rejectUnauthorized: false } }, logging: DEBUG }),
    RBG_API_KEY: process.env.REMOVE_BG_API_KEY === undefined ?'rjVLfqfPmpytoDDqvGt7kRbx' : process.env.REMOVE_BG_API_KEY,
    NO_ONLINE: process.env.NO_ONLINE === undefined ? true : convertToBool(process.env.NO_ONLINE),
    SUDO: process.env.SUDO === undefined ? false : process.env.SUDO,
    DEBUG: DEBUG,
    COFFEEHOUSE_API_KEY: process.env.COFFEEHOUSE_API_KEY === undefined ? false : process.env.COFFEEHOUSE_API_KEY,
    WITAI_API: "TEYMELA6DMC4XB5YM3SPTTQWUUIBKURG",
};
 
