import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import IntroSection from "../components/IntroSection/IntroSection";
import ApproachSection from "../components/ApproachSection/ApproachSection";
import PracticalSection from "../components/PracticalSection/PracticalSection";
import ReachabilitySection from "../components/ReachabilitySection/ReachabilitySection";
import Footer from "../components/Footer/Footer";

function Home() {
	return (
		<>
			<Navbar />

			<main>
				<Hero />
				<IntroSection />
				<ApproachSection />
				<PracticalSection />
				<ReachabilitySection />
			</main>
			<Footer />
		</>
	);
}

export default Home;
