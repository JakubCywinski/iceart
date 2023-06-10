import styled from "styled-components";
import { StyledButton } from "./StyledButton";

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    background-color: var(--color-background);
    border-radius: 10px;
    position: relative;
`;

export const Flex = styled.div`
    display: flex;
    width: 100%;
    gap: 10px;

    @media (max-width: 1024px) {
        flex-direction: column;
    }
`;

export const InputLabel = styled.label`
    position: relative;
    flex: 1;
`;

export const Input = styled.input`
    display: block;
    width: 100%;
    padding: 10px 10px 1.75rem 10px;
    outline: 0;
    border: 0;
    border-radius: 0.75rem;

    &#message {
        padding: 10px 10px 4rem 10px;
        resize: none;
    }
`;

export const InputSpan = styled.span`
    display: flex;
    align-items: flex-end;
    gap: 0.5rem;
    position: absolute;
    left: 10px;
    bottom: 0.5rem;
    font-size: var(--font-size-sm);
    cursor: text;
    transition: 0.3s ease;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    user-select: none;
    pointer-events: none;
    text-shadow: 0 0 15px rgba(255, 255, 255, 1),
        0 0 10px rgba(255, 255, 255, 1), 0 0 5px rgba(255, 255, 255, 1),
        0 0 3px rgba(255, 255, 255, 1);

    p {
        opacity: 0.42;
    }

    & .error {
        color: var(--color-primary);
        font-size: 12px;
    }
`;

export const Button = styled(StyledButton)`
    display: inline-flex;
    justify-content: center;
    margin-top: 1rem;
`;
