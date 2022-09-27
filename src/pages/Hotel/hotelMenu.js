import React from "react";
import { Link } from "react-router-dom";

function HotelMenu(){
    return(
        <div className="menuHotel">
            <Link to="/hotel/rooms/">Rooms</Link>
        </div>
    )
}

export default HotelMenu;