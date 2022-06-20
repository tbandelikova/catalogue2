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
            const filterParams = action.payload.filter;
            console.log(state);
            return {...state, filterParams}
        case 'LIST_OF_COINS':
            const coins = [ action.payload.coins ];
            // console.log(state.coins)
            return {...state, coins}  
        case 'TOGGLE_FILTER':
            return {
                ...state,
                isAdvancedFilter: !state.isAdvancedFilter
            }  
        default:
            return state;
    }
    
}

export default reducer;