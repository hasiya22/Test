const XcriptX = require('../events');
const Config = require('../config');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const hrs = new Date().getHours({ timeZone: Config.TIME_ZONE })


const tk = Config.WORKTYPE == 'public' ? false : true

XcriptX.addCommand({pattern: `${Config.MENU_COMMAND} ?(.*)`, fromMe: tk,}, (async (message, match) => {
    var time = new Date().toLocaleString('SI', { timeZone: Config.TIME_ZONE }).split(' ')[1]

    var greet = ''
    

if (hrs < 12) greet = '*ᴳᴼᴼᴰ ᴹᴼᴿᴺᴵᴺᴳ 🌈⛅*'
if (hrs >= 12 && hrs <= 17) greet = '*ɢᴏᴏᴅ ᴀғᴛᴇʀɴᴏᴏɴ ☁️🌞*'
if (hrs >= 17 && hrs <= 19) greet = '*ɢᴏᴏᴅ ᴇᴠᴇɴɪɴɢ 🌤🍃*'
if (hrs >= 19 && hrs <= 24) greet = '*ɢᴏᴏᴅ ɴɪɢʜᴛ 🌔🌛*'

    var respoimage = await axios.get(`${Config.MENU_LOGO}`, { responseType: 'arraybuffer' })
    await message.sendMessage (Buffer.from (respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `        

 ╭─ *「 ᴄᴏᴍᴍᴀɴᴅꜱ ᴘᴀɴᴇʟ」*
 │
 │ᴛʏᴘᴇ: .${Config.MENU_COMMAND} get full Command list*
 ├─────────●●►
 │ * Hi,*  ${greet}
 │ *👤Name:* ${Config.BOT_NAME}
 │ *💎Role:* Developer
 │ *⌚Time:* ${time}
 │ *📡Server: DO
 │
 │☬Working As*
 │ ${Config.WORKTYPE}*
 │   _x-Script_
 ╰──────────●●►

 ╭──────────●●►
 │BOT COMMANDS*
 │   ───────
 │
 │► .${Config.MENU_COMMAND} [All command list]
 │► .alive [Check bot status]
 │► .bot [chat with bot]
 │► .Admin [ for owner ]
 │► .version [check Version 
 │► .update [check Update]
 │► .update now [get update ]
 │► .restart 
 ╰───────────●●►

 
 
`}) 

 }));
