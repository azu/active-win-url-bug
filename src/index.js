const { app, BrowserWindow, globalShortcut } = require('electron');
const path = require('path');
const activeWin = require("active-win");

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) { // eslint-disable-line global-require
    app.quit();
}

const createWindow = () => {
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
    });
    // and load the index.html of the app.
    mainWindow.loadFile(path.join(__dirname, 'index.html'));
    globalShortcut.register("CommandOrControl+Option+Shift+D", () => {
        try {
            const activeInfo = activeWin.sync();
            if (!activeInfo) {
                mainWindow.webContents.executeJavaScript(`document.body.innerHTML = 'Not found active window'`);
                console.error(new Error("Not found active window"));
                return;
            }
            console.log("activeInfo", activeInfo);
            mainWindow.webContents.executeJavaScript(`document.body.innerHTML = '${JSON.stringify(activeInfo)}'`);
        } catch (error) {
            mainWindow.webContents.executeJavaScript(`document.body.innerHTML = '${error.message}'`);
            console.error(error);
        }
    })
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
