import styled from "styled-components";
import BgImage from "../../assets/hero-bg-img.webp";
import NoiseTexture from "../../assets/noises.webp";

export const StyledSection = styled.section`
    width: 100%;
    gap: 1rem;
    padding: 2rem 8vw;
    position: relative;
    background: linear-gradient(
        220.28deg,
        #ff9cb3 20.4%,
        rgba(255, 64, 121, 0.57) 137.82%
    );
    margin-top: 4rem;
    filter: drop-shadow(0px 4px 53px rgba(0, 0, 0, 0.25));

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url(${BgImage});
        background-size: cover;
        mix-blend-mode: overlay;
        opacity: 0.32;
        z-index: 1;
    }

    &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url(${NoiseTexture});
        background-size: cover;
        mix-blend-mode: overlay;
        z-index: 1;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    z-index: 2;

    p {
        max-width: 32ch;
        text-shadow: 0 0 10px rgba(255, 255, 255, 0.42);
        color: var(--color-background);
    }
`;
