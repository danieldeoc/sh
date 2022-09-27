import React from "react";
import Container from "../../components/interface/container";
import Box from "../../components/interface/box";
import PadBox from "../../components/interface/padBox";
import { Link } from "react-router-dom";

function SignInResponsePage(){
    return(
        <Container type="phone">
            <Box>
                <PadBox type="large">
                    Done! Your account is created and configured. Now, you can add the rooms to your hotel!
                    <Link to="/hotel/">Manange my hotel</Link>
                </PadBox>
            </Box>
        </Container>
    )
}

export default SignInResponsePage;