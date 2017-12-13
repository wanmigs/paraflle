// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.


window.remote = require('electron').remote
window.electronFs = remote.require('fs')
window.electronDialog = remote.dialog
window.appPath = remote.app.getAppPath()
window.userFile = appPath + '/data/data.json'
window.srcPath = 'C:/Users/User/Downloads/1678520.png'
window.updateUser = updateUser

function updateUser(data) {
	electronFs.writeFile(userFile, data, (err) => {
      if (err) throw err
  })
}
// electronFs.readFile(file, 'utf8', function(err, data) {

// 	if (err) throw err

// 	users = data;
// })
