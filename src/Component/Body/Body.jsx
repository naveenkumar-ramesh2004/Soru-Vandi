import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import RestroCard from '../RestroCard/Restrocard';
import './Body.css';
import {, useEffect, useState} from "react";
import filterByRating from "./filterByRating";
import filterBySearch from "./filterBySearch";
import Shimmer from './Shimmer';
import { restaurantList } from "../../utils/mockDATA";

const Body = () => {

    const[resList,setResList]=useState();
    const[allresList,setAllResList]=useState();

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async () => {
        try{
        const data = await fetch("https://proxy.corsfix.com/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=10.929979076440713&lng=78.73825565340344&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        const apirestaurantList = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        if(apirestaurantList?.length>0){
            setResList(apirestaurantList);
            setAllResList(apirestaurantList);
        }
        else{
            console.log("API failed, using manual data");
            setResList(restaurantList);
            setAllResList(restaurantList);
        }
        }catch(error){
            console.log("API failed, using manual data");
            setResList(restaurantList);
            setAllResList(restaurantList);
        }
    }

    if(!resList){
        return <Shimmer />
    }

    return(
        <main>
            <div className="search-container">
                <input type="text" 
                placeholder="Search for restaurant, item or more" 
                className="search-bar"
                onInput={(e)=>
                {setResList(filterBySearch(allresList,e.target.value))}
                }
                />
                <button><FontAwesomeIcon icon={faSearch} /></button>
                {/* <input type="number" placeholder="Rating 1 to 5" min="1" max="5" step='1' id="filter" onInput={(e)=>{setResList(filterByRating(restaurantList,e.target.value,e))}}/> */}
            </div>
            {resList && resList.length === 0 ? (
                <>
                <h1 className="no-result" style={{textAlign:"center"}}>No Result Found</h1>
                <Shimmer />
                </>
            ) :
            <div className="restaurant-container">
                {resList.map( (restaurant) => {
                    return <RestroCard key={restaurant.info.id} {...restaurant.info} {...restaurant.cta} />
                })}
            </div>
            }
        </main>
    )
}



export default Body;