import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
import type {NuxtPage} from "@nuxt/schema";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  build: {
    transpile: ['vuetify']
  },
  modules: [(_options, nuxt) => {
    nuxt.hooks.hook('vite:extendConfig', (config) => {
      // @ts-expect-error
      config.plugins.push(vuetify({ autoImport: true }))
    })
  }],
  runtimeConfig: {
    baseURL: 'http://localhost:9999',
    size: 10,
    public: {

    },
  },
  vite: {
    vue: {
      template: {
        transformAssetUrls
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '',
        }
      }
    }
  },
  nitro: {
    prerender: {
      routes: ['/']
    }
  },
  hooks: {
    'prerender:routes' ({routes}) {
      // 预构建路由 静态化时可在此添加
      // for (let i = 1; i <= 9; i++) {
      //   routes.add('/blogs/' + i)
      // }
    },
    'pages:extend' (pages) {
      const removePagesMatching =  (pattern: RegExp, pages: NuxtPage[] = [])=> {
        const pagesToRemove: NuxtPage[] = []
        for (const page of pages) {
          if (page.file && pattern.test(page.file)) {
            pagesToRemove.push(page)
          } else {
            removePagesMatching(pattern, page.children)
          }
        }
        for (const page of pagesToRemove) {
          pages.splice(pages.indexOf(page), 1)
        }
      }
      removePagesMatching(/\.ts$/, pages)
    }
  }
})
