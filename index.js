const electron = require('electron');

// Main process
const {app} = electron;

app.on('ready', () => {
    console.log('App lock and loaded !')
})