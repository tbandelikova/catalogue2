export function filterCoins(id) {
    return {
      type: 'FILTER_COINS',
      payload: {
        id: id
      }
    }
  }