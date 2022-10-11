import getConfig from "next/config"

export function getAhihi() {
  const ahihi = getConfig().serverRuntimeConfig.SERVER_AHIHI
  return ahihi
}