import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import stylexPlugin from '@stylexjs/rollup-plugin';
import packageJson from './package.json' assert { type: 'json' };

export default [
  {
    input: 'lib/index.ts',
    output: [
      {
        name: 'phantomartist-umd',
        file: packageJson.main,
        format: 'umd',
        exports: 'named',
        sourcemap: true
      },
      {
        name: 'phantomartist-es',
        file: packageJson.module,
        format: 'es',
        exports: 'named',

        sourcemap: true
      }
    ],
    plugins: [
      resolve(),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json' }),

      stylexPlugin({
        useLayers: true,
        dev: true,
        // filename: './dist/stylex.css',
        classNamePrefix: 'x-',
        unstable_moduleResolution: {
          type: 'commonJS',
          rootDir: './lib',
          themeFileExtensions: ['.css']
        }
      })
    ]
  }
];
