import { Container, Wrapper } from "../styles/ArtCard";

export const ArtCard = ({ title, desc, image }) => {
    return (
        <Container>
            <Wrapper className="image">
                <img src={image} alt={title} width={500} />
            </Wrapper>
            <Wrapper className="desc">
                <Wrapper className="tagline">
                    <h3>{title}</h3>
                    <span>Dominik Chmiel</span>
                </Wrapper>
                <Wrapper className="description">{desc}</Wrapper>
            </Wrapper>
        </Container>
    );
};
