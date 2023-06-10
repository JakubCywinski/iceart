import { ArtCard } from "./ArtCard";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1.25rem;
    position: relative;
    padding-inline: 8vw;
`;

export const Gallery = (props) => {
    const { paintings } = props;

    return (
        <Container>
            {paintings.map((painting) => (
                <ArtCard
                    key={painting.id}
                    title={painting.name}
                    desc={painting.description}
                    image={painting.image.url}
                />
            ))}
        </Container>
    );
};
