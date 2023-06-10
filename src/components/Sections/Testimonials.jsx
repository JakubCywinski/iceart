import { TestimonialsSlider } from "../TestimonialsSlider";
import { TestimonialsDeco } from "../TestimonialsDeco";
import { SocialsBar } from "../SocialsBar";

import {
    StyledSection,
    Container,
    Wrapper,
} from "../../styles/Sections/Testimonials";

export const Testimonials = (props) => {
    const { content } = props;
    const { testimonials } = props;

    return (
        <StyledSection id="opinie">
            <Container>
                <Wrapper className="banner">
                    <TestimonialsDeco content={content[0]} />
                </Wrapper>
                <Wrapper className="content">
                    <SocialsBar content={content[1]} />
                    <TestimonialsSlider testimonials={testimonials} />
                </Wrapper>
            </Container>
        </StyledSection>
    );
};
