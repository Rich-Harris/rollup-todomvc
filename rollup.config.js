import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';

export default {
	entry: 'src/app.js',
	dest: 'dist/bundle.js',
	plugins: [ babel(), uglify() ],
	format: 'iife'
};
