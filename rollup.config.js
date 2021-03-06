import pkg from "./package.json";
import buble from "rollup-plugin-buble";
import { terser } from "rollup-plugin-terser";

let plugins = [
    buble({
        jsx: "h",
        objectAssign: "Object.assign"
    }),
    terser()
];

export default {
    input: pkg.source,
    output: [
        {
            file: pkg.main,
            sourcemap: true,
            format: "cjs"
        },
        {
            file: pkg["umd:main"],
            sourcemap: true,
            format: "umd",
            name: pkg.name,
            globals: {
                "@atomico/core": "@atomico/core"
            }
        },
        {
            file: pkg["module"],
            sourcemap: true,
            format: "es"
        }
    ],
    plugins
};
