<template>
  <!-- 
    This is the main layout for our new, real home page.
    It's composed of our 9 modular components.
  -->
  <div class="font-sans text-brand-dark antialiased">
    
    <AppHeader />
    <HeroSection />
    <PartnersSection />
    <FeaturesSection />
    <BenefitsSection />
    <PricingSection />
    <DifferentiatorsSection />
    <CtaSection />
    <AppFooter />

  </div>
</template>

<script setup>
// Nuxt will auto-import all 9 components from the /components folder.
</script>

<style>
/* Global styles for smoother fonts */
body {
  background-color: #ffffff; /* Set a default white background */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

