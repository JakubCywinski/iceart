import { StyledButton } from "../../styles/StyledButton";
import {
    StyledSection,
    Container,
    Wrapper,
    Background,
} from "../../styles/Sections/Hero";

export const Hero = (props) => {
    const { paintings } = props;
    const { content } = props;

    return (
        <StyledSection id="główna">
            <Container>
                <Wrapper>
                    <h1>{content.tagline}</h1>
                    <p>{content.description}</p>
                    <Wrapper>
                        <StyledButton as={"a"} $primary href="#galeria">
                            Zobacz galerie
                        </StyledButton>
                    </Wrapper>
                </Wrapper>

                <Background>
                    <div className="column column-left">
                        <div className="column__el--wrapper">
                            <div className="column__el">
                                <img src={paintings[0].image.url} />
                            </div>
                            <div className="column__el">
                                <img src={paintings[1].image.url} />
                            </div>
                        </div>

                        <div className="column__el--wrapper">
                            <div className="column__el">
                                <img src={paintings[2].image.url} />
                            </div>
                            <div className="column__el">
                                <img src={paintings[3].image.url} />
                            </div>
                        </div>
                    </div>
                    <div className="column column-right">
                        <div className="column__el--wrapper">
                            <div className="column__el">
                                <img src={paintings[4].image.url} />
                            </div>
                            <div className="column__el">
                                <img src={paintings[5].image.url} />
                            </div>
                        </div>

                        <div className="column__el--wrapper">
                            <div className="column__el">
                                <img src={paintings[6].image.url} />
                            </div>
                            <div className="column__el">
                                <img src={paintings[7].image.url} />
                            </div>
                        </div>
                    </div>
                </Background>
                <span className="curve"></span>
            </Container>
        </StyledSection>
    );
};
