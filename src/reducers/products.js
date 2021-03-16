export default (products = [], action) => {
    switch(action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'FETCH_ONE':
            return products;
        default: 
            return products;
    }
}