<template>
  <!-- 
    SECTION 3: PARTNERS / SOCIAL PROOF
    UPDATED: Now using your local images from /public/logos/
    NEW: Refactored grid items to fix image "cut-off" and improve hover effect.
  -->
  <div class="bg-white pt-12 pb-24 sm:pb-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <p
        class="text-center text-sm font-semibold leading-6 text-brand-gray"
      >
        Trusted by teams building fast, shipping smart
      </p>
      
      <div
        class="mx-auto mt-10 grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-3 lg:mx-0 lg:max-w-none lg:grid-cols-5"
      >
        <!-- Google Cloud -->
        <a 
          href="#" 
          class="group col-span-1 flex h-24 w-full items-center justify-center rounded-lg p-4 transition-all duration-300 ease-in-out hover:bg-gray-50 hover:shadow-lg hover:scale-105"
        >
          <NuxtImg
            class="h-12 w-full object-contain opacity-75 transition-opacity duration-300 group-hover:opacity-100"
            src="/logos/GoogleCloud.png"
            alt="Google Cloud"
            height="48"
          />
        </a>
        
        <!-- Amazon AWS -->
        <a 
          href="#" 
          class="group col-span-1 flex h-24 w-full items-center justify-center rounded-lg p-4 transition-all duration-300 ease-in-out hover:bg-gray-50 hover:shadow-lg hover:scale-105"
        >
          <NuxtImg
            class="h-12 w-full object-contain opacity-75 transition-opacity duration-300 group-hover:opacity-100"
            src="/logos/Amazon.png"
            alt="Amazon Web Services"
            height="48"
          />
        </a>
        
        <!-- Microsoft Azure -->
        <a 
          href="#" 
          class="group col-span-1 flex h-24 w-full items-center justify-center rounded-lg p-4 transition-all duration-300 ease-in-out hover:bg-gray-50 hover:shadow-lg hover:scale-105"
        >
          <NuxtImg
            class="h-12 w-full object-contain opacity-75 transition-opacity duration-300 group-hover:opacity-100"
            src="/logos/Azure.png"
            alt="Microsoft Azure"
            height="48"
          />
        </a>
        
        <!-- Digital Ocean -->
        <a 
          href="#" 
          class="group col-span-1 flex h-24 w-full items-center justify-center rounded-lg p-4 transition-all duration-300 ease-in-out hover:bg-gray-50 hover:shadow-lg hover:scale-105"
        >
          <NuxtImg
            class="h-12 w-full object-contain opacity-75 transition-opacity duration-300 group-hover:opacity-100"
            src="/logos/DigitalOcean.png"
            alt="Digital Ocean"
            height="48"
          />
        </a>
        
        <!-- IBM -->
        <a 
          href="#" 
          class="group col-span-2 flex h-24 w-full items-center justify-center rounded-lg p-4 transition-all duration-300 ease-in-out hover:bg-gray-50 hover:shadow-lg hover:scale-105 sm:col-span-1"
        >
          <NuxtImg
            class="h-12 w-full object-contain opacity-75 transition-opacity duration-300 group-hover:opacity-100"
            src="/logos/IBM.png"
            alt="IBM"
            height="48"
          />
        </a>
      </div>
    </div>
  </div>
</template>

