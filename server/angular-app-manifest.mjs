
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://github.com/Rubiss1118/TareaFinal.git',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/Rubiss1118/TareaFinal.git/button",
    "route": "/Rubiss1118/TareaFinal.git"
  },
  {
    "renderMode": 2,
    "route": "/Rubiss1118/TareaFinal.git/button"
  },
  {
    "renderMode": 2,
    "route": "/Rubiss1118/TareaFinal.git/calendario"
  },
  {
    "renderMode": 2,
    "route": "/Rubiss1118/TareaFinal.git/cards"
  },
  {
    "renderMode": 2,
    "route": "/Rubiss1118/TareaFinal.git/check"
  },
  {
    "renderMode": 2,
    "route": "/Rubiss1118/TareaFinal.git/chips"
  },
  {
    "renderMode": 2,
    "route": "/Rubiss1118/TareaFinal.git/divider"
  },
  {
    "renderMode": 2,
    "route": "/Rubiss1118/TareaFinal.git/autocomplete"
  },
  {
    "renderMode": 2,
    "route": "/Rubiss1118/TareaFinal.git/menu"
  },
  {
    "renderMode": 2,
    "route": "/Rubiss1118/TareaFinal.git/panel"
  },
  {
    "renderMode": 2,
    "route": "/Rubiss1118/TareaFinal.git/progress"
  },
  {
    "renderMode": 2,
    "route": "/Rubiss1118/TareaFinal.git/sheet"
  },
  {
    "renderMode": 2,
    "route": "/Rubiss1118/TareaFinal.git/slider"
  },
  {
    "renderMode": 2,
    "route": "/Rubiss1118/TareaFinal.git/tabla"
  },
  {
    "renderMode": 2,
    "route": "/Rubiss1118/TareaFinal.git/toolbar"
  },
  {
    "renderMode": 2,
    "route": "/Rubiss1118/TareaFinal.git/tree"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 23481, hash: '6021be0f6e3a829b0031b3532803ea53a32bf4e611698b0b5b11933270c71751', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17181, hash: 'a5c5436acb91473ce61493019894a17b926ee0b2d40ee0bc43444e33e1c85f97', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'button/index.html': {size: 90111, hash: 'ca28e8df33b1f6298b16c0a7bb744495ffd52cc46fb8c7c1931c026e11201a81', text: () => import('./assets-chunks/button_index_html.mjs').then(m => m.default)},
    'sheet/index.html': {size: 59097, hash: 'be072ca05955c5ad6ebefddadc8c2a6161ac41810cb439c04c119b8fb95b158b', text: () => import('./assets-chunks/sheet_index_html.mjs').then(m => m.default)},
    'autocomplete/index.html': {size: 100839, hash: 'c167475ff226653c5c2ea13ff6c393ce4d7c25ee73b25bf36faa1c74478e9924', text: () => import('./assets-chunks/autocomplete_index_html.mjs').then(m => m.default)},
    'tabla/index.html': {size: 72928, hash: 'e42fb88a12b44b39e97839a9127c3c5c299444cbf07cba4db2ef55634c4ba3b9', text: () => import('./assets-chunks/tabla_index_html.mjs').then(m => m.default)},
    'calendario/index.html': {size: 100627, hash: '78b6548663b73ce78f72cc42bf28c58ba8080d2855886cb4d4ed42be9362949f', text: () => import('./assets-chunks/calendario_index_html.mjs').then(m => m.default)},
    'divider/index.html': {size: 78513, hash: '9ed49321b8f221ca0dfa0ebef998b46a0e26e02a6851a063c5fb2bb765953f45', text: () => import('./assets-chunks/divider_index_html.mjs').then(m => m.default)},
    'tree/index.html': {size: 65241, hash: '6250a27d969d1fede4cea2b332014f05f5cac2ad8275471b089be0e9d2e5d524', text: () => import('./assets-chunks/tree_index_html.mjs').then(m => m.default)},
    'check/index.html': {size: 96925, hash: '2eb8d65d562e48ffabb464060a3bb2f4acc3adb374bcd20c035e7b956c429f08', text: () => import('./assets-chunks/check_index_html.mjs').then(m => m.default)},
    'toolbar/index.html': {size: 65037, hash: '2f93b45901d934bb29e90e62c17c7b13fb7661e398ae5ccd9c3d0221905b8719', text: () => import('./assets-chunks/toolbar_index_html.mjs').then(m => m.default)},
    'progress/index.html': {size: 66780, hash: '68345d7aa01b3d9b0876edbdf9aa5943e19b994ed45793aa7311b8ca3daba30b', text: () => import('./assets-chunks/progress_index_html.mjs').then(m => m.default)},
    'menu/index.html': {size: 59149, hash: '6100b31a26249d23889f61b401d76899f916899253efaf5b935ccda7160df654', text: () => import('./assets-chunks/menu_index_html.mjs').then(m => m.default)},
    'cards/index.html': {size: 65364, hash: 'd324c3bda72b73b0780bcc009a6a1143e3245a8d377706bceaefa18e1ac2c5f8', text: () => import('./assets-chunks/cards_index_html.mjs').then(m => m.default)},
    'slider/index.html': {size: 69364, hash: 'd3403face87c6f6c3732d5cc9aad6d562c278dc120ac95d0109d8df08b0c881a', text: () => import('./assets-chunks/slider_index_html.mjs').then(m => m.default)},
    'panel/index.html': {size: 112904, hash: '23f4984abd1ed3d42d24a11f255b1bc35d8ec53521959b72b64da03538a1fb22', text: () => import('./assets-chunks/panel_index_html.mjs').then(m => m.default)},
    'chips/index.html': {size: 122798, hash: '9755bb442ee8a7103a48010e8f12f68ae10e7379eda0586928bac0441b9f40ee', text: () => import('./assets-chunks/chips_index_html.mjs').then(m => m.default)},
    'styles-EHQAJYJW.css': {size: 6927, hash: 'F+F5e1Mm3gA', text: () => import('./assets-chunks/styles-EHQAJYJW_css.mjs').then(m => m.default)}
  },
};
