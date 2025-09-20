import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import external from 'rollup-plugin-peer-deps-external';
import packageJson from './package.json' with { type: 'json' };
import babel from '@rollup/plugin-babel';
import postcss from 'rollup-plugin-postcss';

export default [
  {
    input: 'lib/index.tsx',
    output: [
      {
        name: 'phantomartist-cjs',
        file: packageJson.main,
        format: 'cjs',
        exports: 'named',
        sourcemap: true
      },
      {
        name: 'phantomartist-esm',
        file: packageJson.module,
        format: 'esm',
        exports: 'named',
        sourcemap: true
      }
    ],
    plugins: [
      typescript({ tsconfig: './tsconfig.build.json' }),
      resolve(),
      commonjs(),
      external(),
      babel({
        babelHelpers: 'bundled',
        plugins: ['@emotion/babel-plugin']
      }),
      postcss({
        extensions: ['.css']
      })
    ],
    external: ['react', 'react-dom', 'react-router-dom', '@emotion/react']
  }
];
