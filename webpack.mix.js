const mix = require('laravel-mix');

mix.js('resources/js/app.js', 'public/js')
   .sass('resources/sass/app.scss', 'public/css')
   .options({ processCssUrls: false })
   .webpackConfig({ output: { chunkFilename: '[name].js?id=[chunkhash]' } })
   .version();
