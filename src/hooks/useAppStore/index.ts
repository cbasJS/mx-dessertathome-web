// PAckages
import { useContext } from 'react'

// Assets
import appStoreContext from '../../contexts/appStoreContext'

const useAppStore = () => {
  return useContext(appStoreContext)
}

export default useAppStore
