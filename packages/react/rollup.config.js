import typescript from "@rollup/plugin-typescript";
import alias from "rollup-plugin-alias";
import { terser } from "rollup-plugin-terser";
import pkg from "./package.json";

export default {
  input: "src/index.ts",
  output: [
    {
      file: pkg.main,
      format: "cjs",
    },
    {
      file: pkg.module,
      format: "es",
    },
  ],
  plugins: [
    alias({
      resolve: [".jsx", ".js", ".ts", ".tsx"],
      entries: [{ find: "i18nix", replacement: "../../core/src/index" }],
    }),
    typescript(),
    terser(),
  ],
  external: ["i18nix", "react"],
};
