import { Gallery } from "../Gallery";
import { StyledSection, Wrapper } from "../../styles/Sections/AvailableArt";
import { StyledButton } from "../../styles/StyledButton";

export const AvailableArt = (props) => {
    const { paintings } = props;
    const { content } = props;

    return (
        <StyledSection id="galeria">
            <Wrapper className="header">
                <Wrapper className="tagline">
                    <h2>{content.tagline}</h2>
                    <p>{content.description}</p>
                </Wrapper>
                <Wrapper>
                    <StyledButton as={"a"} href="#galeria">
                        Dowiedz się więcej
                    </StyledButton>
                </Wrapper>
            </Wrapper>
            <Wrapper>
                <Gallery paintings={paintings} />
            </Wrapper>
        </StyledSection>
    );
};
