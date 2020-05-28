import alias from "@rollup/plugin-alias"
import typescript from "@rollup/plugin-typescript"
import { terser } from "rollup-plugin-terser"
import pkg from "./package.json"

export default {
  input: "src/index.ts",
  output: [
    {
      file: pkg.main,
      format: "cjs",
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: "es",
      sourcemap: true,
    },
  ],
  plugins: [
    typescript(),
    alias({
      entries: [{ find: "i18nix", replacement: "../../core/src/index" }],
    }),
    terser(),
  ],
  external: ["i18nix", "react"],
};
