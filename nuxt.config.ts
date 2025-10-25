// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15', // Kept from your original config
  devtools: { enabled: true },
  
  // Added '@nuxt/image' for performance optimization
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image'
  ],

  // Added to pre-load Google Fonts for better performance
  app: {
    head: {
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { 
          rel: 'preconnect', 
          href: 'https://fonts.gstatic.com', 
          crossorigin: 'anonymous' 
        },
        { 
          rel: 'stylesheet', 
          href: 'https://fonts.googleapis.com/css2?family=Albert+Sans:wght@600&family=Inter:wght@400&display=swap' 
        }
      ]
    }
  }
})

