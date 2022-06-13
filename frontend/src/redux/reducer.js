const initialState = {
    coins: [],
    filterParams: {
        inputValue: '',
        country: '',
        metal: '',
        quality: '',
        fromPrice: '',
        toPrice: '',
        fromYear: '',
        toYear: ''
    },
    isAdvancedFilter: false
}

function reducer(state = initialState, action) {
    switch(action.type) {
        case 'FILTER_COINS':
            const coins = [ action.payload.coins ];
            console.log(state.coins)
            return {...state, coins}
        default:
            return state;
    }
    
}

export default reducer;