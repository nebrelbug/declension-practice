import dynamic from 'next/dynamic';

export const PageLayout = dynamic(() => import('./layout-component'), {
  ssr: false,
});
