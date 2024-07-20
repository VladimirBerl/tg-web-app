export default function handlerVibrationTg() {
  if (
    window.Telegram &&
    window.Telegram.WebApp &&
    window.Telegram.WebApp.HapticFeedback
  ) {
    window.Telegram.WebApp.HapticFeedback.impactOccurred("medium");
  } else {
    console.warn("Telegram WebApp HapticFeedback API is not available.");
  }
}
