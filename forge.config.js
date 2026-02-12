module.exports = {
  packagerConfig: {
    name: 'eMojiSync',
    executableName: 'eMojiSync',
    icon: './assets/icon', // Não coloque a extensão .ico ou .png aqui, o Forge escolhe a certa
    extraResource: [
      './assets/icon.png'
    ],
  },
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {
        name: 'eMojiSync',
        setupIcon: './assets/icon.ico', // Ícone do instalador (.ico para Windows)
        setupExe: 'eMojiSync-Setup.exe',
      },
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: ['win32'],
    },
  ],
};