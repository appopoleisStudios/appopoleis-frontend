import { QUALITY_INFORMATION_DATA } from "../../Utils/data/qualityInformation";

function QualityInformation() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-8xl">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
          Led by Our Guiding Principles, We Architect Software Solutions for
          Audacious Possibilities
          <span className="text-3xl text-primary">.</span>
        </h2>
        <p className="max-w-4xl mx-auto text-text-secondary">
          Each one inspires us to stay true to ourselves while delivering best
          results for our clients to achieve different stages of digital
          maturity.
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
