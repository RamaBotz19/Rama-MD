let handler = async m => m.reply(`
╭─「 𝐃𝐨𝐧𝐚𝐬𝐢 𝐉𝐚𝐧𝐠𝐚𝐧 𝐌𝐚𝐢𝐧𝐢𝐧 𝐃𝐨𝐚𝐧𝐠:𝐯 」
│ •⛽ 𝙂𝙤𝙥𝙖𝙮 [087793236775]
│ •⛽ 𝙥𝙪𝙡𝙨𝙖 [082147562437]
╰────
𝙏𝙀𝙍𝙄𝙈𝘼 𝙆𝘼𝙎𝙄𝙃 𝙐𝙉𝙏𝙐𝙆 𝙔𝘼𝙉𝙂 𝙎𝙐𝘿𝘼𝙃 𝘽𝙀𝙍𝘿𝙊𝙉𝘼𝙎𝙄
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
