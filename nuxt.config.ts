// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

    modules: [
        '@nuxtjs/tailwindcss',
        '@pinia/nuxt',
    ],

    // styleResources: {
    //     scss: [
    //         '@/assets/scss/tailwind.scss',
    //         '@/assets/styles/main.scss',
    //         '@/assets/styles/main.sass',
    //     ],
    // },
    //
    // css: [
    //     '@/assets/styles/main.scss',
    //     '@/assets/scss/tailwind.scss',
    //     '@/assets/styles/main.sass',
    // ],

    buildModules: [
        '@nuxtjs/style-resources',
        '@nuxtjs/svg',
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
