
let limit = 100
const {MessageType,GroupSettingChange,Mimetype,MessageOptions} = require('@adiwajshing/baileys');
const yts = require('yt-search')
let fetch = require('node-fetch')
const { servers, yta, ytv } = require('../XScript/y2mate')
const XcriptX = require('../events');
const thumb = 'https://telegra.ph/file/83b020ea2b5c123593696.jpg'
XcriptX.addCommand({pattern: 'yv ?(.*)', fromMe: true,}, (async (message, match) => { 
    if (match[1] === '') return await message.client.sendMessage(message.jid,'need word',MessageType.text);  
    let results = await yts(match[1])
    let vid = results.all.find(video => video.seconds < 3600)
    if (!vid) throw 'සොයා ගත නොහැක '


    let buttons = [
        {buttonId: '/yta '+vid.url, buttonText: {displayText: 'සින්දුව 🎵'}, type: 1},
        {buttonId: '/ytv '+vid.url, buttonText: {displayText: 'වීඩියෝව 📼'}, type: 1},
      {buttonId: '/cancel '+vid.videoId+memeq, buttonText: {displayText: 'ඩිලීට් 🗑️'}, type: 1}
      ]


      const buttonsMessage = {
        image: {url: thumb},
        caption:`BOTKI`.trim(),    footerText: 'Filesize : '+'5',
        buttons: buttons,
         headerType: 4
    }


    let sendMsg =  await conn.sendMessage(m.chat, buttonsMessage)

}));