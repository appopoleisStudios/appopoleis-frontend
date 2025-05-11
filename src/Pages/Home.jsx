import QualityInformation from "../Components/V1/QualityInformation";
import Procurenet from "../Components/V1/Procurenet";
import ImpactStory from "../Components/V1/ImpactStory";
import OurClient from "../Components/V1/OurClient";
import OurWork from "../components/V1/OurWork";
import DeliveryProcess from "../components/V1/DeliveryProcess";
import AgileApproch from "../components/V1/AgileApproch";
import OurImpact from "../Components/V1/OurImpact";
import IndustryWeServe from "../Components/V1/IndustryWeServe";
import Insights from '../Components/V1/Insights'
import Hero from "../components/V1/Hero";
import Services from "../components/V1/Services";

function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-full">
        <Hero />
        <QualityInformation />
        <DeliveryProcess />
        <Procurenet />
        <ImpactStory />
        <OurWork />
      </div>
      <AgileApproch />
      <div className="flex flex-col items-center justify-center h-full">
        <Services />
        <OurClient />
        <OurImpact />
        <IndustryWeServe />
        <Insights />
      </div>
    </>
  );
}

export default Home;
