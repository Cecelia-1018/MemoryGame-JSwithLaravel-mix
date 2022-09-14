// webpack.mix.js
let mix = require('laravel-mix');

// bundle JavaScript assets + compile Sass files
mix.js('src/app.js', 'dist/app.js').sass('src/css/layout/app.scss','dist/app.css');

// browser Sync
mix.browserSync('http://127.0.0.1:5500/memory_game/');