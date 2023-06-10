import { Deco } from "../styles/Sections/Testimonials";

const DecorationSVG = () => {
    return (
        <svg viewBox="0 0 246 123" fill="none">
            <g clipPath="url(#clip0_306_899)">
                <circle
                    cx={122}
                    cy={120}
                    r={120}
                    fill="url(#paint0_linear_306_899)"
                />
                <circle
                    cx={122}
                    cy={120}
                    r={95}
                    fill="url(#paint1_linear_306_899)"
                />
                <circle
                    cx={122}
                    cy={120}
                    r={68}
                    fill="url(#paint2_linear_306_899)"
                />
            </g>
            <defs>
                <linearGradient
                    id="paint0_linear_306_899"
                    x1={50}
                    y1={27}
                    x2={168}
                    y2={228}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#F2EFEA" stopOpacity={0.8} />
                    <stop offset={1} stopColor="#F2EFEA" stopOpacity={0} />
                </linearGradient>
                <linearGradient
                    id="paint1_linear_306_899"
                    x1={267}
                    y1={40}
                    x2={69}
                    y2={205}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#F2EFEA" stopOpacity={0.8} />
                    <stop offset={1} stopColor="#F2EFEA" stopOpacity={0} />
                </linearGradient>
                <linearGradient
                    id="paint2_linear_306_899"
                    x1={82}
                    y1={70}
                    x2={148}
                    y2={181}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#F2EFEA" stopOpacity={0.8} />
                    <stop offset={1} stopColor="#F2EFEA" stopOpacity={0} />
                </linearGradient>
                <clipPath id="clip0_306_899">
                    <rect
                        width={249}
                        height={123}
                        fill="white"
                        transform="translate(-3)"
                    />
                </clipPath>
            </defs>
        </svg>
    );
};

export const TestimonialsDeco = (props) => {
    const { content } = props;
    return (
        <Deco>
            <p>{content.description}</p>
            <div className="decoShapes">
                <DecorationSVG />
            </div>
        </Deco>
    );
};
