// Packages
import { createContext } from 'react'

// Assets
import config from '../../data/config'
import constants from '../../data/constants'

const dataContext = createContext({ config, constants })

export default dataContext
