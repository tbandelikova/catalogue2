export function filterCoins(coins) {
    return {
      type: 'FILTER_COINS',
      payload: {
        coins: coins
      }
    }
  }