export default function (expirationTime) {
  const date = new Date()
  date.setTime(date.getTime() + (expirationTime * 1000))
  return date
}