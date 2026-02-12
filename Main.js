const { app, BrowserWindow, ipcMain, powerSaveBlocker } = require('electron');
const path = require('path');

// Define o nome do aplicativo para o Sistema Operacional
app.name = "eMojiSync";

let dashboardWindow;
let avatarWindow;

/**
 * 1. OTIMIZAÇÕES DE HARDWARE (ANTERIORES À INICIALIZAÇÃO)
 * Desativar recursos pesados do Chromium para focar em renderização 2D leve.
 */
app.commandLine.appendSwitch('disable-software-rasterizer');
app.commandLine.appendSwitch('disable-gpu-compositing');
app.commandLine.appendSwitch('disable-renderer-backgrounding');
app.commandLine.appendSwitch('disable-background-timer-throttling');
app.commandLine.appendSwitch('force-device-scale-factor', '1');

/**
 * CONFIGURAÇÕES GERAIS DE PERFORMANCE
 */
powerSaveBlocker.start('prevent-app-suspension');

const iconPath = path.join(__dirname, 'assets', 'icon.png');

function createWindows() {
    // 1. JANELA DO AVATAR (O EMOJI)
    avatarWindow = new BrowserWindow({
        width: 1920,
        height: 1080,
        transparent: true,
        frame: false,
        icon: iconPath,
        alwaysOnTop: false,
        resizable: true,
        show: false, // Evita o flash branco ao carregar
        webPreferences: {
            nodeIntegration: true,    // Necessário para o ipcRenderer funcionar
            contextIsolation: false,  // Permite o uso do require no script
            backgroundThrottling: false,
            offscreen: false,
            devTools: false
        }
    });

    avatarWindow.loadFile('avatar.html');
    avatarWindow.setIgnoreMouseEvents(true);

    // Mostra a janela apenas quando estiver pronta
    avatarWindow.once('ready-to-show', () => avatarWindow.show());

    // 2. JANELA DE CONFIGURAÇÕES (DASHBOARD)
    dashboardWindow = new BrowserWindow({
        width: 800,
        height: 950,
        title: "eMojiSync - Dashboard",
        icon: iconPath,
        resizable: true,
        autoHideMenuBar: true,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            backgroundThrottling: false
        }
    });

    dashboardWindow.loadFile('index.html');

    dashboardWindow.on('closed', () => {
        app.quit();
    });
}

/**
 * COMUNICAÇÃO ENTRE JANELAS (IPC)
 * eMojiSync utiliza um canal direto para enviar dados de áudio processados.
 */
ipcMain.on('update-avatar', (event, data) => {
    if (avatarWindow && !avatarWindow.isDestroyed()) {
        // Envia os dados de transformação e emoji para o Canvas do avatar
        avatarWindow.webContents.send('apply-changes', data);
    }
});

ipcMain.on('force-focus-avatar', () => {
    if (avatarWindow && !avatarWindow.isDestroyed()) {
        avatarWindow.moveTop();
    }
});

// Inicialização do App
app.whenReady().then(createWindows);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});