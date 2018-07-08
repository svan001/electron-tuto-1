const electron = require('electron');
const ffmepg = require('fluent-ffmpeg');

// Main process, main window, ipc main
const { app, BrowserWindow, ipcMain } = electron;

let mainWindow;
app.on('ready', () => {
    mainWindow = new BrowserWindow({});
    mainWindow.loadURL(`file://${__dirname}/index.html`);

    console.log('App lock and loaded !');
});

ipcMain.on('video:submit', (event, path) => {
    console.log('video:submit received, path ' + path);

    ffmepg.ffprobe(path, (err, metadata) => {
        let { duration } = metadata.format;
        console.log(`Video duration is ${duration}`);

        mainWindow.webContents.send('video:metadata', duration);
    });
});