let caches = []

export const getCache = () => caches

export const addCache = cache => {
  caches.push(cache)
  return caches
}

export const clearCache = () => {
  caches = []
}