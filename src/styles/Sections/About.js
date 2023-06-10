import styled from "styled-components";

export const StyledSection = styled.section`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Container = styled.div`
    &.background {
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        @media (min-width: 639px) {
            max-height: 60vmin;
        }

        @media (min-width: 900px) {
            max-height: 68vh;
        }

        @media (min-width: 1220px) {
            max-height: 42vmax;
        }
    }

    &.cards {
        width: 100%;
        padding-inline: 8vw;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
        height: 25rem;

        @media (max-width: 1024px) {
            align-items: flex-end;
            padding-bottom: 2rem;
        }

        @media (max-width: 639px) {
            flex-direction: column;
            justify-content: flex-end;
            gap: 0.5rem;
        }

        @media (min-width: 639px) {
            height: 50vmin;
        }

        @media (min-width: 900px) {
            height: 46vmin;
        }

        @media (min-width: 1220px) {
            height: 42vmax;
        }
    }
`;

export const Wrapper = styled.div`
    &.image {
        position: relative;
        width: 100%;
        display: inline-flex;
        clip-path: ellipse(100% 55% at 50% 0%);
        overflow: hidden;

        @media (max-width: 1024px) {
            clip-path: ellipse(100% 65% at 50% 0%);
        }

        @media (max-width: 639px) {
            clip-path: ellipse(100% 85% at 50% 0%);
        }

        @media (max-width: 375px) {
            clip-path: ellipse(100% 95% at 50% 0%);
        }

        img {
            width: 100%;
        }
    }

    &.card--wrapper {
        display: inline-flex;
        flex-direction: column;
        justify-content: flex-end;
        gap: 1rem;

        @media (max-width: 768px) {
            gap: 0.5rem;
        }

        @media (max-width: 524px) {
            flex-direction: row;

            &:first-of-type {
                align-items: flex-end;
            }
        }
    }
`;

export const Info = styled.div`
    display: inline-block;
    padding: 1rem;
    box-shadow: 0 0 10px #12121228;
    border-radius: 0.75rem;
    background-color: #ffffff82;
    backdrop-filter: blur(40px);

    h4 {
        font-size: var(--font-size-md);

        & ~ p {
            max-width: 16ch;
        }
    }

    p {
        max-width: 32ch;
    }
`;
