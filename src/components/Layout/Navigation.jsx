import React, { useState, useRef, useEffect } from "react";
import { StyledNavigation } from "../../styles/Layout/StyledNavigation";

const fixURL = (str) => {
    return str.toLowerCase().replace(/\s/g, "");
};

const NavItem = ({ children, activeItem, setActiveItem, item }) => {
    const itemRef = useRef();

    const handleClick = () => {
        setActiveItem(item);
    };

    useEffect(() => {
        if (activeItem === item) {
            itemRef.current.style.color = "var(--color-primary, pink)";
        } else {
            itemRef.current.style.color = "";
        }
    }, [activeItem, item]);

    return (
        <a
            href={"#" + fixURL(item)}
            className={`navbar-item ${activeItem === item ? "active" : ""}`}
            onClick={handleClick}
            ref={itemRef}
        >
            {children}
        </a>
    );
};

export const Navigation = () => {
    const [activeItem, setActiveItem] = useState("Główna");
    const indicatorRef = useRef();

    const items = ["Główna", "Galeria", "O mnie", "Opinie"];
    const itemToId = items.reduce((acc, item) => {
        acc[fixURL(item)] = item;
        return acc;
    }, {});

    useEffect(() => {
        const sectionIds = items.map((item) => fixURL(item));

        const observer = new IntersectionObserver(
            (entries) => {
                // Get all entries that are currently intersecting
                const intersectingEntries = entries.filter(
                    (entry) => entry.isIntersecting
                );

                // If there are any intersecting entries
                if (intersectingEntries.length > 0) {
                    // Sort them by the ratio of the element that is currently visible
                    intersectingEntries.sort(
                        (a, b) => b.intersectionRatio - a.intersectionRatio
                    );

                    // The first one is the most visible, so we'll make that one active
                    setActiveItem(itemToId[intersectingEntries[0].target.id]);
                }
            },
            // Adjust the rootMargin to only trigger within a specific region of the viewport
            // Negative values shrink the intersection root, positive values grow it
            // Here, we're shrinking it by 20% on the top and bottom
            {
                threshold: [0.1, 0.25, 0.5, 0.75, 1],
                rootMargin: "-20% 0px -20% 0px",
            }
        );

        sectionIds.forEach((id) => {
            const element = document.getElementById(id);
            if (element) {
                observer.observe(element);
            }
        });

        // On mount, if no section is active, make the first section active
        if (!activeItem) {
            setActiveItem(items[0]);
        }

        return () => {
            sectionIds.forEach((id) => {
                const element = document.getElementById(id);
                if (element) {
                    observer.unobserve(element);
                }
            });
        };
    }, [items, itemToId, activeItem]);

    useEffect(() => {
        const activeElement = document.querySelector(".active");
        if (activeElement) {
            indicatorRef.current.style.width = `${activeElement.offsetWidth}px`;
            indicatorRef.current.style.left = `${activeElement.offsetLeft}px`;
            indicatorRef.current.style.backgroundColor =
                "var(--color-primary, pink)";
        }
    }, [activeItem]);

    return (
        <StyledNavigation>
            {items.map((item, index) => (
                <NavItem
                    key={index}
                    item={item}
                    activeItem={activeItem}
                    setActiveItem={setActiveItem}
                >
                    {item}
                </NavItem>
            ))}
            <span className="navbar-indicator" ref={indicatorRef}></span>
        </StyledNavigation>
    );
};
