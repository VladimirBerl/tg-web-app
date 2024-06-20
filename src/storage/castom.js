export function CustomTime(hours, minutes, seconds) {
  const now = new Date();
  if(!hours) {
    hours = now.getHours()
  }
  if(!minutes) {
    minutes = now.getMinutes()
  }
  if(!seconds) {
    seconds = now.getSeconds()
  }
  return now.setHours(hours, minutes, seconds, 0);
}
