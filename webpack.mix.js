const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');
const purgecss = require('laravel-mix-purgecss');

mix.sass(
		'resources/scss/main.scss',
		'public/assets/css/'
	)
	.js(
		'resources/js/main.js',
		'public/assets/js/'
	)
    .purgeCss({
        extensions: ['html', 'md', 'js', 'php', 'vue'],
        folders: ['public'],
        whitelistPatterns: [/language/, /hljs/],
    })
	.options({
		processCssUrls: false,
		postCss: [ tailwindcss('./tailwind.config.js') ],
	});