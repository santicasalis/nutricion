import SectionUno from "../sectionUno/SectionUno";
import SectionDos from "../sectionDos/SectionDos";
import ServiceList from "../serviceList/ServiceList";
import { Sport } from "../sports/Sport";

function Home() {
  return (
    <>
      <SectionUno />
      <SectionDos />
      <Sport />
      <ServiceList />
    </>
  );
}
export default Home;
