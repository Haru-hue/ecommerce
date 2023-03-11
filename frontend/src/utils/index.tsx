export const joinStringList = (list: (string | undefined | null)[], separator: string = ' '): string => {
  return list.filter(Boolean).join(separator)
}
