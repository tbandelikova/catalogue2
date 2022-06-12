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
            // const good = state.goods.find(item => 
            //     item.id === action.payload.id);
            // const cart = [ ...state.cart, good ];
            // return {...state, cart}
            break
        default:
            return state;
    }
    
}

export default reducer;