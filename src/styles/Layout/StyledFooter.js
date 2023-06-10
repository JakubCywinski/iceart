import styled from "styled-components";

export const StyledFooter = styled.footer`
    display: flex;
    padding: 2rem 8vw 7rem 8vw;
    gap: 2rem;
    justify-content: center;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const Container = styled.div`
    border-radius: 0.75rem;
    padding: 1rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: relative;

    &:first-of-type {
        background-color: var(--color-primary);
        color: var(--color-background);

        @media (max-width: 1220px) {
            width: 450px;
        }
    }

    &:last-of-type {
        width: 52vw;
        max-width: 800px;
    }

    @media (max-width: 768px) {
        &:last-of-type,
        &:first-of-type {
            width: 100%;
            max-width: 100%;
        }
    }
`;

export const Wrapper = styled.div`
    &.header {
        width: 100%;
        margin-block: 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;

        p {
            max-width: 32ch;
            margin-block: 0.5rem 1rem;
        }
    }

    &.form {
        width: 100%;
    }

    &.availability {
        list-style: none;
        padding: 0;
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        margin-block: 1rem;
        padding: 2rem;

        @media (max-width: 768px) {
            margin-block: 0;
            padding-top: 0;
        }

        &-item {
            font-size: var(--font-size-sm);
            display: flex;
            align-items: center;
            flex-direction: column;
            padding: 1rem;
            text-align: center;
            border: 1px solid var(--color-background);
            border-radius: 8px;
            flex: 1;

            & p:not(.hour) {
                font-weight: bold;
                font-weight: bold;
                line-height: 1;
                text-transform: uppercase;
                margin: 0 0 0.5rem 0;
            }

            & .hour {
                display: flex;
                gap: 0.5ch;
            }
        }
    }
`;
