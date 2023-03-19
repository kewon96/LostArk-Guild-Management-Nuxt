// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({

    modules: [
        '@nuxtjs/tailwindcss',
        '@pinia/nuxt',
    ],

    build: {
        transpile: ['vuetify'],
    },

    buildModules: [
        'vuetify',
        '@nuxtjs/vuetify',
    ],

    app: {
        head: {
            title: 'Lok-Guild',
            meta: [
                { name: 'description', content: '로스트아크 길드 관리', }
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
})
