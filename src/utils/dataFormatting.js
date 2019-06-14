/**
 * Date conversion and formatting
 */
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Novr", "Dec"];

const doubleDigit = input => input < 10 ? '0' + input : input;

export const convertToDate = (unixUTC, timeZone) => {
  const UTCTime = new Date(unixUTC * 1000);
  const stringLocalToQuery = UTCTime.toLocaleString("en-US", { timeZone: timeZone });
  // Date object for YYYY, MM, DD ... extraction
  return new Date(stringLocalToQuery);
};

export const formatDateYYYYMDDHHMM = date => `${date.getFullYear()} ${months[date.getMonth()]} ${date.getDate()} ${date.getHours()}:${doubleDigit(date.getMinutes())}`;

export const formatDateMDDHHMM = date => `${months[date.getMonth()]} ${date.getDate()} ${date.getHours()}:${doubleDigit(date.getMinutes())}`;

export const formatDateMDD = date => `${months[date.getMonth()]} ${date.getDate()}`;

export const formatDateHHMM = date => `${date.getHours()}:${doubleDigit(date.getMinutes())}:${doubleDigit(date.getSeconds())}`;

export const getDayLength = (dateSunrise, dateSunset) => {
  const dif = (dateSunset - dateSunrise) / 1000;

  const h = dif / (60 * 60);
  const m = (dif % (60 * 60)) / 60;
  // const s = (dif % (60 * 60)) % 60;

  return `${parseInt(h)}:${doubleDigit(parseInt(m))}`
}



/**
 * Temperature conversion and formatting
 */
export const convertTemp = (tempKelvin, toCelsius) => {
  tempKelvin = parseFloat(tempKelvin);
  if (toCelsius) {
    return convertToCelsius(tempKelvin);
  } else {
    return convertToFahrenheit(tempKelvin);
  }
};

function convertToFahrenheit(tempKelvin) {
  return (tempKelvin - 273.15) * 9 / 5 + 32;
}

function convertToCelsius(tempKelvin) {
  return tempKelvin - 273.15;
}

export const formatTemp = temp => {
  let sign;

  const roundedTemp = Math.round(parseFloat(temp));

  if (roundedTemp > 0) {
    sign = '+';
  } else if (roundedTemp < 0) {
    sign = '-';
  } else {
    sign = '';
  }

  return `${sign}${roundedTemp}`;
};


/**
 * Wind conversion and formatting
 */
export const convertWindToAbbreviation = windDeg => {
  const windAbbreviations = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW', 'NW'];
  const index = Math.floor((parseInt(windDeg) + 22.5) / 45);

  return windAbbreviations[index];
}

export const formatWindSpeed = windSpeed => windSpeed.toFixed(1);