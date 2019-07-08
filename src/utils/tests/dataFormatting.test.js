import * as dF from '../dataFormatting';
import {stateAfterSuccesfullDataFetchingMock} from 'stateMocks';
import { IOtestingForFunctionLibs } from 'genericTests';

// ! Some tests gets input values from state mock, for unified inputs accross different test suites.
// Changing state mock file might break test suites.

const wD = stateAfterSuccesfullDataFetchingMock.weatherData;
const cWD = stateAfterSuccesfullDataFetchingMock.weatherData.currentWeatherData;


const testingIO = [
  {
    fName: 'convertToDate',
    input: [cWD.time, wD.timeZone],
    expectedOutput: new Date('2019-07-01T06:20:10.000Z'),
  },
  {
    fName: 'formatDateYYYYMDDHHMM',
    input: [dF.convertToDate(cWD.time, wD.timeZone)],
    expectedOutput: '2019 Jul 1 8:20',
  },
  {
    fName: 'formatDateMDDHHMM',
    input: [dF.convertToDate(cWD.time, wD.timeZone)],
    expectedOutput: 'Jul 1 8:20',
  },
  {
    fName: 'formatDateMDD',
    input: [dF.convertToDate(cWD.time, wD.timeZone)],
    expectedOutput: 'Jul 1',
  },
  {
    fName: 'formatDateHHMM',
    input: [dF.convertToDate(cWD.time, wD.timeZone)],
    expectedOutput: '8:20',
  },
  {
    fName: 'getDayLength',
    input: [dF.convertToDate(cWD.sunrise), dF.convertToDate(cWD.sunset)],
    expectedOutput: '17:14',
  },
  {
    fName: 'convertTemp',
    input: [cWD.temp, true],
    expectedOutput: 21,
  },
  {
    fName: 'convertTemp',
    input: [cWD.temp, false],
    expectedOutput: 69.8,
  },
  {
    fName: 'formatTemp',
    input: [0],
    expectedOutput: '0',
  },
  {
    fName: 'formatTemp',
    input: [10],
    expectedOutput: '+10',
  },
  {
    fName: 'formatTemp',
    input: [-10],
    expectedOutput: '-10',
  },
  {
    fName: 'convertWindToAbbreviation',
    input: [0],
    expectedOutput: 'N',
  },
  {
    fName: 'convertWindToAbbreviation',
    input: [22.5],
    expectedOutput: 'N',
  },
  {
    fName: 'convertWindToAbbreviation',
    input: [45],
    expectedOutput: 'NE',
  },
  {
    fName: 'convertWindToAbbreviation',
    input: [67.5],
    expectedOutput: 'NE',
  },
  {
    fName: 'convertWindToAbbreviation',
    input: [90],
    expectedOutput: 'E',
  },
  {
    fName: 'convertWindToAbbreviation',
    input: [112.5],
    expectedOutput: 'E',
  },
  {
    fName: 'convertWindToAbbreviation',
    input: [135],
    expectedOutput: 'SE',
  },
  {
    fName: 'convertWindToAbbreviation',
    input: [157.5],
    expectedOutput: 'SE',
  },
  {
    fName: 'convertWindToAbbreviation',
    input: [180],
    expectedOutput: 'S',
  },
  {
    fName: 'convertWindToAbbreviation',
    input: [202.5],
    expectedOutput: 'S',
  },
  {
    fName: 'convertWindToAbbreviation',
    input: [225],
    expectedOutput: 'SW',
  },
  {
    fName: 'convertWindToAbbreviation',
    input: [247.5],
    expectedOutput: 'SW',
  },
  {
    fName: 'convertWindToAbbreviation',
    input: [270],
    expectedOutput: 'W',
  },
  {
    fName: 'convertWindToAbbreviation',
    input: [292.5],
    expectedOutput: 'W',
  },
  {
    fName: 'convertWindToAbbreviation',
    input: [315],
    expectedOutput: 'NW',
  },
  {
    fName: 'convertWindToAbbreviation',
    input: [337.5],
    expectedOutput: 'NW',
  },
  {
    fName: 'convertWindToAbbreviation',
    input: [360],
    expectedOutput: 'N',
  },
  {
    fName: 'formatWindSpeed',
    input: [cWD.windSpeed],
    expectedOutput: '5.1',
  },
];

IOtestingForFunctionLibs(testingIO, dF);