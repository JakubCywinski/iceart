import { request, gql } from "graphql-request";

const graphqlAPI = import.meta.env.VITE_APP_GRAPHCMS_ENDPOINT;

export const getPaintings = async () => {
    const query = gql`
        query Paintings {
            paintings {
                availability
                description
                id
                name
                image {
                    url
                }
            }
        }
    `;

    const { paintings } = await request(graphqlAPI, query);
    return paintings;
};

export const getContent = async () => {
    const query = gql`
        query Content {
            contents {
                description
                tagline
                image {
                    id
                    url
                }
            }
        }
    `;

    const { contents } = await request(graphqlAPI, query);
    return contents;
};

export const getTestimonials = async () => {
    const query = gql`
        query Testimonials {
            testimonials {
                from
                id
                content
            }
        }
    `;

    const { testimonials } = await request(graphqlAPI, query);
    return testimonials;
};

export const getWorkingHours = async () => {
    const query = gql`
        query WorkinHours {
            workingHours {
                id
                day
                from
                to
            }
        }
    `;

    const { workingHours } = await request(graphqlAPI, query);
    return workingHours;
};
