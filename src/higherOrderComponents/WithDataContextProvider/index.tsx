// Packages
import React from 'react'

// Assets
import config from '../../data/config'
import constants from '../../data/constants'
import dataContext from '../../contexts/dataContext'

const WithDataContextProvider: React.FC = ({ children }) => (
  <dataContext.Provider value={{ config, constants }}>
    {children}
  </dataContext.Provider>
)

export default WithDataContextProvider
