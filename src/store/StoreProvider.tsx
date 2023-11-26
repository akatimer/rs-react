'use client';
import { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import store from './store';

export const StoreProvider = ({
  children,
}: PropsWithChildren): React.JSX.Element => {
  return <Provider store={store}>{children}</Provider>;
};
