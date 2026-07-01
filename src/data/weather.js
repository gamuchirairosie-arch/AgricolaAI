/**
 * weather.js – Mock weather data for Agricola AI Weather Intelligence Center.
 *
 * TODO (API Integration): Replace this entire export with a fetch call to:
 *   GET /api/weather?lat={lat}&lng={lng}
 * and map the API response to this same shape so all components stay unchanged.
 */

export const weatherData = {
  location: {
    name: 'Nakuru County',
    country: 'Kenya',
    coordinates: '0.2827° S, 36.0665° E',
    lastUpdated: 'Today, 7:42 AM',
  },

  current: {
    temperature: '22',
    feelsLike: '20',
    conditions: 'Partly Cloudy',
    icon: '⛅',
    high: '27',
    low: '15',
  },

  metrics: [
    { id: 'humidity',  icon: '💧', label: 'Humidity',    value: '65%',    status: 'Comfortable' },
    { id: 'wind',      icon: '💨', label: 'Wind Speed',  value: '12 km/h', status: 'Light Breeze' },
    { id: 'rain',      icon: '🌧️', label: 'Rain Chance', value: '20%',    status: 'Low' },
    { id: 'uv',        icon: '☀️', label: 'UV Index',    value: '6',      status: 'High – wear protection' },
    { id: 'pressure',  icon: '📊', label: 'Pressure',   value: '1013 hPa', status: 'Normal' },
  ],

  forecast: [
    { day: 'Mon', icon: '⛅', high: '27', low: '15', rain: '20%' },
    { day: 'Tue', icon: '🌤️', high: '29', low: '16', rain: '10%' },
    { day: 'Wed', icon: '🌧️', high: '22', low: '14', rain: '75%' },
    { day: 'Thu', icon: '🌦️', high: '24', low: '14', rain: '45%' },
    { day: 'Fri', icon: '☀️', high: '30', low: '17', rain: '5%' },
    { day: 'Sat', icon: '☀️', high: '31', low: '18', rain: '0%' },
    { day: 'Sun', icon: '⛅', high: '26', low: '15', rain: '15%' },
  ],

  farmingAdvice: {
    rating: 'Good Day to Farm',
    ratingIcon: '✅',
    summary: 'Partly cloudy skies and comfortable temperatures make today ideal for planting and field preparation.',
    tips: [
      { icon: '🌱', tip: 'Optimal conditions for transplanting seedlings before 10 AM.' },
      { icon: '💧', tip: 'Skip irrigation today — soil moisture levels are adequate.' },
      { icon: '🧴', tip: 'UV index is high — apply sunscreen and wear a hat when working outdoors.' },
    ],
  },

  alerts: [
    {
      id: 'alert_1',
      severity: 'warning',
      icon: '⚠️',
      title: 'Heavy Rain on Wednesday',
      message: 'Rainfall of 15–25mm expected. Avoid pesticide application on Tuesday.',
    },
  ],
};
