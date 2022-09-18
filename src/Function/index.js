import { Fragment } from 'react';
import { HeaderOnly, DefaultLayout } from '~/components/Layout';

function showLayout(layout) {
  if (layout === null) {
    return Fragment;
  }

  if (layout) {
    return HeaderOnly;
  }

  return DefaultLayout;
}

export { showLayout };
