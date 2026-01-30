import { Button } from "../../common";
import { TemplateCard } from "../../cards";

const TEMPLATES = [
  { id: "ecommerce", name: "E-Commerce" },
  { id: "corporate", name: "Corporate" },
  { id: "portfolio", name: "Portfolio" },
  { id: "landing-page", name: "Landing Page" },
];

const WebsiteTemplates = () => (
  <section
    className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white"
    aria-labelledby="templates-title"
  >
    <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
      <h2
        id="templates-title"
        className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8"
      >
        Popular Templates
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
        {TEMPLATES.map((template) => (
          <TemplateCard
            key={template.id}
            id={template.id}
            name={template.name}
          />
        ))}
      </div>

      <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
        <Button>Customize</Button>
        <Button variant="secondary">View All</Button>
      </div>
    </div>
  </section>
);

export default WebsiteTemplates;
