import * as rWD from '../renderWeatherData';
import { stateAfterSuccesfullDataFetchingMock } from 'stateMocks';
import { IOtestingForFunctionLibs } from 'genericTests';

// ! Some tests gets input values from state mock, for unified inputs accross different test suites.
// Changing state mock file might break test suites.

const wD = stateAfterSuccesfullDataFetchingMock.weatherData;
const cWD = stateAfterSuccesfullDataFetchingMock.weatherData.currentWeatherData;
 
const testingIO = [
  {
    fName: 'renderTemp',
    input: [cWD.temp, true, true],
    expectedOutput: '+21° C',
  },
  {
    fName: 'renderTemp',
    input: [cWD.temp, false, true],
    expectedOutput: '+70° F',
  },
  {
    fName: 'renderTemp',
    input: [cWD.temp, true, false],
    expectedOutput: '+21° ',
  },
  {
    fName: 'renderTemp',
    input: [cWD.temp, false, false],
    expectedOutput: '+70° ',
  },
  {
    fName: 'renderTemp',
    input: [undefined],
    expectedOutput: '--',
  },


  {
    fName: 'renderWindDirection',
    input: [cWD.windDeg],
    expectedOutput: 'W',
  },
  {
    fName: 'renderWindDirection',
    input: [undefined],
    expectedOutput: '--',
  },


  {
    fName: 'renderWindSpeed',
    input: [cWD.windSpeed],
    expectedOutput: '5.1 m/s',
  },
  {
    fName: 'renderWindSpeed',
    input: [undefined],
    expectedOutput: '--',
  },


  {
    fName: 'renderPrecipitation',
    input: [cWD.precipitation],
    expectedOutput: '413 mm',
  },
  {
    fName: 'renderPrecipitation',
    input: [undefined],
    expectedOutput: '--',
  },


  {
    fName: 'renderHumidity',
    input: [cWD.humidity],
    expectedOutput: '68%',
  },
  {
    fName: 'renderHumidity',
    input: [undefined],
    expectedOutput: '--',
  },


  {
    fName: 'renderPressure',
    input: [cWD.pressure],
    expectedOutput: '1006 mbar',
  },
  {
    fName: 'renderPressure',
    input: [undefined],
    expectedOutput: '--',
  },


  {
    fName: 'renderUvIndex',
    input: [wD.uvIndex],
    expectedOutput: '777',
  },
  {
    fName: 'renderUvIndex',
    input: [undefined],
    expectedOutput: '--',
  },


  {
    fName: 'renderDate',
    input: [cWD.time, 'YYYYMDDHHMM', wD.timeZone],
    expectedOutput: '2019 Jul 1 8:20',
  },
  {
    fName: 'renderDate',
    input: [cWD.time, 'MDDHHMM', wD.timeZone],
    expectedOutput: 'Jul 1 8:20',
  },
  {
    fName: 'renderDate',
    input: [cWD.time, 'MDD', wD.timeZone],
    expectedOutput: 'Jul 1',
  },
  {
    fName: 'renderDate',
    input: [cWD.time, 'HHMM', wD.timeZone],
    expectedOutput: '8:20',
  },
  {
    fName: 'renderDate',
    input: [cWD.time, '', wD.timeZone],
    expectedOutput: '2019 Jul 1 8:20',
  },


  {
    fName: 'renderDayLength',
    input: [cWD.sunrise, cWD.sunset],
    expectedOutput: '17:14',
  },
  {
    fName: 'renderDayLength',
    input: [undefined],
    expectedOutput: '--',
  },
]

IOtestingForFunctionLibs(testingIO, rWD);