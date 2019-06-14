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

const valueUnknown = '--'

export const renderTemp = (temp, toCelsius, useAbbreviation=true) => {
  if (temp || temp === 0) {
    let tempAbbr = '';
    if (useAbbreviation) {
      tempAbbr = toCelsius ? 'C' : 'F';
    }
    return `${formatTemp(convertTemp(temp, toCelsius))}\xB0 ${tempAbbr}`;
  } else {
    return valueUnknown;
  }
}


export const renderWindDirection = (windDeg) => {
  const formatted = (windDeg || windDeg === 0) ? convertWindToAbbreviation(windDeg) : valueUnknown;
  return formatted;
}

export const renderWindSpeed = (windSpeed) => {
  const formatted = (windSpeed || windSpeed === 0) ? `${formatWindSpeed(windSpeed)} m/s` : valueUnknown;
  return formatted;
}

const renderAny = (units, value) => {
  const formatted = (value || value === 0) ? `${value}${units}` : valueUnknown;
  return formatted;
}

export const renderFall = renderAny.bind(null, ' mm');
export const renderHumidity = renderAny.bind(null, '%');
export const renderPressure = renderAny.bind(null, ' mbar');
export const renderUvIndex = renderAny.bind(null, '');


export const renderDate = (date, type, timeZone) => {
  if (!date) return valueUnknown;

  var formatter;
  switch (type) {
    case 'YYYYMDDHHMM': formatter = formatDateYYYYMDDHHMM; break;
    case 'MDDHHMM': formatter = formatDateMDDHHMM; break;
    case 'MDD': formatter = formatDateMDD; break;
    case 'HHMM': formatter = formatDateHHMM; break;
    default: formatter = formatDateYYYYMDDHHMM;
  }

  return formatter(convertToDate(date, timeZone));
}

export const renderDayLength = (sunrise, sunset) => {
  if (!sunrise || !sunset) return valueUnknown;

  return getDayLength(convertToDate(sunrise), convertToDate(sunset));
}