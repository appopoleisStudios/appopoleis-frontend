import { QUALITY_INFORMATION_DATA } from "../../Utils/data/qualityInformation";
import DotComponent from "./Dot.jsx";
import ProcessImg from "../../assets/Images/Home/process.svg"


function DeliveryProcess() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-8xl">
      <div className="text-center mb-12">
        <h2
          className="section-heading text-3xl md:text-4xl font-bold mb-4 m-auto leading-tight"
        >
          Driving Digital Transformation Through Custom Software Development
          <DotComponent />
        </h2>
        <p className="max-w-4xl mx-auto text-text-secondary">
          We implement a prioritization framework, simulate real-life scenarios
          and put into action the collective intelligence of our
          interdisciplinary teams to deliver superlative digital experiences
        </p>
      </div>
      <div>
        <img src={ProcessImg} />
      </div>
    </div>
  );
}

export default DeliveryProcess;
