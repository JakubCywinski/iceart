import styled from "styled-components";

export const Container = styled.div`
    height: 420px;
    margin: 1rem auto;
    border-radius: 7px;
    box-shadow: 0px 14px 32px 0px rgba(0, 0, 0, 0.15);
    display: inline-flex;
    position: relative;
    flex: 1;

    @media (max-width: 639px) {
        flex-direction: column;
        width: 100%;
    }
`;

export const Wrapper = styled.div`
    &.image {
        float: left;
        flex: 2;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 2rem;
        position: relative;
        min-width: 250px;

        img {
            border-radius: 0.5rem;
            height: 90%;
            width: auto;
        }

        @media (max-width: 639px) {
            padding: 1rem;
            img {
                height: 100%;
                border-radius: 7px 0 0 7px;
            }
        }
    }
    &.desc {
        height: 100%;
        min-width: 250px;
        border-radius: 0 7px 10px 7px;
        background-color: #ffffff;
        padding: 2rem;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        flex: 3;

        p {
            max-width: 38ch;
        }

        @media (max-width: 768px) {
            padding: 1rem;
        }
    }

    &.tagline {
        max-width: 300px;

        h3 {
            font-size: var(--font-size-md);
            color: #474747;
        }

        span {
            font-size: var(--font-size-sm);
            font-weight: 500;
            text-transform: uppercase;
            color: #d2d2d2;
            letter-spacing: 0.1em;
        }
    }

    &.description {
        max-height: 14rem;
        overflow-y: auto;

        line-height: 1.5em;
        padding-right: 2rem;
    }
`;
