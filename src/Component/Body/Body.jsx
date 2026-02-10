import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import RestroCard from '../RestroCard/Restrocard';
import './Body.css';
import {restaurantList} from '../../utils/mockData';
import {useState} from "react";
import filterByRating from "./filterByRating";
import filterBySearch from "./filterBySearch";

const Body = () => {
    const[resList,setResList]=useState(restaurantList);
    
    return(
        <main>
            <div className="search-container">
                <input type="text" placeholder="Search for restaurant, item or more" className="search-bar"onInput={(e)=>{setResList(filterBySearch(restaurantList,e.target.value))}}/>
                <button><FontAwesomeIcon icon={faSearch} /></button>
                <input type="number" placeholder="Rating 1 to 5" min="1" max="5" step='1' id="filter" onInput={(e)=>{setResList(filterByRating(restaurantList,e.target.value,e))}}/>
            </div>
            <div className="restaurant-container">
                {resList.map( (restaurant) => {
                    return <RestroCard key={restaurant.info.id} {...restaurant.info} {...restaurant.cta} />
                })}
              
            </div>
        </main>
    )
}



export default Body;