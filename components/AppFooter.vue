<template>
  <!-- 
    SECTION 9: FOOTER
  -->
  <!-- UPDATED: Responsive padding -->
  <footer class="bg-gray-50" aria-labelledby="footer-heading">
    <h2 id="footer-heading" class="sr-only">Footer</h2>
    <div class="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8 lg:py-32">
      <!-- 
        UPDATED: Main grid layout.
        - Stacks on mobile (grid-cols-1)
        - Becomes multi-column on larger screens
      -->
      <div class="grid grid-cols-1 gap-y-16 lg:grid-cols-3 lg:gap-x-8">
        <!-- Logo & Description (spans 1 col on desktop) -->
        <div class="space-y-8">
          <!-- Logo -->
          <a href="#" class="flex items-center gap-2">
            <!-- 
              ACTION: 
              My old SVG was wrong. This is now a placeholder.
              Please save your logo from Figma to /public/logos/footer-logo.svg
              and the path will work.
            -->
            <NuxtImg
              src="/logos/FooterDown.svg"
              alt="DartCode AI"
              class="h-10 w-auto"
              placeholder
            />
          </a>
          <p class="text-base leading-7 text-brand-gray">
            Smarter automation. Faster releases. Fewer headaches. Join
            engineering teams who are transforming how they build and ship code.
          </p>
          <!-- Social Icon -->
          <div class="flex space-x-6">
            <a href="#" class="text-brand-gray hover:text-brand-dark">
              <span class="sr-only">GitHub</span>
              <!-- 
                ACTION: 
                Save your github-icon.svg file in the /public/icons/ folder
                (or just /public/github.svg) and it will appear here.
              -->
              <NuxtImg
                class="h-6 w-6"
                src="/logos/social.svg"
                alt="GitHub"
                placeholder
              />
            </a>
          </div>
        </div>

        <!-- 
          Link columns and Newsletter
          UPDATED: Stacks on mobile (grid-cols-2)
          and spans 2 cols on desktop (lg:col-span-2)
        -->
        <div
          class="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-2"
        >
          <!-- Company Links -->
          <div>
            <h3 class="text-sm font-semibold leading-6 text-brand-dark">
              Company
            </h3>
            <ul role="list" class="mt-6 space-y-4">
              <li>
                <a
                  href="#"
                  class="text-sm leading-6 text-brand-gray hover:text-brand-dark"
                  >Pricing</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="text-sm leading-6 text-brand-gray hover:text-brand-dark"
                  >Documentation</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="text-sm leading-6 text-brand-gray hover:text-brand-dark"
                  >About Us</a
                >
              </li>
            </ul>
          </div>

          <!-- Help Links -->
          <div>
            <h3 class="text-sm font-semibold leading-6 text-brand-dark">Help</h3>
            <ul role="list" class="mt-6 space-y-4">
              <li>
                <a
                  href="#"
                  class="text-sm leading-6 text-brand-gray hover:text-brand-dark"
                  >Customer Support</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="text-sm leading-6 text-brand-gray hover:text-brand-dark"
                  >Terms & conditions</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="text-sm leading-6 text-brand-gray hover:text-brand-dark"
                  >Privacy Policy</a
                >
              </li>
            </ul>
          </div>

          <!-- Newsletter (spans full width on mobile) -->
          <div class="col-span-2 sm:col-span-1">
            <h3 class="text-sm font-semibold leading-6 text-brand-dark">
              Subscribe to Newsletter
            </h3>
            <!-- UPDATED: Stacks on mobile (flex-col sm:flex-row) -->
            <form class="mt-6 flex flex-col gap-y-4 sm:flex-row sm:gap-x-4">
              <label for="email-address" class="sr-only">Email address</label>
              <input
                id="email-address"
                name="email"
                type="email"
                autocomplete="email"
                required
                class="min-w-0 flex-auto rounded-lg border-0 bg-white px-3.5 py-2 text-brand-dark shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-primary sm:text-sm sm:leading-6"
                placeholder="Enter email address"
              />
              <button
                type="submit"
                class="rounded-lg bg-brand-primary px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
              >
                Join
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

