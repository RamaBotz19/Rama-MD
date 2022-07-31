let handler = async m => m.reply(`
╭─「 𝘿𝙤𝙣𝙖𝙨𝙞 • 𝙎𝘼𝙇𝘿𝙊&𝙋𝙐𝙇𝙎𝘼」
│ 𝙂𝙊𝙋𝘼𝙔 •  [087793236775]
│ 𝙋𝙐𝙇𝙎𝘼 𝙏𝙀𝙇𝙆𝙊𝙈•  [082147562437]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
