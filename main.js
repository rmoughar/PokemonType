const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const windowsStateKeeper = require('electron-window-state');

let win;
function createWindow () {

  let mainWindowState = windowsStateKeeper({
    width: 400,
    height: 534,
  });

  win = new BrowserWindow({
    //x: mainWindowState.x,
    //y: mainWindowState.y,
    width: 434,
    height: 534,
    //width: mainWindowState.width,
    //height: mainWindowState.height,
    frame: false,
    webPreferences: {
      preload: path.join(__dirname,'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
    }
  });

  //mainWindowState.manage(win);
  win.loadFile('index.html');

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
