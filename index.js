const electron = require('electron');
const ffmepg = require('fluent-ffmpeg');

// Main process, main window, ipc main
const { app, BrowserWindow, ipcMain } = electron;

app.on('ready', () => {
    const mainWindow = new BrowserWindow({});

    mainWindow.loadURL(`file://${__dirname}/index.html`);

    console.log('App lock and loaded !');
});

ipcMain.on('video:submit', (event, path) => {
    console.log('video:submit received, path ' + path);

    ffmepg.ffprobe(path, (err, metadata) => {
        console.log('Video duration : ' + metadata.format.duration);
    });
});