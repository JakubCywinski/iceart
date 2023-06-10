import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

export const StyledSection = styled.section`
    position: relative;
`;

export const Container = styled.div`
    padding: 1rem 0 1rem 8vw;
    display: flex;

    @media (max-width: 1024px) {
        padding: 1rem 0;
        flex-direction: column;
        gap: 2rem;
    }
`;

export const Wrapper = styled.div`
    position: relative;
    &.banner {
        width: 30vw;
    }

    &.content {
        width: 62vw;
    }

    @media (max-width: 1024px) {
        &.banner,
        &.content {
            width: 100%;
        }
    }
`;

export const Deco = styled.div`
    background-color: var(--color-primary);
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    overflow: hidden;

    p {
        color: var(--color-background);
        font-weight: 500;
        max-width: 28ch;
        padding: 3rem 2rem 4rem 2rem;
        font-size: var(--font-size-md);
        text-align: center;
    }

    @media (max-width: 1024px) {
        border-radius: 0;
        height: auto;
        p {
            max-width: 34ch;
            padding: 3rem 2rem;
        }
    }

    .decoShapes {
        display: flex;
        align-items: flex-end;
        justify-content: center;
        width: 60%;

        svg {
            width: 100%;
        }
    }

    @media (min-width: 1024px) {
        .decoShapes {
            width: 80%;
            position: relative;
            svg {
                height: 100%;
            }
        }
    }
`;

export const SliderNav = styled.div`
    display: flex;
    gap: 0.5rem;
    border-radius: 12px;
    background: #f2efea;
    margin-top: 1rem;

    button {
        cursor: pointer;
        padding: 1rem;
        user-select: none;
        background-color: var(--color-primary);
        color: var(--color-background);
        min-width: 4rem;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: bold;
        border-radius: 12px;

        @media (max-width: 1024px) {
            flex-grow: 1;
        }
    }
`;

export const StyledSwiper = styled(Swiper)`
    padding-inline: 2rem 8vw;
    width: 100%;
`;

export const StyledSwiperSlide = styled(SwiperSlide)`
    max-width: 400px;

    @media (max-width: 1024px) {
        max-width: 300px;
    }

    & > div {
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
        color: #9e9e9e;
        display: flex;
        flex-direction: column;
        padding: 2rem 1rem;
        position: relative;
        text-align: center;
        background-color: #ffffff;
        border-radius: 5px;
        border-top: 5px solid var(--color-primary);
        margin-top: 1rem;

        p {
            margin: 1rem;
            display: inline-block;
            min-width: 24ch;
        }

        p,
        small {
            user-select: none;
            pointer-events: none;
        }
    }
`;
