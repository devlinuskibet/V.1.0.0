<template>
  <!-- 
    SECTION 4: FEATURES
    UPDATED: Removed the 'border' and 'shadow-sm' from the icon container
    to fix the "double-outline" effect, as you requested.
  -->
  <section class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <!-- Section Header -->
      <div class="mx-auto max-w-3xl text-center">
        <h2
          class="font-manrope text-4xl font-semibold leading-tight text-brand-dark sm:text-5xl"
        >
          Explore DartCode AI Features
        </h2>
        <p class="mt-6 text-lg leading-8 text-brand-gray">
          DartCode AI helps your team move faster, fix less, and ship better code.
          Skip the manual QA process. Focus on building.
        </p>
      </div>

      <!-- 
        Features Grid (3 columns on desktop, 1 on mobile)
        This now matches your screenshot.
      -->
      <div
        class="mx-auto mt-20 grid max-w-none grid-cols-1 gap-x-12 gap-y-16 sm:mt-24 lg:grid-cols-3"
      >
        <!-- Feature 1: Automated Pull Request -->
        <div class="flex flex-col">
          <!-- Icon -->
          <!-- UPDATED: Removed border and shadow-sm -->
          <div
            class="flex h-20 w-20 items-center justify-center rounded-full bg-white"
          >
            <!-- UPDATED: Increased icon size -->
            <NuxtImg
              src="/icons/Automated.svg"
              alt="Automated Pull Request"
              class="h-16 w-16"
              placeholder
            />
          </div>
          <h3
            class="mt-5 font-manrope text-xl font-semibold leading-8 text-brand-dark"
          >
            Automated Pull Request
          </h3>
          <p class="mt-2 text-base leading-7 text-brand-gray">
            Streamline PR reviews with AI-assisted release detection and
            changelog generation.
          </p>
        </div>

        <!-- Feature 2: Multi-Repo Coordination -->
        <div class="flex flex-col">
          <!-- Icon -->
          <!-- UPDATED: Removed border and shadow-sm -->
          <div
            class="flex h-20 w-20 items-center justify-center rounded-full bg-white"
          >
            <!-- UPDATED: Increased icon size -->
            <NuxtImg
              src="/icons/MultiRepo.svg"
              alt="Multi-Repo Coordination"
              class="h-16 w-16"
              placeholder
            />
          </div>
          <h3
            class="mt-5 font-manrope text-xl font-semibold leading-8 text-brand-dark"
          >
            Multi-Repo Coordination
          </h3>
          <p class="mt-2 text-base leading-7 text-brand-gray">
            Keep packages in sync, auto-bump versions, and manage dependencies
            at scale.
          </p>
        </div>

        <!-- Feature 3: AI Documentation -->
        <div class="flex flex-col">
          <!-- Icon -->
          <!-- UPDATED: Removed border and shadow-sm -->
          <div
            class="flex h-20 w-20 items-center justify-center rounded-full bg-white"
          >
            <!-- UPDATED: Increased icon size -->
            <NuxtImg
              src="/icons/Ai.svg"
              alt="AI Documentation"
              class="h-16 w-16"
              placeholder
            />
          </div>
          <h3
            class="mt-5 font-manrope text-xl font-semibold leading-8 text-brand-dark"
          >
            AI Documentation
          </h3>
          <p class="mt-2 text-base leading-7 text-brand-gray">
            Auto-generate and sync release notes and developer docs
            (Markdown + GitBook-ready).
          </p>
        </div>

        <!-- Feature 4: Full QA Automation -->
        <div class="flex flex-col">
          <!-- Icon -->
          <!-- UPDATED: Removed border and shadow-sm -->
          <div
            class="flex h-20 w-20 items-center justify-center rounded-full bg-white"
          >
            <!-- UPDATED: Increased icon size -->
            <NuxtImg
              src="/icons/Full QA.svg"
              alt="Full QA Automation"
              class="h-16 w-16"
              placeholder
            />
          </div>
          <h3
            class="mt-5 font-manrope text-xl font-semibold leading-8 text-brand-dark"
          >
            Full QA Automation
          </h3>
          <p class="mt-2 text-base leading-7 text-brand-gray">
            Run smart, AI-generated tests across unit, integration, and
            end-to-end layers.
          </p>
        </div>

        <!-- Feature 5: Code Coverage Integration -->
        <div class="flex flex-col">
          <!-- Icon -->
          <!-- UPDATED: Removed border and shadow-sm -->
          <div
            class="flex h-20 w-20 items-center justify-center rounded-full bg-white"
          >
            <!-- FIXED: Added leading "/" to path -->
            <!-- UPDATED: Increased icon size -->
            <NuxtImg
              src="/icons/CodeCoverage.svg"
              alt="Code Coverage Integration"
              class="h-16 w-16"
              placeholder
            />
          </div>
          <h3
            class="mt-5 font-manrope text-xl font-semibold leading-8 text-brand-dark"
          >
            Code Coverage Integration
          </h3>
          <p class="mt-2 text-base leading-7 text-brand-gray">
            Enforce release gates with Codecov/Coveralls thresholds — no
            surprises in production.
          </p>
        </div>

        <!-- Feature 6: Intelligent Dart CLI -->
        <div class="flex flex-col">
          <!-- Icon -->
          <!-- UPDATED: Removed border and shadow-sm -->
          <div
            class="flex h-20 w-20 items-center justify-center rounded-full bg-white"
          >
            <!-- FIXED: Added leading "/" to path -->
            <!-- UPDATED: Increased icon size -->
            <NuxtImg
              src="/icons/Intelligent.svg"
              alt="Intelligent Dart CLI"
              class="h-16 w-16"
              placeholder
            />
          </div>
          <h3
            class="mt-5 font-manrope text-xl font-semibold leading-8 text-brand-dark"
          >
            Intelligent Dart CLI
          </h3>
          <p class="mt-2 text-base leading-7 text-brand-gray">
            Ship faster with our CLI assistant “Pious” — get fixes, tests, and
            refactors directly from your terminal.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// This component is self-contained.
// @nuxt/image will handle the images.
</script>

