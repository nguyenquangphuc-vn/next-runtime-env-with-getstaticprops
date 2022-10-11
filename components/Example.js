/**
 * Example component
 */

import getConfig from "next/config"

const Example = props => {
  const ahihi = getConfig()?.publicRuntimeConfig?.PUBLIC_AHIHI

  return(
    <span>{ahihi}</span>
  )
}

export default Example