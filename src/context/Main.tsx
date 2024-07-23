import React from 'react'
import { MainStore } from '../store/MainStore'

export const mainStoreContext = React.createContext<MainStore | null>(null)

export default function MainStoreProvider({children}: any) {
  return (
    <mainStoreContext.Provider value={new MainStore()}>
      {children}
    </mainStoreContext.Provider>
  )
}

export const useMainStore = () => {
  const store = React.useContext(mainStoreContext)
  if (!store)
    throw new Error('useStore must be used within a MainStoreProvider.')
  return store
}
