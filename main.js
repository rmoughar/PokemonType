
const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

let win;
function createWindow () {

  win = new BrowserWindow({
    width: 434,
    height: 534,
    frame: false,
    webPreferences: {
      preload: path.join(__dirname,'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
    }
  });

  win.loadFile('index.html');
  //win.loadURL('http://localhost:5500');

  //takes in messages from frontend and runs minimize/close 
  ipcMain.removeAllListeners('minimize-window');
  ipcMain.removeAllListeners('close-window');

  ipcMain.on('minimize-window', () => {
    if(win && !win.isDestroyed()) {
      win.minimize();
    }
  });

  ipcMain.on('close-window', () => {
    if(win && !win.isDestroyed()) {
      win.close();
    }
  });
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});
