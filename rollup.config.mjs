import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import tailwindcss from 'tailwindcss';
import tailwindConfig from './tailwind.config.mjs';
import packageJson from './package.json' assert { type: 'json' };

export default [
  {
    input: 'lib/index.ts',
    output: [
      {
        name: 'phantomartist',
        file: packageJson.main,
        format: 'umd',
        sourcemap: true
      },
      {
        name: 'phantomartist',
        file: packageJson.module,
        format: 'es',
        sourcemap: true
      }
    ],
    plugins: [
      postcss({
        config: {
          path: './postcss.config.mjs'
        },
        extensions: ['.css'],
        minimize: true,
        modules: true,
        inject: {
          insertAt: 'top'
        },
        plugins: [tailwindcss(tailwindConfig)]
      }),
      resolve(),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json' })
    ]
  }
];
