const electron = require('electron');

// Main process, main window
const {app, BrowserWindow} = electron;

app.on('ready', () => {
    const mainWindow = new BrowserWindow({});
    
    mainWindow.loadURL(`file://${__dirname}/index.html`);

    console.log('App lock and loaded !')
});