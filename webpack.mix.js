const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');

mix.sass(
		'resources/scss/main.scss',
		'public/assets/css/'
	)
	.js(
		'resources/js/main.js',
		'public/assets/js/'
	)
	.options({
		processCssUrls: false,
		postCss: [ tailwindcss('./tailwind.config.js') ],
	});
