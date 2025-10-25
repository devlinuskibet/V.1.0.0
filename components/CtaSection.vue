<template>
  <!-- 
    SECTION 8: CTA
  -->
  <div class="bg-white">
    <!-- UPDATED: Responsive padding -->
    <div class="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
      <div
        class="relative isolate overflow-hidden bg-brand-primary px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16"
      >
        <!-- 
          Title
          UPDATED: Responsive text size
        -->
        <h2
          class="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl"
        >
          Ready to Ship Smarter, Not Harder?
        </h2>
        <!-- Subtitle -->
        <p class="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
          Join modern teams who've cut their release time in half and reclaimed
          their focus. With DartCode AI, development feels frictionless again.
        </p>
        <!-- Button -->
        <div class="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="#"
            class="rounded-lg bg-white px-5 py-3 text-base font-semibold text-brand-primary shadow-sm transition-colors hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >Get Started</a
          >
        </div>

        <!-- Background glow effect -->
        <svg
          viewBox="0 0 1024 1024"
          class="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
          aria-hidden="true"
        >
          <circle
            cx="512"
            cy="512"
            r="512"
            fill="url(#cta-gradient)"
            fill-opacity="0.7"
          />
          <defs>
            <radialGradient id="cta-gradient">
              <stop stop-color="#7775D6" />
              <stop offset="1" stop-color="#5D3DFD" />
            </radialGradient>
          </defs>
        </svg>
      </div>
    </div>
  </div>
</template>

