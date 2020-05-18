// Packages
import { useContext } from 'react'

// Assets
import fluxActionsContext from '../../contexts/fluxActionsContext'

const useFluxActions = () => {
  return useContext(fluxActionsContext)
}

export default useFluxActions
