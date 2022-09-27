import React from "react";
import Container from "../../components/interface/container";
import Box from "../../components/interface/box";
import PadBox from "../../components/interface/padBox";
import HotelMenu from "./hotelMenu";

function HotelView(){
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
                                "hotelview"
                            </PadBox>
                        </div>
                    </div>
                </div>
            </Box>
        </Container>
    )
}
export default HotelView;