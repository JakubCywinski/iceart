import { Container, Wrapper } from "../styles/SocialsBar";
import { StyledButton } from "../styles/StyledButton";
import { SiFacebook, SiInstagram } from "react-icons/si";

export const SocialsBar = (props) => {
    const { content } = props;
    return (
        <Container>
            <Wrapper>
                <p>{content.description}</p>
            </Wrapper>
            <Wrapper>
                <StyledButton as={"a"} href="#kontakt">
                    Zapytaj
                </StyledButton>
                <Wrapper className="socials">
                    <StyledButton as={"a"} href="#kontakt">
                        <SiFacebook />
                    </StyledButton>
                    <StyledButton as={"a"} href="#kontakt">
                        <SiInstagram />
                    </StyledButton>
                </Wrapper>
            </Wrapper>
        </Container>
    );
};
