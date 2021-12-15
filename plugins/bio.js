const {WAConnection, MessageOptions, MessageType, Mimetype, Presence} = require('@adiwajshing/baileys');
const Heroku = require('heroku-client');
const XcriptX = require('../events');
const config = require('./config');







XcriptX.addCommand({pattern: 'bio$', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    var ov_time = new Date().toLocaleString('LK', { timeZone: 'Asia/Colombo' }).split(' ')[1]
    const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var utch = new Date().toLocaleDateString(get_localized_date)
    
    const biography = '🤩 ' + ov_time + '\n⌚ ' + utch +'\n\n  🚀 X-Troid'
    await conn.setStatus(biography)

}));



