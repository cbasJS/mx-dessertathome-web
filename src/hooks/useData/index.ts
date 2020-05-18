// PAckages
import { useContext } from 'react'

// Assets
import dataContext from '../../contexts/dataContext'

const useData =() => {
  return useContext(dataContext)
}

export default useData
