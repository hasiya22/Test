/* X-Script  */

const XcriptX = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const Ln = ('This command for any emergency situation about any kind of WhatsApp SPAM in Group');
const Config = require('../config');
const code = ('🚀A\nɴ\nᴛ\nɪ\ns\nᴘ\nᴀ\nᴍ\n\n\n\n\n\n\n👾 ' + Config.BOT_NAME + '   \n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\🚀AntiSpam By ' + Config.BOT_NAME + ' n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n👾 ' + Config.BOT_NAME + '  👾Anti Spam System👾 \n*Powered By 👩‍🦰Queen XcriptX Alexa*')
const FINAL = "THIS IS AN ANTISAPM (anti lag),\nThis code prevents your phone from getting stuck due to malicious messages"
const TMUTE = "🚀Trying to close temporary,\n🚀Attempting to temporarily close the group"
const MUT = ".mute 1d"
const SCXR = "🧚‍♂️Running script...."
XcriptX.addCommand({pattern: 'antispm', fromMe: true, deleteCommand: false, desc: Ln,}, (async (message, match) => {

  var msg = await message.reply('👩‍🦰Preforming....');

  await message.client.sendMessage(
    message.jid,TMUTE, MessageType.text);

    await message.client.sendMessage(
      message.jid,MUT, MessageType.text);

      await message.client.sendMessage(
        message.jid,SCXR, MessageType.text);

        await message.client.sendMessage(
          message.jid,code, MessageType.text);

    await message.client.sendMessage(
        message.jid,code, MessageType.text);

        await message.client.sendMessage(
            message.jid,code, MessageType.text);

            await message.client.sendMessage(
                message.jid,code, MessageType.text);

                await message.client.sendMessage(
                  message.jid,code, MessageType.text);

                  await message.client.sendMessage(
                    message.jid,code, MessageType.text);

                    await message.client.sendMessage(
                      message.jid,code, MessageType.text);

                      await message.client.sendMessage(
                        message.jid,code, MessageType.text);
  
                               await message.client.sendMessage(
            message.jid,code, MessageType.text);

            await message.client.sendMessage(
                message.jid,code, MessageType.text);

                await message.client.sendMessage(
                  message.jid,code, MessageType.text);

                  await message.client.sendMessage(
                    message.jid,code, MessageType.text);

                    await message.client.sendMessage(
                      message.jid,code, MessageType.text);

                      await message.client.sendMessage(
                        message.jid,code, MessageType.text);
  
                          await message.client.sendMessage(
                             message.jid,FINAL, MessageType.text);


}));
