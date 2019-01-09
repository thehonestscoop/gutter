import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import {uglify} from 'rollup-plugin-uglify';
import minify from 'rollup-plugin-babel-minify';
import fs from 'fs';

let licenses = fs.readFileSync('./src/licenses.js').toString();


export default [
// ES5
{
  input: 'src/main.js',
  output: {
  	file: 'dist/gutter.es5.js',
  	format: 'umd',
  	sourceMap: 'inline',
  	name: 'ths'
  },
  plugins: [
    resolve(),
    commonjs(), // https://rollupjs.org/guide/en#with-npm-packages
    babel({
      exclude: 'node_modules/**' // only transpile our source code
    }),
  ]
},
// ES5-min
{
  input: 'src/main.js',
  output: {
    file: 'dist/gutter.es5.min.js',
    format: 'umd',
    sourceMap: 'inline',
    name: 'ths'
  },
  plugins: [
    resolve(),
    commonjs(),
    babel({
      exclude: 'node_modules/**' 
    }),
    uglify(),
  ]
},
// ES6
{
  input: 'src/main.js',
  output: {
    file: 'dist/gutter.esm.js',
    format: 'umd',
    sourceMap: 'inline',
    name: 'ths'
  },
  plugins: [
    resolve(),
    commonjs(),
  ]
},
// ES6-min
{
  input: 'src/main.js',
  output: {
    file: 'dist/gutter.esm.min.js',
    format: 'umd',
    sourceMap: 'inline',
    name: 'ths'
  },
  plugins: [
    resolve(),
    commonjs(),
    minify({comments: false, banner: licenses, bannerNewLine: true}),
  ]
}
];