import { Form } from "../Form";
import {
    StyledFooter,
    Container,
    Wrapper,
} from "../../styles/Layout/StyledFooter";

export const Footer = (props) => {
    const { content } = props;

    return (
        <StyledFooter id="kontakt">
            <Container>
                <Wrapper className="header">
                    <h1>{content[0].tagline}</h1>
                    <p>{content[0].description}</p>
                </Wrapper>
                <Wrapper className="availability" as={"ul"}>
                    {content[1].map((availability) => (
                        <Wrapper
                            className="availability-item"
                            as={"li"}
                            key={availability.id}
                        >
                            <p>{availability.day}</p>
                            <p className="hour">
                                {availability.from}:00
                                <span>do</span>
                                {availability.to}:00
                            </p>
                        </Wrapper>
                    ))}
                </Wrapper>
            </Container>
            <Container>
                <Wrapper className="form">
                    <Form />
                </Wrapper>
            </Container>
        </StyledFooter>
    );
};
