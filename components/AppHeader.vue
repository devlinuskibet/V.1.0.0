<script setup>
import { ref } from 'vue'
const isMobileMenuOpen = ref(false)

function closeMenu() {
  isMobileMenuOpen.value = false
}
</script>

<template>
  <!-- 
    UPDATED: 
    - Added `sticky top-0` for a modern feel.
    - Added `backdrop-blur-sm` and `bg-white/80` for a frosted glass effect.
    - Added `border-b` for separation.
  -->
  <header
    class="sticky top-0 z-50 w-full border-b border-gray-200/80 bg-white/80 backdrop-blur-sm"
  >
    <div
      class="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8"
    >
      <!-- 
        LOGO UPDATED: 
        Replaced the inline SVG and text span with your new NuxtImg component.
        Make sure 'DartCodeHeader.svg' is in your /public folder.
      -->
      <a href="#" class="flex items-center">
        <span class="sr-only">DartCode AI</span>
        <NuxtImg
          src="logos/DartCodeHeader.svg"
          alt="DartCode AI Logo"
          class="h-8 w-auto"
          placeholder
        />
      </a>

      <!-- Desktop Navigation (hidden on mobile) -->
      <nav class="hidden items-center gap-8 lg:flex">
        <a
          href="#"
          class="text-base font-medium text-brand-dark hover:text-brand-primary"
          >Home</a
        >
        <a
          href="#"
          class="text-base font-medium text-brand-gray hover:text-brand-primary"
          >About</a
        >
        <a
          href="#"
          class="text-base font-medium text-brand-gray hover:text-brand-primary"
          >Pricing</a
        >
      </nav>

      <!-- Desktop Buttons (hidden on mobile) -->
      <div class="hidden items-center gap-4 lg:flex">
        <a
          href="#"
          class="rounded-lg px-5 py-2.5 text-base font-medium text-brand-dark transition-colors hover:bg-gray-100"
          >Login</a
        >
        <a
          href="#"
          class="rounded-lg bg-brand-primary px-5 py-2.5 text-base font-medium text-white shadow-sm transition-colors hover:bg-brand-primary-hover"
          >Signup</a
        >
      </div>

      <!-- 
        INTERACTIVE ELEMENT (Mobile Menu Button) 
        - This satisfies the "interactivity" requirement
        - We use 'lg:hidden' to show it only on mobile
      -->
      <button
        @click="isMobileMenuOpen = !isMobileMenuOpen"
        class="text-brand-dark lg:hidden"
        aria-label="Toggle menu"
      >
        <!-- UPDATED: Animated Hamburger/Close Icon -->
        <svg class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            v-if="!isMobileMenuOpen"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
          <path
            v-else
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>

    <!-- 
      INTERACTIVE ELEMENT (Mobile Menu Panel)
      - This slides in when the button is clicked.
      - UPDATED: Made this a full-screen modal for a modern mobile feel.
    -->
    <div
      v-if="isMobileMenuOpen"
      class="fixed inset-0 z-40 h-screen w-screen bg-white p-6 lg:hidden"
    >
      <!-- 
        This empty div is a clever trick: it's the same height
        as the header, so the menu items start *below* where
        the header would be, preventing overlap.
      -->
      <div class="h-[76px]"></div>

      <div class="flex flex-col space-y-6 pt-6">
        <a
          @click="closeMenu"
          href="#"
          class="block text-2xl font-medium text-brand-dark"
          >Home</a
        >
        <a
          @click="closeMenu"
          href="#"
          class="block text-2xl font-medium text-brand-gray"
          >About</a
        >
        <a
          @click="closeMenu"
          href="#"
          class="block text-2xl font-medium text-brand-gray"
          >Pricing</a
        >

        <div class="h-px w-full bg-gray-200 !my-8"></div>

        <a
          @click="closeMenu"
          href="#"
          class="block text-2xl font-medium text-brand-dark"
          >Login</a
        >
        <a
          @click="closeMenu"
          href="#"
          class="block rounded-lg bg-brand-primary px-5 py-4 text-center text-xl font-medium text-white"
          >Signup</a
        >
      </div>
    </div>
  </header>
</template>

