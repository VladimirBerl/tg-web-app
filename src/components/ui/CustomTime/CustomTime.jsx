export default function CustomTime({ hours, minutes, seconds }) {
  const now = new Date();
  return now.setHours(hours, minutes, seconds, 0);
}
