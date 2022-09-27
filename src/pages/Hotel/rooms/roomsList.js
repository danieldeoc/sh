import React from "react";
import Container from "../../../components/interface/container";
import Box from "../../../components/interface/box";
import PadBox from "../../../components/interface/padBox";
import HotelMenu from "./../hotelMenu";
import { Link } from "react-router-dom";

function Rooms(){
    return(
        <Container type="desktop">
            <Box>
                <div className="container">
                    <div className="row">
                        <div className="col col-3 relativeMenu">
                            <HotelMenu />
                        </div>
                        <div className="col col-9">
                            <PadBox type="large">
                                Rooms list <Link to="/hotel/rooms/addRoom">Add Room</Link>
                            </PadBox>
                        </div>
                    </div>
                </div>
            </Box>
        </Container>
    )
}
export default Rooms;