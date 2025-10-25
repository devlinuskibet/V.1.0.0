<template>
  <!-- 
    SECTION 6: PRICING
  -->
  <!-- UPDATED: Responsive padding -->
  <div class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <!-- 
        Section Header
        UPDATED: Responsive text size
      -->
      <div class="mx-auto max-w-2xl text-center">
        <h2
          class="font-display text-4xl font-bold tracking-tight text-brand-dark sm:text-5xl"
        >
          Choose A Plan That Works For You
        </h2>
      </div>

      <!-- 
        3-Card Grid
        UPDATED: Stacks on mobile (grid-cols-1)
        and goes to 3 cols on desktop (lg:grid-cols-3).
        Added 'gap-y-12' for mobile stacking.
      -->
      <div
        class="mx-auto mt-16 grid max-w-lg grid-cols-1 items-stretch gap-y-12 gap-x-8 sm:mt-20 lg:max-w-none lg:grid-cols-3"
      >
        <!-- Plan 1: Standard -->
        <!-- UPDATED: Added hover "pop" effect -->
        <div
          class="flex flex-col rounded-3xl border border-gray-200 p-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
        >
          <div class="flex-shrink-0">
            <div class="mb-4 flex flex-wrap items-center gap-x-3">
              <span class="text-2xl text-brand-primary">
                <!-- Placeholder Sparkle Icon -->
                <svg
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.21-2.21L14.5 6l1.036-.259a3.375 3.375 0 002.21-2.21L18 2.5l.259 1.036a3.375 3.375 0 002.21 2.21L21.5 6l-1.036.259a3.375 3.375 0 00-2.21 2.21z"
                  />
                </svg>
              </span>
              <h3 class="text-xl font-semibold text-brand-dark">
                Standard Plan
              </h3>
              <span
                class="ml-auto rounded-full bg-brand-primary-light px-3 py-1 text-xs font-medium text-brand-primary"
                >Billed annually</span
              >
            </div>
            <p class="font-display text-5xl font-bold text-brand-dark">
              Coming Soon
            </p>
          </div>

          <ul
            role="list"
            class="mt-8 flex-1 space-y-3 text-sm leading-6 text-brand-gray"
          >
            <li class="flex gap-x-3">
              <svg
                class="h-6 w-5 flex-none text-brand-primary"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.052-.143z"
                  clip-rule="evenodd"
                />
              </svg>
              AI Documentation Module
            </li>
            <li class="flex gap-x-3">
              <svg
                class="h-6 w-5 flex-none text-brand-primary"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.052-.143z"
                  clip-rule="evenodd"
                />
              </svg>
              AI CLI for Dart
            </li>
          </ul>

          <a
            href="#"
            class="mt-10 block rounded-lg bg-white px-5 py-3 text-center text-base font-semibold text-brand-primary shadow-sm ring-1 ring-inset ring-brand-primary transition-colors hover:bg-brand-primary-light"
            >Subscribe</a
          >
        </div>

        <!-- Plan 2: Popular -->
        <!-- UPDATED: Added hover "lift" effect -->
        <div
          class="relative flex flex-col rounded-3xl bg-brand-primary p-8 ring-2 ring-brand-primary transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
        >
          <div
            class="absolute top-0 right-8 -translate-y-1/2 rounded-full bg-[#FFD15C] px-4 py-1 text-sm font-semibold text-brand-dark shadow-lg"
          >
            Popular
          </div>

          <div class="flex-shrink-0">
            <div class="mb-4 flex flex-wrap items-center gap-x-3">
              <span class="text-2xl text-white">
                <!-- Placeholder Sparkle Icon -->
                <svg
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.21-2.21L14.5 6l1.036-.259a3.375 3.375 0 002.21-2.21L18 2.5l.259 1.036a3.375 3.375 0 002.21 2.21L21.5 6l-1.036.259a3.375 3.375 0 00-2.21 2.21z"
                  />
                </svg>
              </span>
              <h3 class="text-xl font-semibold text-white">Enhance Plan</h3>
              <span
                class="ml-auto rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white"
                >Billed annually</span
              >
            </div>
            <p class="font-display text-5xl font-bold text-white">
              Coming Soon
            </p>
          </div>

          <ul
            role="list"
            class="mt-8 flex-1 space-y-3 text-sm leading-6 text-white/80"
          >
            <li class="flex gap-x-3">
              <svg
                class="h-6 w-5 flex-none text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.052-.143z"
                  clip-rule="evenodd"
                />
              </svg>
              AI Documentation Module
            </li>
            <li class="flex gap-x-3">
              <svg
                class="h-6 w-5 flex-none text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.052-.143z"
                  clip-rule="evenodd"
                />
              </svg>
              AI CLI for Dart
            </li>
            <li class="flex gap-x-3">
              <svg
                class="h-6 w-5 flex-none text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.052-.143z"
                  clip-rule="evenodd"
                />
              </svg>
              AI QA Testing
            </li>
          </ul>

          <a
            href="#"
            class="mt-10 block rounded-lg bg-white px-5 py-3 text-center text-base font-semibold text-brand-primary shadow-sm transition-colors hover:bg-gray-100"
            >Subscribe</a
          >
        </div>

        <!-- Plan 3: Enterprise -->
        <!-- UPDATED: Added hover "pop" effect -->
        <div
          class="flex flex-col rounded-3xl border border-gray-200 p-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
        >
          <div class="flex-shrink-0">
            <div class="mb-4 flex flex-wrap items-center gap-x-3">
              <span class="text-2xl text-brand-primary">
                <!-- Placeholder Sparkle Icon -->
                <svg
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.21-2.21L14.5 6l1.036-.259a3.375 3.375 0 002.21-2.21L18 2.5l.259 1.036a3.375 3.375 0 002.21 2.21L21.5 6l-1.036.259a3.375 3.375 0 00-2.21 2.21z"
                  />
                </svg>
              </span>
              <h3 class="text-xl font-semibold text-brand-dark">
                Enterprise Plan
              </h3>
              <span
                class="ml-auto rounded-full bg-brand-primary-light px-3 py-1 text-xs font-medium text-brand-primary"
                >Billed annually</span
              >
            </div>
            <p class="font-display text-5xl font-bold text-brand-dark">
              Coming Soon
            </p>
          </div>

          <ul
            role="list"
            class="mt-8 flex-1 space-y-3 text-sm leading-6 text-brand-gray"
          >
            <li class="flex gap-x-3">
              <svg
                class="h-6 w-5 flex-none text-brand-primary"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.052-.143z"
                  clip-rule="evenodd"
                />
              </svg>
              AI Documentation Module
            </li>
            <li class="flex gap-x-3">
              <svg
                class="h-6 w-5 flex-none text-brand-primary"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.052-.143z"
                  clip-rule="evenodd"
                />
              </svg>
              AI CLI for Dart
            </li>
            <li class="flex gap-x-3">
              <svg
                class="h-6 w-5 flex-none text-brand-primary"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.052-.143z"
                  clip-rule="evenodd"
                />
              </svg>
              AI QA Testing
            </li>
            <li class="flex gap-x-3">
              <svg
                class="h-6 w-5 flex-none text-brand-primary"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.052-.143z"
                  clip-rule="evenodd"
                />
              </svg>
              AI Release Management
            </li>
          </ul>

          <a
            href="#"
            class="mt-10 block rounded-lg bg-white px-5 py-3 text-center text-base font-semibold text-brand-primary shadow-sm ring-1 ring-inset ring-brand-primary transition-colors hover:bg-brand-primary-light"
            >Subscribe</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// This component is self-contained.
</script>

