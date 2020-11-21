const { dialog } = require('electron')

const importEbook = () => {
  console.log(
    dialog.showOpenDialog({ properties: ['openFile', 'multiSelections'] }),
  )
}

const ImportEbookMenuItem = {
  label: 'Import ebook',
  click: importEbook,
}

module.exports = { importEbook, ImportEbookMenuItem }
