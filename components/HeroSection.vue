<script setup>
// This component is self-contained.
</script>

<template>
  <!-- 
    UPDATED: 
    - Added `relative` and `overflow-hidden` to contain the new decorative graphics.
  -->
  <section
    class="relative bg-white pt-20 pb-20 sm:pt-32 lg:pb-28 overflow-hidden"
  >
    <!-- 
      NEW: Left decorative graphic 
      ACTION: Export this from Figma and save as /public/hero-left-graphic.svg
    -->
    <NuxtImg
      src="icons/left.svg"
      alt=""
      class="absolute left-0 top-1/2 h-full -translate-y-1/2 z-0 opacity-60 pointer-events-none hidden lg:block"
      aria-hidden="true"
    />
    <!-- 
      NEW: Right decorative graphic 
      ACTION: Export this from Figma and save as /public/hero-right-graphic.svg
    -->
    <NuxtImg
      src="icons/right.svg"
      alt=""
      class="absolute right-0 top-1/2 h-full -translate-y-1/2 z-0 opacity-60 pointer-events-none hidden lg:block"
      aria-hidden="true"
    />

    <!-- 
      UPDATED: 
      - Added `relative z-10` to make sure this content 
        sits on top of the new graphics.
    -->
    <div class="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-3xl text-center">
        <!-- Main Hero Title -->
        <h1
          class="font-display text-4xl font-bold tracking-tight text-brand-dark sm:text-6xl"
        >
          Accelerate Your Development & QA Workflow with
          <span class="text-brand-primary">AI-Powered Automation</span>
        </h1>
        <p class="mt-6 text-lg leading-8 text-brand-gray">
          DartCode AI streamlines your QA and release processes by automating
          pull request management, coordinating multi-repository operations, and
          enhancing quality assurance.
        </p>
        <!-- Button Group -->
        <div
          class="mt-10 flex flex-col items-center justify-center gap-y-4 gap-x-6 sm:flex-row"
        >
          <a
            href="#"
            class="rounded-lg bg-brand-primary px-5 py-3 text-base font-semibold text-white shadow-sm transition-colors hover:bg-brand-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
            >Get Started</a
          >
          <a
            href="#"
            class="group flex items-center gap-x-2 rounded-lg px-5 py-3 text-base font-semibold leading-6 text-brand-dark hover:bg-gray-50"
          >
            Explore DartCode AI for free
            <span
              class="transition-transform group-hover:translate-x-1"
              aria-hidden="true"
              >&rarr;</span
            >
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

