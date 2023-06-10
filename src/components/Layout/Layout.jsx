import { Header, Footer } from "./";

export const Layout = ({ children, ...props }) => {
    const { content } = props;
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer content={content} />
        </>
    );
};
