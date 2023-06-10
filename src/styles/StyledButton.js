import styled from "styled-components";

export const StyledButton = styled.button`
    display: inline-flex;
    gap: 0.5rem;
    align-items: center;
    line-height: 1.25;
    font-size: var(--font-size-base);
    background: ${(props) =>
        props.$primary ? "var(--color-primary)" : "#fff"};
    color: ${(props) =>
        props.$primary ? "var(--color-background)" : "var(--color-primary)"};
    box-shadow: 0 0 10px #12121228;
    padding: 0.75rem 1rem;
    border-radius: 5rem;
    font-weight: 500;

    span {
        width: 8px;
        height: 8px;
        display: block;
        background-color: ${(props) =>
            props.$primary
                ? "var(--color-background)"
                : "var(--color-primary)"};
        border-radius: 50%;
        transition: all 0.2s linear;
    }

    &:hover {
        background: ${(props) =>
            props.$primary ? "#fff" : "var(--color-primary)"};
        color: ${(props) =>
            props.$primary
                ? "var(--color-primary)"
                : "var(--color-background)"};
        box-shadow: 0 0 6px #12121214;

        span {
            background-color: ${(props) =>
                props.$primary
                    ? "var(--color-primary)"
                    : "var(--color-background)"};
        }
    }
`;
