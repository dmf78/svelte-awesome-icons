---
layout: homeLayout
title: Accessible SVG Icons - Svelte Awesome Icons
subtitle: Accessible SVG Icons
path:
description: 480+ SVG Flowbite icons components for Svelte 3/4/5/Runes.
---

<script>
  import { Banner, Card } from 'flowbite-svelte';
  import { MetaTags } from 'svelte-meta-tags';
  import MetaTag from './utils/MetaTag.svelte';
  import { removeHyphensAndCapitalize } from './utils/utils';
  import { StarRegular, KeyboardRegular, BellSolid, ObjectGroupRegular, CatSolid, CompassDraftingSolid, InfoSolid, AwardSolid, A7Solid, MoonSolid } from '$lib'

  const name = __NAME__;
  const version = __VERSION__;
  const githuburl = __GITHUBURL__;
  const flowbiteSvelteVersion = __FLOWBITESVELTEVERSION__;
  const svelteVersion = __SVELTEVERSION__;
  const svelteKitVersion = __SVELTEKITVERSION__;
  const viteVersion = __VITEVERSION__;
</script>

<MetaTag {title} {subtitle} {description} />

<Banner id="default-banner" dismissable={false} classDiv='max-w-3xl mt-4 mx-auto p-2'>
  <p class="flex items-center gap-4 text-lg font-normal text-gray-900 dark:text-gray-100">
      To Keep It Going, Please Show Your Love.<a href='https://ko-fi.com/Z8Z2CHALG' target='_blank'><img height='40' style='border:0px;height:40px;' src='https://storage.ko-fi.com/cdn/kofi3.png?v=3' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>
  </p>
</Banner>

<h1 class='flex justify-center my-8'>Svelte Awesome Icons</h1>

<div class='grid grid-cols-2 md:grid-cols-3 gap-4'>
  <Card>
  <StarRegular class="w-8 h-8 mb-3 text-blue-500 dark:text-blue-400" />
  <h3 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Svelte 4/5/Runes</h3>
  <p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">
  Verions 1 is for Svelte 4/5 and version 2 is for Svelte 5 Runes.
  </p>
  </Card>

  <Card>
  <KeyboardRegular class="w-8 h-8 mb-3 text-green-500 dark:text-green-400" />
  <h3 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Brands, Regular, and Solid Icons</h3>
  <p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">
  2000+ SVG Icons.
  </p>
  </Card>

  <Card>
  <BellSolid class="w-8 h-8 mb-3 text-red-500 dark:text-red-400" />
  <h3 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Accessible SVGs</h3>
  <p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">
  A11y props, `title`, `desc`, and `ariaLabel` for accessible SVG icons. 
  </p>
  </Card>

  <Card>
  <CompassDraftingSolid class="w-8 h-8 mb-3 text-purple-500 dark:text-purple-400" />
  <h3 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Faster Compiling</h3>
  <p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">
   Import icons directly to optimize compilation speed and improve performance.
  </p>
  </Card>

  <Card>
  <ObjectGroupRegular class="w-8 h-8 mb-3 text-pink-500 dark:text-pink-400" />
  <h3 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">IDE Support</h3>
  <p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">
  Hovering over a component name will display features, props, events, and more fo an LSP-compatible editors.
  </p>
  </Card>

  <Card>
  <CatSolid class="w-8 h-8 mb-3 text-yellow-500 dark:text-yellow-400" />
  <h3 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Global Icons</h3>
  <p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">
  Use `IconSolid` and `IconOutline` to careat default icons.
  </p>
  </Card>

  <Card>
    <AwardSolid class="w-8 h-8 mb-3 text-yellow-500 dark:text-yellow-400" />
    <h3 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">CSS Frameworks support</h3>
    <p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">
    Use TailwindCSS, Bootstrap CSS, or any other CSS frameworks.
    </p>
  </Card>

  <Card>
    <A7Solid class="w-8 h-8 mb-3 text-yellow-500 dark:text-yellow-400" />
    <h3 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Seven Props</h3>
    <p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">
    Control the size, role, color, events, aria-label, title, and desc.
    </p>
  </Card>

  <Card>
    <MoonSolid class="w-8 h-8 mb-3 text-yellow-500 dark:text-yellow-400" />
    <h3 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Dark mode</h3>
    <p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">
    Use `class` props to add your dark mode color.
    </p>
  </Card>
</div>

<h2 class='flex justify-center my-8'>Other information</h2>

<div class='grid grid-cols-2 md:grid-cols-3 gap-4'>
  <Card href='https://svelte-svg-icons.codewithshin.com/'>
  <InfoSolid class="w-8 h-8 mb-3 text-oragne-500 dark:text-orange-400" />
  <h3 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Svelte Icon Family</h3>
  <p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">
  Explore 29 Svelte SVG Icon Sets.
  </p>
  </Card>

  <Card href='https://github.com/shinokada/svelte-awesome-icons/blob/main/LICENSE' class='dark:hover:no-underline'>
  <InfoSolid class="w-8 h-8 mb-3 text-blue-500 dark:text-blue-400" />
  <h3 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">License</h3>
  <p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">
  Released under the MIT License.
  </p>
  </Card>

  <Card href='https://github.com/FortAwesome/Font-Awesome/tree/6.x/svgs'>
  <InfoSolid class="w-8 h-8 mb-3 text-green-500 dark:text-green-400" />
  <h3 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Original source</h3>
  <p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">
  FontAwesome/Font-Awesome v6.2.1
  </p>
  </Card>
</div>

<h2 class='flex justify-center my-8'>Technical information about this website</h2>

<div class='grid grid-cols-1'>
<Card size='xl'>
  <ul class="m-4 list-disc p-4 text-left text-lg dark:text-gray-400">
  <li class="hover:text-red-700 hover:underline">
    <a
      href="{githuburl}"
      class="me-4 hover:underline md:me-6">{removeHyphensAndCapitalize(name)} : {version}</a
    >
  </li>
  <li>
    <a href="https://flowbite-svelte.com/" class="me-4 hover:underline md:me-6"
      >Flowbite-Svelte: {flowbiteSvelteVersion}</a
    >
  </li>
  <li class="hover:text-red-700 hover:underline">
    <a
      href="https://svelte.dev/"
      class="me-4 hover:underline md:me-6">Svelte: {svelteVersion}</a
    >
  </li>
  <li>
    <a href="https://kit.svelte.dev/docs/introduction" class="me-4 hover:underline md:me-6"
      >SvelteKit: {svelteKitVersion}</a
    >
  </li>
  <li class="hover:text-red-700 hover:underline">
    <a href="https://vitejs.dev/" class="hover:underline">Vite: {viteVersion}</a>
  </li>
</ul>
    
</Card>
</div>
