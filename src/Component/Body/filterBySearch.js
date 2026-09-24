// import { restaurantList } from "../../utils/mockDATA";
// const feachData = async () => {
//     const data = await fetch("https://proxy.corsfix.com/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=10.929979076440713&lng=78.73825565340344&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
//     const json = await data.json();
//     return json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
// }
// let restaurants=[]; 
// const apirestaurants = await feachData();
// if(apirestaurants?.length>0){
//     restaurants = apirestaurants;
// }
// else{
//     console.log("API failed, using manual data");
//     restaurants = restaurantList;
// }
const filterBySearch = (restaurants, searchText) => {
    return restaurants.filter((restaurant)=>{
         return restaurant.info.name.toLowerCase().includes(searchText.toLowerCase());
    });
}

export default filterBySearch;