/* X-Script  */


const {MessageType, GroupSettingChange, ChatModification, WAConnectionTest} = require('@adiwajshing/baileys');
const XcriptX = require('../events');
const Config = require('../config');
const Language = require('../language');
const Lang = Language.getString('XcriptX');
const mut = Language.getString('mute');
const END = "clear all messages"

async function checkImAdmin(message, user = message.client.user.jid) {
    var grup = await message.client.groupMetadata(message.jid);
    var sonuc = grup['participants'].map((member) => {
        if (member.id.split('@')[0] === user.split('@')[0] && member.isAdmin) return true; else; return false;
    });
    return sonuc.includes(true);
}

XcriptX.addCommand({pattern: 'clear', fromMe: true, desc: Lang.CLEAR, dontAddCommandList: false}, (async (message, match) => {

    await message.sendMessage('```cleaning chat...```');
    await message.client.modifyChat (message.jid, ChatModification.delete);
    await message.sendMessage('```✅ Chat cleared ```');
}));
