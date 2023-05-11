// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

    modules: [
        '@nuxtjs/tailwindcss',
        '@pinia/nuxt',
    ],

    devtools: {
        // Enable devtools (default: true)
        enabled: true,
        // VS Code Server options
        vscode: {},
        // ...other options
    },

    buildModules: [
        '@nuxtjs/style-resources',
        '@nuxtjs/svg',
    ],

    /** Mixin같은 style변수를 .vue에서 전역으로 사용할 수 있게 설정 */
    styleResources: {
        sass: './assets/styles/mixins/_mixins.sass'
    },

    /** global import Style Sheet */
    css: [
        '@/assets/styles/main.sass',
    ],

    app: {
        head: {
            title: 'Lok-Guild',
            meta: [
                { name: 'description', content: '로스트아크 길드 관리', },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' }
            ],
            link: [
                { rel: "stylesheet", href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }
            ]
        }
    },

    /**  */
    imports: {
        dirs: [
            './stores',
        ]
    },

    components: [
        {
            path: '~/components',
            pathPrefix: false
        }
    ],

    pinia: {
        autoImports: ['defineStore', 'acceptHMRUpdate', 'storeToRefs'],
    },

    devServer: {
        url: "http://localhost:5050",
        port: 5050,
    }
})