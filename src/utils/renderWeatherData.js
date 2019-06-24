import {
  convertToDate,
  formatDateYYYYMDDHHMM,
  formatDateMDDHHMM,
  formatDateMDD,
  formatDateHHMM,
  getDayLength,
  convertTemp,
  formatTemp,
  convertWindToAbbreviation,
  formatWindSpeed,
} from './dataFormatting';

const valueUnknown = '--';

export const renderTemp = (temp, toCelsius, useAbbreviation=true) => {
  if (temp === undefined) return valueUnknown;
  const tempAbbr = useAbbreviation ? (toCelsius ? 'C' : 'F') : '';
  return `${formatTemp(convertTemp(temp, toCelsius))}\xB0 ${tempAbbr}`;
}


export const renderWindDirection = (windDeg) => {
  return (windDeg || windDeg === 0) ? convertWindToAbbreviation(windDeg) : valueUnknown;
}

export const renderWindSpeed = (windSpeed) => {
  return (windSpeed || windSpeed === 0) ? `${formatWindSpeed(windSpeed)} m/s` : valueUnknown;
}

const renderAny = (units, value) => {
  return (value || value === 0) ? `${value}${units}` : valueUnknown;
}

export const renderPrecipitation = renderAny.bind(null, ' mm');
export const renderHumidity = renderAny.bind(null, '%');
export const renderPressure = renderAny.bind(null, ' mbar');
export const renderUvIndex = renderAny.bind(null, '');


export const renderDate = (date, type, timeZone) => {
  if (!date) return valueUnknown;

  let formatter;
  switch (type) {
    case 'YYYYMDDHHMM': formatter = formatDateYYYYMDDHHMM; break;
    case 'MDDHHMM': formatter = formatDateMDDHHMM; break;
    case 'MDD': formatter = formatDateMDD; break;
    case 'HHMM': formatter = formatDateHHMM; break;
    default: formatter = formatDateYYYYMDDHHMM;
  }

  return formatter(convertToDate(date, timeZone));
}

export const renderDayLength = (sunrise, sunset) =>
  (sunrise && sunset) ? 
    getDayLength(convertToDate(sunrise), convertToDate(sunset)) : 
    valueUnknown;