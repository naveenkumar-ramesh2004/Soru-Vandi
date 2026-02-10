const filterBySearch = (restaurants, searchText) => {
    return restaurants.filter((restaurant)=>{
         return restaurant.info.name.toLowerCase().includes(searchText.toLowerCase());
    });
}

export default filterBySearch;