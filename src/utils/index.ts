export const createQueryParam = (obj: { [id: string]: any }): string => {
  if ((obj && !Object.values(obj || {}).length) || !obj) return ''

  const query = Object.keys(obj || {})
    .map((key) => (obj[key] ? `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}` : ''))
    .filter((item) => item)
    .join('&')

  return query
}
