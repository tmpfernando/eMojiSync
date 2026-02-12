const { app, BrowserWindow, ipcMain, powerSaveBlocker, Menu, Tray } = require('electron');
const path = require('path');

app.name = "eMojiSync";
const iconPath = path.join(__dirname, 'assets', 'icon.png');

let dashboardWindow;
let avatarWindow;
let tray = null;

// Flags para manter o motor gráfico e de áudio sempre ligados
app.commandLine.appendSwitch('disable-renderer-backgrounding');
app.commandLine.appendSwitch('disable-background-timer-throttling');
app.commandLine.appendSwitch('disable-backgrounding-occluded-windows');
app.commandLine.appendSwitch('background-best-effort', 'false');

powerSaveBlocker.start('prevent-app-suspension');

function createWindows() {
    // 1. JANELA DO AVATAR
    avatarWindow = new BrowserWindow({
        width: 1920,
        height: 1080,
        transparent: true,
        frame: false,
        icon: iconPath,
        show: false,
        skipTaskbar: true, // Remove o ícone da barra de tarefas para não poluir
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            backgroundThrottling: false
        }
    });

    avatarWindow.loadFile('avatar.html');
    avatarWindow.setIgnoreMouseEvents(true);
    avatarWindow.once('ready-to-show', () => avatarWindow.show());

    // 2. JANELA DE CONFIGURAÇÕES (DASHBOARD)
    dashboardWindow = new BrowserWindow({
        width: 800,
        height: 950,
        title: "eMojiSync - Dashboard",
        icon: iconPath,
        autoHideMenuBar: true,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            backgroundThrottling: false
        }
    });

    dashboardWindow.loadFile('index.html');

    /**
     * NOVA LÓGICA DE MINIMIZAÇÃO:
     * Escondemos a Dashboard para manter o áudio.
     * Mantemos o Avatar "aberto", mas enviamos para trás de tudo.
     */
    dashboardWindow.on('minimize', (event) => {
        event.preventDefault();
        dashboardWindow.hide(); // Esconde a dashboard (áudio continua ok)
        
        // O Avatar continua aberto para o OBS ver, mas vai para trás das janelas
        if (avatarWindow) {
            avatarWindow.blur(); 
            // Opcional: avatarWindow.setAlwaysOnTop(false);
        }
    });

    const showAll = () => {
        dashboardWindow.show();
        dashboardWindow.restore();
        if (avatarWindow) {
            avatarWindow.show(); // Garante que esteja visível
        }
    };

    dashboardWindow.on('closed', () => {
        app.quit();
    });

    createTray(showAll);
}

function createTray(showAllCallback) {
    tray = new Tray(iconPath);
    const contextMenu = Menu.buildFromTemplate([
        { label: 'Open Settings', click: () => showAllCallback() },
        { type: 'separator' },
        { label: 'Quit eMojiSync', click: () => app.quit() }
    ]);

    tray.setToolTip('eMojiSync - Running');
    tray.setContextMenu(contextMenu);
    tray.on('double-click', () => showAllCallback());
}

/**
 * COMUNICAÇÃO IPC
 */
ipcMain.on('update-avatar', (event, data) => {
    if (avatarWindow && !avatarWindow.isDestroyed()) {
        avatarWindow.webContents.send('apply-changes', data);
    }
});

app.whenReady().then(createWindows);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});