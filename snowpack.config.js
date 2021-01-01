/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: {url: '/'},
    web: {url: '/dist'},
  },
  plugins: [
    [
      '@snowpack/plugin-typescript',
      {
        args: '--project web/tsconfig.json'
      }
    ],
    [
      '@snowpack/plugin-react-refresh',
      '@snowpack/plugin-dotenv',
      '@snowpack/plugin-webpack'
    ]
  ],
  install: [
    /* ... */
  ],
  installOptions: {
    installTypes: true
  },
  devOptions: {
    port: 8080,
    out: 'GENERATED',
    open: 'none'
  },
  buildOptions: {
    /* ... */
  },
  proxy: {
    '/api': 'http://localhost:3000/api'
  },
  alias: {
    '@web': './web'
  },
};
