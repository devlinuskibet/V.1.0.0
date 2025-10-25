<template>
  <!-- 
    SECTION 7: DIFFERENTIATORS
    - Based on image_ccab46.jpg
  -->
  <div class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div
        class="mx-auto grid max-w-2xl grid-cols-1 gap-x-16 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2"
      >
        <!-- Text Content -->
        <div class="lg:pt-4">
          <h2
            class="font-display text-4xl font-bold tracking-tight text-brand-dark sm:text-5xl"
          >
            What Makes DartCode AI Different?
          </h2>
          <dl class="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:gap-y-16">
            <div
              v-for="feature in features"
              :key="feature.name"
              class="flex flex-col"
            >
              <dt class="text-base font-semibold leading-7 text-brand-dark">
                {{ feature.name }}
              </dt>
              <dd class="mt-2 text-base leading-7 text-brand-gray">
                {{ feature.description }}
              </dd>
            </div>
          </dl>
        </div>

        <!-- Image -->
        <div class="flex items-start justify-center">
          <!-- 
            REMINDER: You will need to export this image from Figma and
            place it in your /public folder, then update this src path.
          -->
          <NuxtImg
            src="icons/Different.svg"
            alt="Product screenshot"
            class="w-full max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 md:w-[40rem]"
            width="2432"
            height="1442"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Features list for the left column
const features = [
  {
    name: 'Modular & Scalable',
    description: 'Use one module or all — no monoliths here.',
  },
  {
    name: 'Dart-Specific AI Intelligence',
    description: 'Fine-tuned for Dart codebases, not generic LLM bloat.',
  },
  {
    name: 'Feedback Loops Built In',
    description: 'The more you use it, the smarter it gets.',
  },
  {
    name: 'CLI + Dashboard Views',
    description: 'For builders who love the terminal and teams who need visibility.',
  },
  {
    name: 'GitHub/GitLab/Bitbucket Integration',
    description: 'OAuth-ready and secure from day one.',
  },
]
</script>

