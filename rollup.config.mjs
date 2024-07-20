import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import packageJson from './package.json' assert { type: 'json' };

export default [
  {
    input: './lib/index.ts',
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
      resolve(),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json' })
    ]
  }
];
