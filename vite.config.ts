import { defineConfig } from 'vite'
import react from "@vitejs/plugin-react-swc";
import utools from '@ver5/vite-plugin-utools';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({ tsDecorators: true }),
    utools({
      configFile: './utools/plugin.json',
      external: ['uTools'],
      preload: {
        watch: true,
        name: 'services',
      },
      // buildUpx: false
      // buildUpx: {
      //   outName: '[pluginName]_[version].upx',
      // },
    })
  ]
})
