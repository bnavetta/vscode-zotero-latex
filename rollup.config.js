import typescript from 'rollup-plugin-typescript';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';
import builtins from 'builtin-modules';

export default {
    input: 'src/extension.ts',
    output: {
        file: 'dist/extension.js',
        format: "cjs",
    },
    external: ['vscode', ...builtins], // The vscode module is generated on the fly
    plugins: [
        typescript(),
        json({
            preferConst: true,
            compact: true,
        }),
        resolve({
            preferBuiltins: true,
        }),
        commonjs()
    ]
}