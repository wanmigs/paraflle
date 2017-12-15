// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.


window.remote = require('electron').remote
window.electronFs = remote.require('fs')
window.electronDialog = remote.dialog
window.appPath = remote.app.getAppPath()
window.userFile = appPath + '/data/data.json'
window.updateUser = updateUser
window.saveImage = saveImage

function updateUser(data) {
	electronFs.writeFile(userFile, data, (err) => {
    if (err) throw err
  })
}

function saveImage(file) {
  electronFs.readFile(file.path, function(err, data) {

    if (err) throw err

    electronFs.writeFile(appPath + '/uploads/' + file.name, data, 'binary', function (err) {
      if (err) {
        console.log("There was an error writing the image", err)
      }
      else {
        console.log("There file was written")
      }
    });
  })
}


