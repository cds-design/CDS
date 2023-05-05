import { Config } from '@stencil/core';
import { postcss } from '@stencil-community/postcss';
import autoprefixer from 'autoprefixer';
import { inlineSvg } from 'stencil-inline-svg';

export const config: Config = {
  namespace: 'continuum',
  plugins: [
    inlineSvg(),
    postcss({
      plugins: [autoprefixer()],
    }),
  ],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
