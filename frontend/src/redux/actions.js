export function listOfCoins(coin) {
    return {
      type: 'LIST_OF_COINS',
      payload: {
        coins: coin
      }
    }
  }

export function filterCoins(filter) {
  return {
    type: 'FILTER_COINS',
    payload: {
      filter: filter
    }
  }
}

export function toggleFilter(isAdvancedFilter) {
  return {
    type: 'TOGGLE_FILTER',
    payload: {
      isAdvancedFilter: isAdvancedFilter
    }
  }
}

export function loadingStatus(isLoading) {
  return {
    type: 'LOADING_STATUS',
    payload: {
      isLoading: isLoading
    }
  }
}