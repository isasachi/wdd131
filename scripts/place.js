const windChillHeader = document.getElementById('wind-chill-header');
const windChillMain = document.getElementById('wind-chill-main');
const temperature = 18;
const windSpeed = 13;

const calculateWindChill = (temp, wind) => 13.12 + (0.6215 * temp) - (11.37 * (wind ** 0.16)) + (0.3965 * temp * (wind ** 0.16))

const windChillValue = calculateWindChill(temperature, windSpeed);

windChillHeader.innerHTML = `${Math.round(windChillValue * 100) / 100} °C`;
windChillMain.innerHTML = `${Math.round(windChillValue * 100) / 100} °C`;