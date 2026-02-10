const ratings ={
    1:"1 : Average",
    2:"2 : Good",
    3:"3 : Very Good",
    4:"4 : Excellent",
    5:"5 : Outstanding"
};
const filterByRating = (restaurants, rating,event) => {
    event.target.value ="";
    if(rating<0 || rating>5){
        event.target.placeholder="Rating 1 to 5";
        return restaurants;
    }
    event.target.placeholder=ratings[rating];
    return restaurants.filter((restaurant)=>{
         return restaurant.info.avgRating >= rating;
    });
};

export default filterByRating;


