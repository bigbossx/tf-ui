import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { uglify } from 'rollup-plugin-uglify';
import { terser } from 'rollup-plugin-terser'

import packageJSON from './package.json';

const minifyExtension = pathToFile => pathToFile.replace(/\.js$/, '.min.js');
const input = './src/index.js';
const configGenerator = ({ output = {}, plugins = [] }) => {
  return {
    input,
    output: output,
    plugins: [
      babel({
        exclude: 'node_modules/**',
      }),
      peerDepsExternal(),//support export peerDependencies
      resolve(),//external dependency that is required at runtime.
      commonjs(),//enable CommonJS modules to be included in the bundle
    ].concat(plugins),
  }
}
export default [
  // CommonJS
  configGenerator({
    output: {
      file: packageJSON.main,
      format: 'cjs',
    },
  }),
  configGenerator({
    output: {
      file: minifyExtension(packageJSON.main),
      format: 'cjs',
    },
    plugins: [uglify()],
  }),
  // UMD
  configGenerator({
    output: {
      file: packageJSON.browser,
      format: 'umd',
      name: 'tfUI',
      globals: {
        react: 'React',
        '@emotion/styled': 'styled',
        '@emotion/core': 'core',
      },
    },
  }),
  configGenerator({
    output: {
      file: minifyExtension(packageJSON.browser),
      format: 'umd',
      name: 'tfUi',
      globals: {
        react: 'React',
        '@emotion/styled': 'styled',
        '@emotion/core': 'core',
      },
    },
    plugins: [terser()],
  }),
  // ES
  configGenerator({
    output: {
      file: packageJSON.module,
      format: 'es',
      exports: 'named',
    },
  }),
  configGenerator({
    output: {
      file: minifyExtension(packageJSON.module),
      format: 'es',
      exports: 'named',
    },
    plugins: [terser()],
  }),
];
