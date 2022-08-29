const path = require('path');
const url = require('url');
const {app, BrowserWindow, Menu} = require('electron');
let win;

function createWindow() {
	win = new BrowserWindow({
		width: 600,
		height: 600,
		icon: __dirname + "assets/icons/mac/icon.icns",
	});

	win.loadURL(url.format({
		pathname: path.join(__dirname, 'index.html'),
		protocol: 'file:',
		slashes: true
	}));
	//win.webContents.openDevTools();

	win.on('closed', () => {
		win = null;
	});
};

app.on('ready', createWindow);


app.on('window-all-closed', () => {
	app.quit();
});
