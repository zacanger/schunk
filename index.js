const fs = require('fs')

const rmrf = (d) => {
  fs.readdirSync(d)
    .forEach((file) => {
      const fp = d + '/' + file
      if (fs.lstatSync(filePath).isDirectory()) rmrf(fp)
      else fs.unlinkSync(fp)
    })
  fs.rmdirSync(d)
}

module.exports = rmrf
