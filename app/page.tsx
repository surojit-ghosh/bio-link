import Header from "./components/header";
import Products from "./components/products";
import SocialsSection from "./components/socials";
import Spotify from "./components/spotify";

export default function Page() {
    return (
        <main className="max-w-xl mx-auto px-4 py-8 space-y-4">
            <Header />
            <SocialsSection />
            <Products />
            {/* Avaiblity, CV, Contact */}
            <Spotify />
            {/* Blogs */}
            {/* Footer */}
        </main>
    );
}
