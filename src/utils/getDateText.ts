import { format } from 'date-fns'
import { getMonthText } from './getDateTimeText'

export default function getDateText (date: Date): string {
  if (!date) {
    return '-'
  }
  const d = new Date(date)
  return `${format(d, 'dd')} ${getMonthText(d)} ${format(d, 'yyyy')}`
}
