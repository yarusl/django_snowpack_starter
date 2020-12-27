/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: {url: '/', static: true},
    src: {url: '/dist'},
  },
  plugins: [
    ['@snowpack/plugin-typescript'],
    ["@snowpack/plugin-sass"],
    ["@snowpack/plugin-optimize"],
    ["@snowpack/plugin-postcss"],
    [
      'snowpack-plugin-imagemin',
      {
        /* see "Plugin Options" below */
        include: ['**/*.jpg', '**/*.png'],
        plugins: [
          require('imagemin-mozjpeg')({quality: 90, progressive: true}),
          require('imagemin-optipng')({optimizationLevel: 6}),
        ],
      },
    ]
  ],
  install: [
    /* ... */
  ],
  installOptions: {
    installTypes: true,
  },
  devOptions: {
    port: 3050
  },
  buildOptions: {
    
  },
  proxy: {
    '/api': 'http://localhost:8000/api',
  },
  alias: {
    /* ... */
  },
};
