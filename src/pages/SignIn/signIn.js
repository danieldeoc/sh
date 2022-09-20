import React, { useEffect, useRef } from "react";
import Box from "../../components/interface/box";
import Container from "../../components/interface/container";
import InputText from "../../components/forms/inputText";
import RegularTitle from "../../components/texts/regularTitle";
import PadBox from "../../components/interface/padBox";
import Button from "../../components/interface/button";

function SignInPage(){

    
    const hotelName = useRef(null);
    const userName = useRef(null);
    const userEmail = useRef(null);
    const userPass = useRef(null);

    
    
    function createAccount(e){
        e.preventDefault();
        const userData = {
            hote: hotelName.current.value,
            name: userName.current.value,
            email: userEmail.current.value,
            pass: userPass.current.value
        }
        
        
        console.log(userData)
    }


    return(
        <Container type="phone">
            <Box>
                <PadBox type="large">
                    <form onSubmit={createAccount}>
                        <RegularTitle text="Create an free account and starting mananging your hotel easily" />
                        <InputText 
                            label="Your hotel name" 
                            placeholder="Tell us the name of your hotel/hostel"
                            type="text"
                            name="hotel_name"
                            ref={hotelName} />

                        <InputText 
                            label="Your name" 
                            placeholder="Tell us your name"
                            type="text"
                            name="hotel_name"
                            ref={userName} />

                        <InputText 
                            label="What is your e-mail?" 
                            placeholder="your@email.com"
                            type="email"
                            name="hotel_name"
                            ref={userEmail} />

                        <InputText 
                            label="Create a password" 
                            placeholder="6 to 10 letters and numbers"
                            type="password"
                            name="hotel_name"
                            ref={userPass} />

                        <Button type="submit" text="Create a free account" />
                    </form>
                </PadBox>
            </Box>
        </Container>
    )

}
export default SignInPage;