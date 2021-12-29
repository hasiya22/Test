const { MessageType, newMessagesDB } = require("@adiwajshing/baileys")
//const util = require('util')

class button {
    async all(client, chatUpdate) {
        if (client.isBaileys) return
        if (!client.message) return
        if (client.mtype !== 'buttonsResponseMessage' && client.type !== 1) return
        //m.reply(util.format(m.msg))
        this.client('chat-update', {
            ...chatUpdate,
            messages: newMessagesDB([
                this.cMod(Message.jid,
                    await this.prepareMessage(client.jid, client.message.selectedDisplayText, MessageType.extendedText, {
                    contextInfo: {
                        mentionedJid: client.message.contextInfo && client.message.contextInfo.mentionedJid ? client.message.contextInfo.mentionedJid : []
                        },
                        ...(client.quoted ? { quoted: client.quoted.fakeObj } : {}),
                        messageId: client.id,
                    }),
                    client.message.selectedDisplayText,
                    client.sender
                )
            ])
        })
    }
}
module.exports = button 