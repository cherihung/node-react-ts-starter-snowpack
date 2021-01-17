const httpProxy = require('http-proxy');
const proxy = httpProxy.createServer({ target: 'http://localhost:3000' });

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
  packageOptions: {
    installTypes: true
  },
  devOptions: {
    port: 8080,
    open: 'none'
  },
  buildOptions: {
    clean: true,
    out: 'WEB_BUILD',
  },
  routes: [
    { match: 'all', src: '/api/.*', dest: (req, res) => proxy.web(req, res) },
    { match: 'routes', src: '.*', dest: '/index.html' },
  ],
  alias: {
    '@web': './web'
  },
};
