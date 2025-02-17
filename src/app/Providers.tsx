"use client"
import React from 'react'
import { Provider } from 'react-redux';
import { store } from './Store/store';

export  const Providers = ({children,}: Readonly<{children: React.ReactNode;}>) => {
  
    return (
    <Provider store={store}>{children}</Provider>
  )
}
export default Providers
