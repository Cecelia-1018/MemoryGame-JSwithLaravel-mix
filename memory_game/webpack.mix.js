// webpack.mix.js
let mix = require('laravel-mix');

// bundle JavaScript assets + compile Sass files
mix.js('src/app.js', 'dist/app.js').sass('src/css/layout/app.scss','dist/app.css');