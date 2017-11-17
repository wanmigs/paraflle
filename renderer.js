// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const electron = require('electron')
var jsonfile = require('jsonfile')
const app = electron.remote.app
var dataPath = app.getAppPath() + '/data'

var file = dataPath + '/data.json';
var obj = {name: 'JP'}
jsonfile.writeFile(file, obj, function (err) {
console.error(err)
})
// console.dir(jsonfile.readFileSync(file))

