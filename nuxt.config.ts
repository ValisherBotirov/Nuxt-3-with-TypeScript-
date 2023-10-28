import { resolve } from "path";
export default defineNuxtConfig({
  devtools: { enabled: false },
  alias:{
    "@": resolve(__dirname,"/")
  },
  css:['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
