<<<<<<< HEAD
import { app, BrowserWindow } from "electron";
import expressServer from "../server/app.js";
import * as express from "express";
import * as path from "path";

const server = new expressServer(express());

function createWindow() {
  const win = new BrowserWindow({
    width: 850,
    height: 650,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      nodeIntegration: true,
      devTools: true,
    },
    icon: "../favicon.ico",
  });
  win.loadFile("../index.html");
}

app.whenReady().then(() => {
  createWindow();
  server.run();
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
    server.close();
  }
});
=======
import { app, BrowserWindow } from "electron";
import expressServer from "../server/app.js";
import * as express from "express";
import * as path from "path";

const server = new expressServer(express());

function createWindow() {
  const win = new BrowserWindow({
    width: 850,
    height: 650,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      nodeIntegration: true,
      devTools: true,
    },
    icon: "../favicon.ico",
  });
  win.loadFile("../index.html");
}

app.whenReady().then(() => {
  createWindow();
  server.run();
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
    server.close();
  }
});
>>>>>>> 0b7f70c6e632db25455c392e4e0f596d442c8834
