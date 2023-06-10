import styled from "styled-components";
import NoiseTexture from "../../assets/noises.webp";
import BgImage from "../../assets/hero-bg-img.webp";

export const StyledSection = styled.section`
    width: 100%;
    height: 75vh;
    position: relative;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url(${NoiseTexture});
        background-size: cover;
        mix-blend-mode: overlay;
        opacity: 0.42;
    }

    &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url(${BgImage});
        background-attachment: fixed;
        background-size: cover;
        mix-blend-mode: overlay;
    }
`;

export const Container = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    z-index: 5;

    .curve {
        width: 100%;
        height: 10rem;
        position: absolute;
        bottom: 0;
        left: 0;

        background: -webkit-radial-gradient(
                100% -10%,
                rgba(204, 0, 0, 0) 75%,
                var(--color-background) 2rem
            ),
            -webkit-radial-gradient(0% -10%, rgba(204, 0, 0, 0) 75%, var(
                            --color-background
                        )
                        2rem);
        background-position: left bottom, right bottom;
        background-size: 50% 100%;
        background-repeat: no-repeat;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    & > h1 {
        font-size: var(--font-size-xxl);
        margin-block: 1rem;

        @media (max-width: 1220px) {
            max-width: 12ch;
            line-height: 1.25;
        }
    }

    & > p {
        max-width: 36ch;
        margin-bottom: 2rem;
    }
`;

export const Background = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    bottom: 0;
    left: 0;
    display: flex;
    overflow: hidden;
    z-index: -1;

    .column {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        position: relative;
        gap: 1rem;

        &-left {
            padding-left: 8vw;
            align-items: flex-start;
            transform: skewX(8deg) skewY(8deg) scaleY(0.98) translate(-5%, 50px);

            .column__el {
                box-shadow: -3px 4px 12px 2px rgba(0, 0, 0, 0.12);
            }
        }

        &-right {
            align-items: flex-end;
            padding-right: 8vw;
            transform-origin: center center;
            transform: skewX(-8deg) skewY(-8deg) scaleY(0.98)
                translate(5%, 50px);

            .column__el {
                box-shadow: 3px 4px 12px 2px rgba(0, 0, 0, 0.12);
            }
        }

        &__el {
            display: block;
            flex: 1;
            width: 10vw;
            min-width: 100px;
            min-height: 220px;
            border-radius: 8px;
            position: relative;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                max-width: 160px;
            }

            &--wrapper {
                display: flex;
                flex-wrap: wrap;
                gap: 1rem;
            }

            @media (max-width: 1220px) {
                min-height: 190px;
                min-width: 100px;
            }
        }

        @media (max-width: 1920px) {
            &-left {
                transform: skewX(8deg) skewY(8deg) scaleY(0.98)
                    translate(-10%, 50px);
            }
            &-right {
                transform: skewX(-8deg) skewY(-8deg) scaleY(0.98)
                    translate(10%, 50px);
            }
        }

        @media (max-width: 1220px) {
            &-left {
                padding-left: 3vw;
                transform: skewX(8deg) skewY(8deg) scaleY(0.98)
                    translate(-5%, 50px);
            }
            &-right {
                padding-right: 3vw;
                transform: skewX(-8deg) skewY(-8deg) scaleY(0.98)
                    translate(5%, 50px);
            }
        }

        @media (max-width: 768px) {
            opacity: 0.42;

            &-left,
            &-right {
                padding-inline: 0;
            }

            &-left {
                transform: skewX(8deg) skewY(8deg) scaleY(0.98)
                    translate(-15%, 50px);
            }
            &-right {
                padding-right: 3vw;
                transform: skewX(-8deg) skewY(-8deg) scaleY(0.98)
                    translate(15%, 50px);
            }
        }

        @media (max-width: 639px) {
            opacity: 0.42;

            &-left {
                transform: skewX(8deg) skewY(8deg) scaleY(0.98)
                    translate(-45%, 50px);
            }
            &-right {
                padding-right: 3vw;
                transform: skewX(-8deg) skewY(-8deg) scaleY(0.98)
                    translate(45%, 50px);
            }
        }
    }
`;
