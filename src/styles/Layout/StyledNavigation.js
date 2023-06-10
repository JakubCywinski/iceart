import styled from "styled-components";

export const StyledNavigation = styled.nav`
    background-color: var(--color-background);
    display: inline-flex;
    position: fixed;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    overflow: hidden;
    max-width: 100%;
    padding: 0 1.5rem;
    border-radius: 40px;
    box-shadow: 0 10px 40px rgba(159, 162, 177, 0.8);

    .navbar {
        &-item {
            color: #83818c;
            padding: 1rem;
            text-decoration: none;
            transition: 0.3s;
            margin: 0 0.25rem;
            z-index: 1;
            font-weight: 500;
            position: relative;
            font-size: var(--font-size-sm);
            white-space: nowrap;

            &:before {
                content: "";
                position: absolute;
                bottom: -6px;
                left: 0;
                width: 100%;
                height: 5px;
                background-color: #dfe2ea;
                border-radius: 8px 8px 0 0;
                opacity: 0;
                transition: 0.3s;
            }

            &:not(.active):hover:before {
                opacity: 1;
                bottom: 0;
            }

            &:not(.active):hover {
                color: #333;
            }
        }

        &-indicator {
            position: absolute;
            left: 0;
            bottom: 0;
            height: 4px;
            transition: 0.4s;
            height: 5px;
            z-index: 1;
            border-radius: 8px 8px 0 0;
        }
    }

    @media (max-width: 639px) {
        width: 80vw;
        .navbar-item {
            flex: 1;
            display: flex;
            justify-content: center;
            padding: 1rem 0.5rem;
        }
    }
`;
