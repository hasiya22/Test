const {WAConnection, MessageOptions, MessageType, Mimetype, Presence} = require('@adiwajshing/baileys');
const XcriptX = require('../events');
const Config = require('../config');
const conn = new WAConnection();






XcriptX.addCommand({pattern: 'bio$', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    var ov_time = new Date().toLocaleString('LK', { timeZone: 'Asia/Colombo' }).split(' ')[1]
   
    
    const biography = '🤩 ' + ov_time + '\n⌚ ' 
    await message.client.setStatus(biography)

}));



