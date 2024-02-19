import SectionUno from "../sectionUno/SectionUno";
import SectionDos from "../sectionDos/SectionDos";
import ServiceList from "../serviceList/ServiceList";
import { Sport } from "../sports/Sport";

function Home() {
  return (
    <>
      <SectionUno />
      <ServiceList />
      <Sport />
    </>
  );
}
export default Home;
