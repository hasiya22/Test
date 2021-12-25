
let limit = 100
const {MessageType,GroupSettingChange,Mimetype,MessageOptions} = require('@adiwajshing/baileys');
const yts = require('yt-search')
let fetch = require('node-fetch')
const { servers, yta, ytv } = require('../XScript/y2mate')
const XcriptX = require('../events');
XcriptX.addCommand({pattern: 'yv ?(.*)', fromMe: true,}, (async (message, match) => { 
    if (match[1] === '') return await message.client.sendMessage(message.jid,'need word',MessageType.text);  
    let results = await yts(match[1])
    let vid = results.all.find(video => video.seconds < 3600)
    if (!vid) throw 'සොයා ගත නොහැක '
    let isVideo = /2$/.test(command)
    let { dl_link, thumb, title, filesize, filesizeF} = await (isVideo ? ytv : yta)(vid.url, 'id4')

    let buttons = [
        {buttonId: '/yta '+vid.url, buttonText: {displayText: 'සින්දුව 🎵'}, type: 1},
        {buttonId: '/ytv '+vid.url, buttonText: {displayText: 'වීඩියෝව 📼'}, type: 1},
      {buttonId: '/cancel '+vid.videoId+memeq, buttonText: {displayText: 'ඩිලීට් 🗑️'}, type: 1}
      ]


      const buttonsMessage = {
        image: {url: thumb},
        caption:`BOTKINGDOM !
    අවශ්‍ය මාධ්‍ය පහත බටන් අතරින් තෝරන්න`.trim(),    footerText: 'Filesize : '+filesizeF,
        buttons: buttons,
         headerType: 4
    }


    let sendMsg =  await conn.sendMessage(m.chat, buttonsMessage)

}));