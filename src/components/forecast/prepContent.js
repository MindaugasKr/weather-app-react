import React from 'react';
import ErrorFailedToFetchForecast from '../error/ErrorFailedToFetchForecast';

const prepContent = (dataList, prepEntries) => {
  if (dataList) {
    return prepEntries(dataList);
  } else if (dataList === null) {
    return (
      <ErrorFailedToFetchForecast />
    )
  } else {
    return ''
  }
}

export default prepContent;