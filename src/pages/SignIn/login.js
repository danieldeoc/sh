import React, { useEffect, useRef } from "react";
import Container from "../../components/interface/container";
import Box from "../../components/interface/box";
import PadBox from "../../components/interface/padBox";
import InputText from "../../components/forms/inputText";
import Button from "../../components/interface/button";
import RegularTitle from "../../components/texts/regularTitle";
import axios from "axios";
import { Link } from "react-router-dom";

function LoginPage(){
    const usermail = useRef(null);
    const userPass = useRef(null);

    async function userLoginAutentication(e){
        e.preventDefault();
        const userAuthInfo = {
            usermail: usermail.current.value,
            userPass: userPass.current.value
        }
        // post by axios
        await axios.get("http://localhost:8000/auth/"+userAuthInfo.usermail, userAuthInfo)
        .then(function(response){
            console.log(response)
            console.log("user");
            //window.location.replace("/signIn/sucess"); 
        })
        .catch( (err) => console.log(err) );
    }

    return(
        <Container type="phone">
            <Box>
                <PadBox type="large">
                    <RegularTitle text="LogIn to your account" />
                    <form onSubmit={userLoginAutentication} >
                        <InputText
                            label="Your user e-mail" 
                            placeholder=" "
                            type="text"
                            name="userEmail"
                            ref={usermail}  />
                        <InputText
                            label="Your user password" 
                            placeholder=" "
                            type="pass"
                            name="userPass"
                            ref={userPass}  />
                        <div className="passWordResetBox">
                            <Link to="#">Esqueci minha senha</Link>
                        </div>
                        <Button type="submit" text="LogIn to your hotel" />
                    </form>
                </PadBox>
            </Box>
        </Container>
    )
}

export default LoginPage;