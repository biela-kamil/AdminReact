import { format } from 'date-fns'
import { pl } from 'date-fns/locale'

export function getMonthText (date: Date): string {
  return format(date, 'MMMM', { locale: pl })
}

export default function getDateTimeText (date: Date): string {
  if (!date) {
    return '-'
  }
  const d = new Date(date)
  return `${format(d, 'dd')} ${getMonthText(d)} ${format(d, 'yyyy HH:mm')}`
}
