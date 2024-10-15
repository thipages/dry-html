import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
export default {
    input: './src/auto.js',
    output: {
        file: './dry-html.js',
        format: 'esm'
    },
    plugins: [
        resolve(),
        terser()
    ]
}
