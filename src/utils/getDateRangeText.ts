import { format } from 'date-fns'
import { getMonthText } from './getDateTimeText'

export default function getDateRangeText (start: Date, end: Date): string {
  if (!start || !end) {
    return '-'
  }
  const s = new Date(start)
  const e = new Date(end)
  return `${format(s, 'dd')} ${getMonthText(s)} ${format(s, 'yyyy HH:mm')} - ${format(e, 'HH:mm')}`
}
