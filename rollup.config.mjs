import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import stylexPlugin from '@stylexjs/rollup-plugin';
import external from 'rollup-plugin-peer-deps-external';
import packageJson from './package.json' with { type: 'json' };
import postcss from 'rollup-plugin-postcss';

export default [
  {
    input: 'lib/index.ts',
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
      typescript({ tsconfig: './tsconfig.json' }),
      resolve(),
      commonjs(),
      external(),
      stylexPlugin({
        useLayers: true,
        dev: true,
        classNamePrefix: 'x-',
        unstable_moduleResolution: {
          type: 'commonJS',
          rootDir: './lib',
          themeFileExtensions: ['.css']
        }
      }),
      postcss({
        extensions: ['.css']
      })
    ],
    external: ['react', 'react-dom', 'stylex']
  }
];
