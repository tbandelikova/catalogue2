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
            const param = action.payload.filter;
            const asArray = Object.entries(state.filterParams);
            const filterInitial = asArray.filter(([key]) => key !== Object.keys(param)[0]);
            const filterParams = {...Object.fromEntries(filterInitial), ...param};
            return {...state, filterParams}
        case 'LIST_OF_COINS':
            const coins = action.payload.coins;
            state.isAdvancedFilter = false;
            console.log(state.coins)
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