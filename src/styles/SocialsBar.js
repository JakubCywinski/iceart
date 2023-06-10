import styled from "styled-components";

export const Container = styled.div`
    padding: 1rem 1.75rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 0.75rem;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: clamp(0.5rem, 3vw, 3rem);
    position: relative;
    flex-wrap: wrap;
    margin-inline: 2rem 8vw;

    @media (max-width: 425px) {
        flex-direction: column;
        align-items: flex-start;
    }
    @media (max-width: 1024px) {
        margin-bottom: 1rem;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    &:first-child {
        gap: 1rem;
    }

    &:last-child {
        gap: 0.5rem;

        &.socials {
            gap: 0.5rem;

            a {
                padding: 0.75rem;
            }
        }

        @media (max-width: 524px) {
            &.socials {
                gap: 0.25rem;

                a {
                    padding: 0.5rem;
                }
            }
        }
    }
`;
