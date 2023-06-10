import { Navigation } from "./Navigation";
import LogoImg from "../../assets/iceart-logo.webp";
import { StyledButton } from "../../styles/StyledButton";
import {
    StyledHeader,
    Container,
    Wrapper,
    Logo,
} from "../../styles/Layout/StyledHeader";
import { SiFacebook, SiInstagram } from "react-icons/si";

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <Wrapper>
                    <Logo>
                        <img src={LogoImg} alt="Ice Art Logo" />
                        <p>Iceart</p>
                    </Logo>
                </Wrapper>
                <Wrapper>
                    <Navigation />
                </Wrapper>
                <Wrapper>
                    <Wrapper className="socials">
                        <StyledButton as={"a"} href="#contact">
                            <SiFacebook />
                        </StyledButton>
                        <StyledButton as={"a"} href="#contact">
                            <SiInstagram />
                        </StyledButton>
                    </Wrapper>
                    <StyledButton as={"a"} href="#kontakt">
                        <span></span> <p>Kontakt</p>
                    </StyledButton>
                </Wrapper>
            </Container>
        </StyledHeader>
    );
};
