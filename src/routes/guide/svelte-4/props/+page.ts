import type { MetaProps } from 'runes-meta-tags';

export const load = () => {
  const pageMetaTags = Object.freeze({
    title: 'Props - Svelte Awesome Icons v1',
    description: 'How to use props with Svelte Awesome Icons v1',
    og: {
      title: 'Props - Svelte Awesome Icons v1',
      description: 'How to use props with Svelte Awesome Icons v1'
    },
    twitter: {
      title: 'Props - Svelte Awesome Icons v1',
      description: 'How to use props with Svelte Awesome Icons v1'
    }
  }) satisfies MetaProps;
  return { pageMetaTags };
};
