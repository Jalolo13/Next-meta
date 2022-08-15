import Header from "./Header";
import Footer from "./Footer";
import SectionCards from "./SectionCards";
import SectionAboutCard from "./SectionAboutCard";
import SectionArtists from "./SectionArtists";
import SectionBlocks from "./SectionBlocks";

const Layout = () => {
    return (
        <>
            <Header />
            <SectionCards />
            <SectionAboutCard />
            <SectionArtists />
            <SectionBlocks />
            <Footer />
        </>
    );
};

export default Layout;
