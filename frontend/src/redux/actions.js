export function filterCoins(filterParams) {
    return {
      type: 'FILTER_COINS',
      payload: {
        filterParams: filterParams
      }
    }
  }