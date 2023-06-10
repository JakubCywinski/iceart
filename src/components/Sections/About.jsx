import {
    StyledSection,
    Container,
    Wrapper,
    Info,
} from "../../styles/Sections/About";

export const About = (props) => {
    const { content } = props;

    return (
        <StyledSection id="omnie">
            <Container className="background">
                <Wrapper className="image">
                    <img src={content[3].image.url} alt="Dominik Chmiel" />
                </Wrapper>
            </Container>
            <Container className="cards">
                <Wrapper className="card--wrapper">
                    <Info>
                        <h4>{content[0].tagline}</h4>
                        <p>{content[0].description}</p>
                    </Info>
                    <Info>
                        <h4>{content[1].tagline}</h4>
                        <p>{content[1].description}</p>
                    </Info>
                </Wrapper>
                <Wrapper className="card--wrapper">
                    <Info>
                        <p>{content[2].description}</p>
                    </Info>
                </Wrapper>
            </Container>
        </StyledSection>
    );
};
