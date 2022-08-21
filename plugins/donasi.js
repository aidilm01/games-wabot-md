let handler =  m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Indosat Ooredoo [085724331475]
│ • Telkomsel [081380448281]
╰────

╭─「 Donasi • Non Pulsa 」
│ • dana [081380448281]
│ • Gopay [081380448281]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
