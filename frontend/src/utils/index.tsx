export const joinStringList = (list: (string | undefined | null)[], separator: string = ' '): string => {
  return list.filter(Boolean).join(separator)
}

export const getApiUrl = () => {
  const API_URL = import.meta.env.VITE_API_URL

  if (!API_URL) {
    throw new Error('API_URL must be defined')
  }

  return API_URL
}
