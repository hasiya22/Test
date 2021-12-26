
let limit = 100
const {MessageType,GroupSettingChange,Mimetype,MessageOptions} = require('@adiwajshing/baileys');
const yts = require('yt-search')
let fetch = require('node-fetch')
const { servers, yta, ytv } = require('../XScript/y2mate')
const XcriptX = require('../events');
const thumb = 'https://telegra.ph/file/83b020ea2b5c123593696.jpg'
const url = 'https://telegra.ph/file/6d63b2efec080255a42a9.jpg'
const vd  = 'lasi'
XcriptX.addCommand({pattern: 'yv ?(.*)', fromMe: true,}, (async (message, match) => { 
    if (match[1] === '') return await message.client.sendMessage(message.jid,'need word',MessageType.text);  
  


    let buttons = [
        {buttonId: 'lasi'+url, buttonText: {displayText: 'සින්දුව 🎵'}, type: 1},
        {buttonId: '/ytv '+url, buttonText: {displayText: 'වීඩියෝව 📼'}, type: 1},
      {buttonId: '/cancel '+vd, buttonText: {displayText: 'ඩිලීට් 🗑️'}, type: 1}
      ]


      const buttonsMessage = {
        image: {url: thumb},
        caption:`BOTKI`.trim(),    footerText: 'Filesize : ',
        buttons: buttons,
         headerType: 4
    }


    let sendMsg =  await message.client.sendMessage(message.jid, buttonsMessage)

}));