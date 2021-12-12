

const XcriptX = require('../events');
const Config = require('../config');
const config = require('../SCript');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
let tn = Config.WORKTYPE == 'public' ? false : true
let ad = Config.WORKTYPE == 'public' ? true : true   

if (Config.ADULT_MODE == 'on') {    
XcriptX.addCommand({pattern: 'feetggif ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
var respoimage = await axios.get(`https://${config.NEOS}.${config.NEOY}/api/anime/nsfw/feetg?apikey=${config.NEOA}`, { responseType: 'arraybuffer' })
await message.client.sendMessage(message.jid,Buffer.from(respoimage.data), MessageType.document, {mimetype: Mimetype.gif, caption: '*🎭ɴᴇᴏᴛʀᴏ𝙭🪐*'})

    }));

XcriptX.addCommand({pattern: 'pussygif ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
var respoimage = await axios.get(`https://${config.NEOS}.${config.NEOY}/api/anime/nsfw/pussy?apikey=${config.NEOA}`, { responseType: 'arraybuffer' })
await message.client.sendMessage(message.jid,Buffer.from(respoimage.data), MessageType.document, {mimetype: Mimetype.gif, caption: '*🎭ɴᴇᴏᴛʀᴏ𝙭🪐*'})

    }));

XcriptX.addCommand({pattern: 'kunigif ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
var respoimage = await axios.get(`https://${config.NEOS}.${config.NEOY}/api/anime/nsfw/kuni?apikey=aca83a4354ac`, { responseType: 'arraybuffer' })
await message.client.sendMessage(message.jid,Buffer.from(respoimage.data), MessageType.document, {mimetype: Mimetype.gif, caption: '*🎭ɴᴇᴏᴛʀᴏ𝙭🪐*'})

    }));

XcriptX.addCommand({pattern: 'analgif ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
var respoimage = await axios.get(`https://${config.NEOS}.${config.NEOY}/api/anime/nsfw/anal?apikey=aca83a4354ac`, { responseType: 'arraybuffer' })
await message.client.sendMessage(message.jid,Buffer.from(respoimage.data), MessageType.document, {mimetype: Mimetype.gif, caption: '*🎭ɴᴇᴏᴛʀᴏ𝙭🪐*'})

    }));

XcriptX.addCommand({pattern: 'spankgif ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
var respoimage = await axios.get(`https://${config.NEOS}.${config.NEOY}/api/anime/nsfw/spank?apikey=aca83a4354ac`, { responseType: 'arraybuffer' })
await message.client.sendMessage(message.jid,Buffer.from(respoimage.data), MessageType.document, {mimetype: Mimetype.gif, caption: '*🎭ɴᴇᴏᴛʀᴏ𝙭🪐*'})

    }));
}
