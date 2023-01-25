import React, { lazy, Suspense } from 'react';

const LazyCounterButton = lazy(() => import('./CounterButton'));

const CounterButton = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyCounterButton initialValue={0} />
  </Suspense>
);

export default CounterButton;
