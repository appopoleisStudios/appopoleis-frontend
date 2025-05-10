import ProcurenetImage from "../../assets/Images/Home/Procurenet.png";
import { IMPACTSTORY_DATA } from "../../Utils/data/ImpactStory";

function ImpactStory() {
  const { title, heading, introduction, features, image } = IMPACTSTORY_DATA;

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
        <div className="w-full md:w-1/2">
          <img
            src={ProcurenetImage}
            alt={image.alt}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h3 className="text-2xl font-bold mb-2 text-[color:var(--text-primary)]">
            {title}
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-[color:var(--gray-800)]">
            {heading}
          </h2>
          <p className="text-lg mb-4 text-[color:var(--text-secondary)]">
            {introduction}
          </p>{" "}
          <ul className="space-y-3">
            {features.map((feature) => (
              <li key={feature.id} className="flex items-start">
                <span className="mr-2 text-[color:var(--text-secondary)]">
                  —
                </span>
                <span className="text-[color:var(--text-secondary)]">
                  {feature.highlight ? (
                    <>
                      {feature.text.split(feature.highlight)[0]}
                      <span className="text-[color:var(--blue-main)]">
                        {feature.highlight}
                      </span>
                      {feature.text.split(feature.highlight)[1]}
                </>
                  ) : (
                    feature.text
                  )}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ImpactStory;
