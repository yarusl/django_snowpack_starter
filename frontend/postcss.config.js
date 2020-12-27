const cssnano = require('cssnano');
const postcssPresetEnv = require('postcss-preset-env');
const postcssNormalize = require('postcss-normalize');
const postcssFlexbugsFixes = require('postcss-flexbugs-fixes');
const autoprefixer = require("autoprefixer");
module.exports = {
  plugins: [
    autoprefixer(),
    cssnano(),
    postcssFlexbugsFixes(),
    postcssPresetEnv(),
    postcssNormalize() 
  ],
};