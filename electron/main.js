const { app, BrowserWindow, nativeImage } = require("electron");
const path = require("path");

function createWindow() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    // title: "Electron app", 
    icon: nativeImage.createFromPath("public/favicon.ico"), 
    webPreferences: {
      // web settings
      webviewTag: true, 
      webSecurity: false, 
      preload: path.join(__dirname, "preload.js"),
      nodeIntegration: true,
    },
  });

  // Load the index.html file.
  mainWindow.loadFile("build/index.html");

  // when electron ready the window will show
  mainWindow.on("ready-to-show", () => {
    mainWindow.show();
    mainWindow.focus();
  });

  // Open the DevTools.
  mainWindow.webContents.openDevTools();
}

app.allowRendererProcessReuse = true;

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow();
});

// Quit when all windows are closed.
app.on("window-all-closed", function () {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  console.log("window-all-closed");
  if (process.platform !== "darwin") app.quit();
});

app.on("activate", function () {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
