import { QUALITY_INFORMATION_DATA } from "../../Utils/data/qualityInformation";
import DotComponent from "./Dot.jsx";

function QualityInformation() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-8xl">
      <div className="text-center mb-12">
      <h2 className="section-heading text-3xl md:text-4xl font-bold mb-4 m-auto leading-tight capitalize">
        Guided by our core values, we design and deliver tailored software solutions 
        <DotComponent />
        </h2>
        <p className="max-w-4xl mx-auto text-text-secondary">
        So you can accelerate growth and seize new opportunities from day one
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 border-gray-200">
        {QUALITY_INFORMATION_DATA.map((item, index) => (
          <div
            key={index}
            className="border border-[color:var(--color-gray-200)] p-8 rounded-md"
          >
            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
            <div className="w-12 h-1 mb-4 bg-[color:var(--primary)]"></div>
            <p className="text-[color:var(--text-secondary)]">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default QualityInformation;
