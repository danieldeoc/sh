import React, { useEffect, useRef } from "react";
import axios from "axios";
import Container from "../../components/interface/container";
import Box from "../../components/interface/box";
import PadBox from "../../components/interface/padBox";
import InputText from "../../components/forms/inputText";
import Button from "../../components/interface/button";
import RegularTitle from "../../components/texts/regularTitle";



function SignInDetails(){
    const hotelStreet = useRef("");
    const hotelNumber = useRef("");
    const hotelComplement = useRef("");
    const hotelNeighboorhood = useRef("");
    const hotelCity = useRef("");
    const hotelState = useRef("");
    const hotelCountry = useRef("");
    const hotelPhone = useRef("");
    const hotelEmail = useRef("");
    const hotelSite = useRef("");

    // add hotel details submit
    async function addHotelDetails(e){
        e.preventDefault();
        const hotelDetails = {
            hotelStreet: hotelStreet.current.value,
            hotelNumber: hotelNumber.current.value,
            hotelComplement: hotelComplement.current.value,
            hotelNeighboorhood: hotelNeighboorhood.current.value,
            hotelCity: hotelCity.current.value,
            hotelState: hotelState.current.value,
            hotelCountry: hotelCountry.current.value,
            hotelPhone: hotelPhone.current.value,
            hotelEmail: hotelEmail.current.value,
            hotelSite: hotelSite.current.value
        }
        console.log(hotelDetails)
        // post by axios
        await axios.post("http://localhost:8000/hotels/", hotelDetails)
        .then(function(response){
            console.log(response)
            console.log("addHotel");
            window.location.replace("/signIn/sucess"); 
        })
        .catch( (err) => console.log(err) );
    }
    return(
        <Container type="phone">
            <Box>
                <PadBox type="large">
                    <RegularTitle text="Now, tell us more about your hotel." />
                    <form onSubmit={addHotelDetails}>
                        <InputText 
                                label="What is the street name?" 
                                placeholder="Tell us the street name"
                                type="text"
                                name="hotel_street"
                                ref={hotelStreet} />
                        <InputText 
                                label="Number" 
                                placeholder="Wich number?"
                                type="text"
                                name="hotel_number"
                                ref={hotelNumber} />
                        <InputText 
                                label="Any complement?" 
                                placeholder="Tell us more..."
                                type="text"
                                name="hotel_complement"
                                ref={hotelComplement} />
                        <InputText 
                                label="Neighborhood" 
                                placeholder="In wich neighborhood is your Hotel in?"
                                type="text"
                                name="hotel_neighboorhood"
                                ref={hotelNeighboorhood} />
                        <InputText 
                                label="City" 
                                placeholder="City name"
                                type="text"
                                name="hotel_city"
                                ref={hotelCity} />
                        <InputText 
                                label="State name" 
                                placeholder="In witch state are your hotel in?"
                                type="text"
                                name="hotel_state"
                                ref={hotelState} />
                        <InputText 
                                label="Country" 
                                placeholder="Tell us the country name"
                                type="text"
                                name="hotel_country"
                                ref={hotelCountry} />

                        <br/><br/>
                        <RegularTitle text="Ok. Now, tell us how your customers can contact your hotel?" />
                        <InputText 
                                label="Main phone" 
                                placeholder="What is the main phone?"
                                type="phone"
                                name="hotel_phone"
                                ref={hotelPhone} />
                        <InputText 
                                label="Contact e-mail" 
                                placeholder="What is the customer contact e-mail?"
                                type="text"
                                name="hotel_email"
                                ref={hotelEmail} />
                        <InputText 
                                label="Website" 
                                placeholder="What is the hotel website?"
                                type="text"
                                name="hotel_site"
                                ref={hotelSite} />

                        <Button type="submit" text="Complete my profile" />
                    </form>

                </PadBox>
            </Box>
        </Container>
    )
}

export default SignInDetails;