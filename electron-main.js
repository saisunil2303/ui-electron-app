'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const electron = require('electron');
// const opertation = require('./electron-dep');
const crypto = require('crypto');
//const codependency = require('codependency');
const path = require("path");
const url = require("url");
const { app, BrowserWindow } = electron;
// Store a reference to the main window to prevent garbage collection
let mainWindow = null;
function createWindow() {
   // console.log(opertation.sum(4,5));
    mainWindow = new BrowserWindow({
        title: 'Test Shell',
        width: 1024,
        height: 768,
        'min-width': 1024,
        'min-height': 768,
        resizable: true,
        position: 'center',
        'use-content-size': true,
        show: false,
        webPreferences: {
            nodeIntegration: true,
        },
    });
    mainWindow.loadURL(url.format({
        protocol: 'file',
        //pathname: path.resolve(__dirname,'dist/ui-app-04/electron-app', 'index.html'),
        pathname: path.resolve(__dirname, 'index.html'),
        slashes: true,
    }));
    mainWindow.show();
    mainWindow.focus();
    // TODO add configuration for loading devTools
    //mainWindow.webContents.openDevTools();
    // Emitted when the window is closed.
    mainWindow.on('closed', () => {
        // Dereference the window object
        mainWindow = null;
    });
}
// Emitted when the window is closed.
app.on('window-all-closed', () => {
    app.quit();
});
app.on('ready', () => {
    createWindow();
});

//# sourceMappingURL=electron.js.map