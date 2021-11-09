import formatDistanceToNow from 'date-fns/formatDistanceToNow'

export const fromNowFilter = {
  filters: {
    fromNow(datetime) {
      return datetime ? formatDistanceToNow(new Date(datetime), { addSuffix: true }) : '-'
    }
  }
}