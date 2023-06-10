import styled from "styled-components";

export const StyledSection = styled.section``;

export const Wrapper = styled.div`
    &.header {
        padding: 2rem 8vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        text-align: center;
        margin-block: 2rem;

        .tagline {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        h2 {
            font-size: var(--font-size-xl);
        }

        p {
            max-width: 32ch;
            margin-block: 0.5rem 1rem;
        }
    }
`;
