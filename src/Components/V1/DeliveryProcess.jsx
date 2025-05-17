import { QUALITY_INFORMATION_DATA } from "../../Utils/data/qualityInformation";
import DotComponent from "./Dot.jsx";
import ProcessImg from "../../assets/Images/Home/process.svg"


function DeliveryProcess() {
  return (
    <div className="container mx-auto px-4 py-20 max-w-8xl">
      <div className="text-center mb-12">
        <h2
          className="section-heading text-3xl md:text-3xl font-bold mb-4 m-auto leading-tight"
        >
          Empowering Digital Evolution with Custom Software Solutions
          <DotComponent />
        </h2>
        <p className="max-w-4xl mx-auto text-text-secondary">
        We align interdisciplinary expertise, real-world simulations, and strategic prioritization to create impactful digital journeys.
        </p>
      </div>
      <div>
        <img src={ProcessImg} />
      </div>
    </div>
  );
}

export default DeliveryProcess;
