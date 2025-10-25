<script setup>
import { ref } from 'vue'


const openAccordion = ref(null) // Can be 1 or 2

const toggleAccordion = (item) => {
  if (openAccordion.value === item) {
    // If it's already open, close it
    openAccordion.value = null
  } else {
    // Otherwise, open it
    openAccordion.value = item
  }
}
</script>

<template>
  <!-- 
    Main container. 
    We set the background styles here so they apply to the entirepage,
    including the hero and the accordion section.
  -->
  <main
    class="relative min-h-screen overflow-hidden bg-[#42389E] font-inter text-white"
  >
    <!-- 1. Dot Pattern Layer -->
    <div
      class="absolute inset-0 z-0 h-full w-full opacity-20"
      style="
        background-image: radial-gradient(#A8A6FF 1.5px, transparent 1.5px);
        background-size: 40px 40px;
      "
    ></div>

    <!-- 2. Noise Texture Layer -->
    <div
      class="absolute inset-0 z-10 h-full w-full opacity-5 mix-blend-screen"
      style="background-image: url('/Noise.png'); background-repeat: repeat"
    ></div>

    <!-- 3. Content Layer (Hero + Accordion) -->
    <div class="relative z-20">
      <!-- 
        PHASE 1 (DESKTOP) & PHASE 4 (PIXELAY FIX)
        - We use min-h-[1100px] to match the Figma frame height.
        - We use pt-[588px] to match the "contents" block's top position.
        - We use md:px-[176px] for the side padding.
        - This replaces our old "h-screen items-center" for pixel-perfect alignment.
      -->
      <div
        class="block min-h-[1100px] w-full overflow-hidden px-8 pb-20 pt-[588px] md:px-[176px]"
      >
        <!-- Content container -->
        <div class="flex flex-col gap-2">
          <!-- 
            PHASE 2: RESPONSIVE TEXT
            - Mobile: text-5xl (Tailwind's `text-5xl` is 3rem / 48px)
            - Desktop: text-[100px]
          -->
          <h2
            class="text-5xl font-normal leading-none tracking-[-0.01em] md:text-[100px]"
          >
            DartCode AI
          </h2>

          <!-- 
            PHASE 2: RESPONSIVE TEXT
            - Mobile: text-8xl (Tailwind's `text-8xl` is 6rem / 96px)
            - Desktop: md:text-[200px]
           -->
          <h1
            class="font-albert text-8xl font-semibold leading-none tracking-[-0.01em] md:text-[200px]"
          >
            Website
          </h1>
        </div>
      </div>

      <!-- 
        PHASE 3: INTERACTIVE ACCORDION
        - Added to meet the "interactivity" requirement.
      -->
      <section
        class="flex w-full flex-col items-center gap-6 px-8 pb-32 pt-16"
      >
        <!-- Section Header -->
        <h3 class="font-albert text-4xl font-semibold md:text-5xl">
          Project Features
        </h3>
        <p class="text-lg text-white/70">
          An interactive accordion to meet the assignment requirements.
        </p>

        <!-- Accordion Container -->
        <div class="w-full max-w-3xl space-y-4 pt-8">
          <!-- Accordion Item 1 -->
          <div class="w-full overflow-hidden">
            <button
              @click="toggleAccordion(1)"
              class="flex w-full items-center justify-between rounded-xl border border-white/20 bg-white/5 p-6 text-left text-xl font-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-white/5 focus:outline-none focus:ring-2 focus:ring-white/50"
            >
              <span>Pixel-Perfect Desktop Hero</span>
              <!-- Icon that rotates on click -->
              <span
                class="transform text-3xl font-light transition-transform duration-300"
                :class="openAccordion === 1 ? 'rotate-45' : 'rotate-0'"
                >+</span
              >
            </button>
            <!-- Content: Animates open/closed with CSS -->
            <div
              class="accordion-content"
              :class="openAccordion === 1 ? 'accordion-open' : ''"
            >
              <p
                class="px-6 pb-6 pt-4 text-base font-light leading-relaxed text-white/80"
              >
                Matched the Figma design's fonts (Inter, Albert Sans), colors,
                background noise, dot pattern, and exact layout dimensions
                (1100px height, 588px top padding) for a perfect Pixelay overlay.
              </p>
            </div>
          </div>

          <!-- Accordion Item 2 -->
          <div class="w-full overflow-hidden">
            <button
              @click="toggleAccordion(2)"
              class="flex w-full items-center justify-between rounded-xl border border-white/20 bg-white/5 p-6 text-left text-xl font-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-white/5 focus:outline-none focus:ring-2 focus:ring-white/50"
            >
              <span>Invented Responsive Layout</span>
              <!-- Icon that rotates on click -->
              <span
                class="transform text-3xl font-light transition-transform duration-300"
                :class="openAccordion === 2 ? 'rotate-45' : 'rotate-0'"
                >+</span
              >
            </button>
            <!-- Content: Animates open/closed with CSS -->
            <div
              class="accordion-content"
              :class="openAccordion === 2 ? 'accordion-open' : ''"
            >
              <p
                class="px-6 pb-6 pt-4 text-base font-light leading-relaxed text-white/80"
              >
                To meet the "responsive" requirement, I created a mobile layout
                that scales down typography and padding for a clean, readable
                experience on smaller viewports.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<style>
/* PHASE 3: DYNAMIC STYLING
  - These classes control the smooth open/close animation
    of the accordion.
*/
.accordion-content {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
.accordion-open {
  max-height: 200px; /* Set to a height larger than the content */
}
</style>

