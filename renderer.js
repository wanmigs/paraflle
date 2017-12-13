// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.


window.remote = require('electron').remote
window.electronFs = remote.require('fs')
window.electronDialog = remote.dialog
window.appPath = remote.app.getAppPath()
window.userFile = appPath + '/data/data.json'
window.srcPath = 'C:/Users/Miguel/Downloads/24946233_1559971747373749_1355073758_o.jpg'
window.updateUser = updateUser

function updateUser(data) {
	electronFs.writeFile(userFile, data, (err) => {
    if (err) throw err
  })
}

electronFs.readFile(srcPath, function(err, data) {

	if (err) throw err

  electronFs.writeFile(appPath + '/data/outputImage.jpg', data, 'binary', function (err) {
    if (err) {
      console.log("There was an error writing the image")
    }
    else {
      console.log("There file was written")
    }
  });
})
