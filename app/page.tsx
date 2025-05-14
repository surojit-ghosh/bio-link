import Availability from "./sections/availability";
import Footer from "./sections/footer";
import Header from "./sections/header";
// import Products from "./sections/products";
import SocialsSection from "./sections/socials";
import Spotify from "./sections/spotify";

export default function Page() {
    return (
        <main className="max-w-xl mx-auto px-4 py-8 space-y-4">
            <Header />
            <SocialsSection />
            <Availability />
            {/*TODO: <Products /> */}
            <Spotify />
            {/*TODO: Blogs */}
            <Footer />
        </main>
    );
}
