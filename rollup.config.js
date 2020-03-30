import commonjs from '@rollup/plugin-commonjs';
import babel from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import replace from '@rollup/plugin-replace';
import json from '@rollup/plugin-json';

import { terser } from 'rollup-plugin-terser';

import * as meta from './package.json';

const outputCommon = {
  name: 'liminoid-react',
  banner: `// ${meta.homepage} v${
    meta.version
  } Copyright ${new Date().getFullYear()} ${meta.author.name}`
};

const plugins = [
  resolve(),
  babel(),
  json(),
  postcss({
    plugins: []
  }),
  replace({
    'process.env.NODE_ENV': JSON.stringify('production')
  })
];

////////////////////
// main library files
////////////////////
const umd = {
  input: 'src/index.js',
  plugins: [...plugins, commonjs()],
  output: [
    {
      ...outputCommon,
      file: 'dist/liminoid-react.umd.min.js',
      format: 'umd',
      plugins: [
        terser({
          output: {
            preamble: outputCommon.banner
          }
        })
      ]
    }
  ]
};

const module = {
  input: 'src/index.js',
  plugins: [...plugins, commonjs()],
  output: [
    {
      ...outputCommon,
      file: 'dist/liminoid-react.esm.dev.js',
      format: 'esm'
    },
    {
      ...outputCommon,
      file: 'dist/liminoid-react.esm.min.js',
      format: 'esm',
      plugins: [
        terser({
          output: {
            preamble: outputCommon.banner
          }
        })
      ]
    }
  ]
};

export default [umd, module];
