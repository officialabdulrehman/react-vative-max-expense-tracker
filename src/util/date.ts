export const getFormattedDate = (date: Date): string => {
  return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
}