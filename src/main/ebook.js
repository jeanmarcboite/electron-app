const { dialog } = require('electron')
const { Notification } = require('electron')
const { Ebook } = require('../lib/Ebook/Ebook')

const importEbook = (f) => {
  const ebook = new Ebook(f)
}
const importEbooks = () => {
  dialog
    .showOpenDialog({
      properties: ['openFile', 'multiSelections'],
    })
    .then((rc) => {
      if (!rc.canceled) {
        for (let path in rc.filePaths) {
          importEbook(rc.filePaths[path])
        }
        const notification = {
          title: 'Open files',
          body: JSON.stringify(rc.filePaths),
          timeoutType: 'default',
        }

        new Notification(notification).show()
      }
    })
}

const ImportEbookMenuItem = {
  label: 'Import ebook(s)',
  click: importEbooks,
}

module.exports = { ImportEbookMenuItem }
