const fs = require('fs')

function createJsonFileData(filename, contents) {

    fs.writeFile(`static/data/${filename}`, contents, err => {
        if (err) {
            console.error(err)
            return
        }
        //file written successfully
    })

}

module.exports.createJsonFileData = createJsonFileData