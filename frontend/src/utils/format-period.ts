export function formatPeriod(period: string) {
  if (!period) return ''

  const [month, year] = period.split('-')

  if (!month || !year) return period

  const date = new Date(parseInt(year, 10), parseInt(month, 10) - 1, 1)
  const monthName = date.toLocaleString('pt-BR', { month: 'long' })

  return `${monthName.charAt(0).toUpperCase() + monthName.slice(1)} / ${year}`
}
