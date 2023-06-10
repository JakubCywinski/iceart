import { useEffect, useState } from "react";
import { Layout } from "./components/Layout";
import { GlobalStyles } from "./styles/Global.css";
import {
    getPaintings,
    getContent,
    getTestimonials,
    getWorkingHours,
} from "./services";
import {
    About,
    AvailableArt,
    Banner,
    Hero,
    Testimonials,
} from "./components/Sections";

export const App = () => {
    const [loadingProgress, setLoadingProgress] = useState(0);
    const [paintings, setPaintings] = useState([]);
    const [content, setContent] = useState([]);
    const [testimonials, setTestimonials] = useState([]);
    const [workingHours, setWorkingHours] = useState([]);
    const [artLoading, setArtLoading] = useState(true);
    const [contentLoading, setContentLoading] = useState(true);
    const [testimonialsLoading, setTestimonialsLoading] = useState([]);
    const [workingHoursLoading, setWorkingHoursLoading] = useState([]);

    useEffect(() => {
        getContent()
            .then((data) => setContent(data))
            .then(() => {
                setContentLoading(false);
                setLoadingProgress(0.25);
            });
        getPaintings()
            .then((data) => setPaintings(data))
            .then(() => {
                setArtLoading(false);
                setLoadingProgress(0.5);
            });
        getTestimonials()
            .then((data) => setTestimonials(data))
            .then(() => {
                setTestimonialsLoading(false);
                setLoadingProgress(0.75);
            });
        getWorkingHours()
            .then((data) => setWorkingHours(data))
            .then(() => {
                setWorkingHoursLoading(false);
                setLoadingProgress(1);
            });
    }, []);

    return (
        <>
            <GlobalStyles />
            {!artLoading &&
            !contentLoading &&
            !testimonialsLoading &&
            !workingHoursLoading ? (
                <Layout content={[content[8], workingHours]}>
                    <Hero paintings={paintings} content={content[0]} />
                    <AvailableArt paintings={paintings} content={content[1]} />
                    <Banner content={content[2]} />
                    <About
                        content={[
                            content[3],
                            content[4],
                            content[5],
                            content[9],
                        ]}
                    />
                    <Testimonials
                        content={[content[6], content[7]]}
                        testimonials={testimonials}
                    />
                </Layout>
            ) : (
                <div>Loading...</div>
            )}
        </>
    );
};
