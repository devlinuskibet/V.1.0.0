<template>
  <!-- 
    We set 'font-inter' as the default font for the whole page,
    since "DartCode AI" uses it.
  -->
  <div class="antialiased text-white font-inter">
    
    <main>
      <div class="relative flex items-center h-screen overflow-hidden bg-[#42389E]">

        <!-- 
          UPDATED: Background Pattern Overlay
          - Based on your "Ellipse 3" screenshot (5.1px width).
          - We'll use a 2.5px radius dot (which makes a 5px dot).
          - We'll increase the grid spacing to 40px so they are farther apart.
        -->
        <div 
          class="absolute inset-0 opacity-10" 
          style="background-image: radial-gradient(#A8A6FF 2.5px, transparent 2.5px); background-size: 40px 40px;"
        ></div>

        <!-- 
          UPDATED: Background Noise/Texture Overlay
          - This is now UNCOMMENTED.
          - This will add the "rough" texture from Figma.
          - We've updated the URL to '/Noise.png' to match your file name.
        -->
        <div 
          class="absolute inset-0 opacity-[0.04] mix-blend-screen"
          style="background-image: url('/Noise.png'); background-repeat: repeat;"
        ></div> 
        
        <div class="relative w-full px-4 sm:px-8 md:px-[176px]">
          <div class="flex flex-col gap-2">
            
            <!-- 
              UPDATED: "DartCode AI"
              - Font: Inter (from `font-inter` class on parent)
              - Weight: 400 (Tailwind's `font-normal`)
              - Size: 100px (We use `text-[100px]` on desktop, smaller on mobile)
              - Letter Spacing: -1% (Tailwind's `tracking-[-0.01em]`)
              - Line Height: 100% (Tailwind's `leading-none`)
              - Color: #FFFFFF (Removed the `opacity-80`)
            -->
            <h2 class="text-4xl font-normal leading-none tracking-[-0.01em] md:text-[100px]">
              DartCode AI
            </h2>
            
            <!-- 
              UPDATED: "Website"
              - Font: Albert Sans (Tailwind's `font-albert`)
              - Weight: 600 (Tailwind's `font-semibold`)
              - Size: 200px (We use `text-[200px]` on desktop, smaller on mobile)
              - Letter Spacing: -1% (Tailwind's `tracking-[-0.01em]`)
              - Line Height: 100% (Tailwind's `leading-none`)
            -->
            <h1 class="font-albert text-7xl font-semibold leading-none tracking-[-0.01em] md:text-[200px]">
              Website
            </h1>
          </div>
        </div>
      </div>

      <!-- 
        PHASE 2: The Rest of the Page
        This is where the content you scroll down to will go.
      -->
      <!-- 
      <section class="py-24 bg-white text-black">
        <div class="container px-4 mx-auto">
          <h2 class="mb-12 text-4xl font-bold text-center">Page Content Goes Here</h2>
          ...
        </div>
      </section>
      -->
      
    </main>
  </div>
</template>

<style>
/* UPDATED: Google Font Import
  - We now import 'Inter' with weight 400
  - We also import 'Albert Sans' with weight 600
*/
@import url('https://fonts.googleapis.com/css2?family=Albert+Sans:wght@600&family=Inter:wght@400&display=swap');

body {
  /* This is just a fallback, the `font-inter` class in the
     template is what's applying the font. */
  font-family: 'Inter', sans-serif;
}
</style>

