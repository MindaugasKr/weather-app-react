import React from 'react';

import UnitButton from './UnitButton';
import InfoLocatioAndDate from './InfoLocatioAndDate';
import InfoCurrentTemp from './InfoCurrentTemp';
import InfoWeather from './InfoWeather';
import InfoDay from './InfoDay';

const CurrentWeather = () => {
  return (
    <div className="relative">

      <div className="unit__container">
        <UnitButton isCelsius={true} >C</UnitButton>
        <UnitButton isCelsius={false} >F</UnitButton>
      </div>

      <div className="current">
        <InfoLocatioAndDate />

        <div className="current__info-container">
          <InfoCurrentTemp />
          <InfoWeather />
          <InfoDay />
        </div>

      </div>
    </div>
  )
}

export default CurrentWeather;