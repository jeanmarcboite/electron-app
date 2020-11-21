class Ebook {
  constructor(file) {
    this.name = file.name
    this.type = file.type
    this.file = file
    console.log(this)
  }
}

module.exports = { Ebook }
