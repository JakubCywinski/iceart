import styled from "styled-components";

export const StyledHeader = styled.header`
    display: flex;
    padding: 0 8vw;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 100;
`;

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

export const Wrapper = styled.div`
    flex: 1;
    display: flex;

    &:last-of-type {
        justify-content: flex-end;
        align-items: center;
        position: relative;
    }

    &.socials {
        margin-right: 0.75rem;
        gap: 0.5rem;

        a {
            padding: 0.75rem;
        }
    }

    @media (max-width: 524px) {
        &.socials {
            margin-right: 0.5rem;
            gap: 0.25rem;

            a {
                padding: 0.5rem;
            }
        }
    }

    @media (max-width: 375px) {
        &.socials {
            margin-right: 0.25rem;
            gap: 0.5rem;
            position: absolute;
            top: 100%;
            right: 0;
            transform: translateY(0.5rem);

            a {
                padding: 0.5rem;
            }
        }
    }
`;

export const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    position: relative;

    img {
        height: 5rem;
    }

    p {
        font-weight: 600;
        color: var(--color-primary);
        font-size: var(--font-size-md);
    }
`;
