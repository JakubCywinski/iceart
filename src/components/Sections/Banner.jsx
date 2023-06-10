import { StyledSection, Wrapper } from "../../styles/Sections/Banner";
import { StyledButton } from "../../styles/StyledButton";

export const Banner = (props) => {
    const { content } = props;

    return (
        <StyledSection>
            <Wrapper>
                <p>{content.description}</p>
                <StyledButton as={"a"} href="#kontakt">
                    Dowiedz się więcej
                </StyledButton>
            </Wrapper>
        </StyledSection>
    );
};
