const { dialog } = require('electron')
const { Notification } = require('electron')

const importEbook = () => {
  dialog
    .showOpenDialog({
      properties: ['openFile', 'multiSelections'],
    })
    .then((rc) => {
      if (!rc.canceled) {
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
  label: 'Import ebook',
  click: importEbook,
}

module.exports = { importEbook, ImportEbookMenuItem }
