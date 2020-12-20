/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: {url: '/', static: true},
    web: {url: '/_dist_'},
  },
  plugins: [
    [
      '@snowpack/plugin-run-script',
      {
        cmd: 'tsc -p tsconfig.web.json --noEmit',
        watch: '$1 --watch'
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
