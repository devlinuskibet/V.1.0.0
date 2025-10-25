<template>
  <!-- 
    SECTION 5: BENEFITS
  -->
  <!-- UPDATED: Responsive padding -->
  <div class="bg-brand-primary-light py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <!-- 
        UPDATED: Stacks on mobile (grid-cols-1)
        and goes to 3 cols on desktop (lg:grid-cols-3)
      -->
      <div
        class="mx-auto grid max-w-2xl grid-cols-1 gap-x-16 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"
      >
        <!-- Title -->
        <div>
          <!-- UPDATED: Responsive text size -->
          <h2
            class="font-display text-4xl font-bold tracking-tight text-brand-purple sm:text-5xl"
          >
            Built for Dev Teams Who Hate Bottlenecks
          </h2>
        </div>

        <!-- 
          2-Column List
          UPDATED: Stacks on mobile (grid-cols-1)
          and goes to 2 cols on tablet (sm:grid-cols-2)
        -->
        <dl
          class="col-span-1 grid grid-cols-1 gap-x-8 gap-y-10 text-base leading-7 text-brand-gray sm:grid-cols-2 lg:col-span-2 lg:gap-y-16"
        >
          <!-- Feature List -->
          <div>
            <dt class="text-lg font-semibold text-brand-dark">Feature</dt>
            <dd class="mt-4 space-y-3">
              <div class="flex items-center gap-x-3">
                <svg class="h-5 w-5 flex-none text-brand-primary" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
                </svg>
                <span>AI-Powered QA & Release Automation</span>
              </div>
              <div class="flex items-center gap-x-3">
                <svg class="h-5 w-5 flex-none text-brand-primary" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
                </svg>
                <span>Multi-Repo Sync & Dependency Management</span>
              </div>
              <div class="flex items-center gap-x-3">
                <svg class="h-5 w-5 flex-none text-brand-primary" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
                </svg>
                <span>CLI + Dashboard Flexibility</span>
              </div>
              <div class="flex items-center gap-x-3">
                <svg class="h-5 w-5 flex-none text-brand-primary" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
                </svg>
                <span>Coverage + Test-First Release Logic</span>
              </div>
              <div class="flex items-center gap-x-3">
                <svg class="h-5 w-5 flex-none text-brand-primary" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
                </svg>
                <span>Docs, Changelogs, Tags Auto-Generated</span>
              </div>
              <div class="flex items-center gap-x-3">
                <svg class="h-5 w-5 flex-none text-brand-primary" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
                </svg>
                <span>OAuth + Git Integration</span>
              </div>
            </dd>
          </div>

          <!-- Benefits List -->
          <div>
            <dt class="text-lg font-semibold text-brand-dark">Benefits</dt>
            <dd class="mt-4 space-y-3">
              <div class="flex items-center gap-x-3">
                <svg class="h-5 w-5 flex-none text-brand-primary" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
                </svg>
                <span>Save dev hours, eliminate manual work</span>
              </div>
              <div class="flex items-center gap-x-3">
                <svg class="h-5 w-5 flex-none text-brand-primary" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
                </svg>
                <span>Avoid version mismatches and update chaos</span>
              </div>
              <div class="flex items-center gap-x-3">
                <svg class="h-5 w-5 flex-none text-brand-primary" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
                </svg>
                <span>Use it your way — terminal or web UI</span>
              </div>
              <div class="flex items-center gap-x-3">
                <svg class="h-5 w-5 flex-none text-brand-primary" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
                </svg>
                <span>Stop broken code before it ships</span>
              </div>
              <div class="flex items-center gap-x-3">
                <svg class="h-5 w-5 flex-none text-brand-primary" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
                </svg>
                <span>Never miss a release note or a Git tag again</span>
              </div>
              <div class="flex items-center gap-x-3">
                <svg class="h-5 w-5 flex-none text-brand-primary" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
                </svg>
                <span>Plug into GitHub, GitLab, or Bitbucket in seconds</span>
              </div>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

