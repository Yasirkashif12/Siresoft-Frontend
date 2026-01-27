import { FeatureHighlight } from "../../cards";

const WHY_SIRESOFT_FEATURES = [
  {
    id: "established",
    icon: "US",
    title: "Established 2012",
    lines: ["Headquartered in", "Canton, Michigan"],
  },
  {
    id: "global-reach",
    icon: "PK",
    title: "Global Reach",
    lines: ["Serving Pakistan,", "USA & UAE"],
  },
  {
    id: "support",
    icon: "24",
    title: "24/7 Support",
    lines: ["Always here to", "help you grow"],
  },
  {
    id: "security",
    icon: "Loc",
    title: "Secure Systems",
    lines: ["Enterprise grade", "security standard"],
  },
];

const WhySireSoft = () => (
  <section
    className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-b from-gray-100 to-white"
    aria-labelledby="why-title"
  >
    <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
      <h2 id="why-title" className="sr-only">
        Why Choose SireSoft
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {WHY_SIRESOFT_FEATURES.map((feature) => (
          <FeatureHighlight key={feature.id} feature={feature} />
        ))}
      </div>
    </div>
  </section>
);

export default WhySireSoft;
