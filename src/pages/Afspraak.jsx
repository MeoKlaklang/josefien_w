import Navbar from "../components/Navbar/Navbar";
import AppointmentPage from "../components/AppointmentPage/AppointmentPage";
import Footer from "../components/Footer/Footer";

function Afspraak() {
  return (
    <>
      <Navbar />

      <main>
        <AppointmentPage />
      </main>

      <Footer />
    </>
  );
}

export default Afspraak;