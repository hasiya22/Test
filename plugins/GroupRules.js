
const XcriptX = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const sql = require('./sql/greetings');
const Language = require('../language');
const Lang = Language.getString('greetings');
const hed = "*🔰 Group Rules 🔰* \n\n"
const pw = "◄XCript Protection►"

XcriptX.addCommand({pattern: 'rules', fromMe: true,}, (async (message, match) => {
    var rg = await sql.getMessage(message.jid, 'rule');
    if (rg === false) {
        await message.client.sendMessage(message.jid,Lang.NOT_SET_RULE,MessageType.text)
    } else {
        await message.client.sendMessage(message.jid,hed + rg.message + '\n\n' + pw,MessageType.text);
    }
}));

XcriptX.addCommand({pattern: 'newrules (.*)', fromMe: true,}, (async (message, match) => {
    if (match[1] === '') {
        return await message.client.sendMessage(message.jid,Lang.NEED_RULE_TEXT,MessageType.text);
    } else {
        if (match[1] === 'delete') { await message.client.sendMessage(message.jid,Lang.RULE_DELETED,MessageType.text); return await sql.deleteMessage(message.jid, 'rule'); }
        await sql.setMessage(message.jid, 'rule', match[1].replace(/#/g, '\n'));
        return await message.client.sendMessage(message.jid,Lang.RULE_SETTED,MessageType.text)
    }
}));

XcriptX.addCommand({pattern: 'rules', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
    var rg = await sql.getMessage(message.jid, 'rule');
    if (rg === false) {
        await message.client.sendMessage(message.jid,Lang.NOT_SET_RULE,MessageType.text)
    } else {
        await message.client.sendMessage(message.jid,hed + rg.message + '\n\n' + pw,MessageType.text);
    }
}));

XcriptX.addCommand({pattern: 'newrules (.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
	await message.sendMessage("Only Admins can Set Rules in this Group.")
}));
