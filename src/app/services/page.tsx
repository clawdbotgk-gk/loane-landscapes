import Link from "next/link";

export const metadata = {
  title: "Services | Loane Landscapes",
  description: "Explore our landscaping services in Belfast - lawn cutting, hedge trimming, garden design, and more.",
};

const services = [
  {
    title: "Lawn Cutting",
    description: "Regular lawn maintenance to keep your grass healthy, lush, and well-maintained throughout the growing season.",
    includes: ["Weekly/bi-weekly cuts", "Edge trimming", "Grass collection", "Seasonal fertilisation"],
  },
  {
    title: "Hedge Trimming",
    description: "Professional hedge shaping and maintenance for neat, well-defined boundaries.",
    includes: ["Hedge cutting", "Shape trimming", "Bush pruning", "Dead wood removal"],
  },
  {
    title: "Garden Maintenance",
    description: "Complete garden upkeep services to keep your outdoor space looking its best.",
    includes: ["Weed control", "Planting", "Mulching", "General cleanup"],
  },
  {
    title: "Landscape Design",
    description: "Transform your outdoor space with our professional landscape design services.",
    includes: ["Garden planning", "Plant selection", "Hard landscaping", "3D visualizations"],
  },
  {
    title: "Tree Surgery",
    description: "Professional tree care including pruning, trimming, and removal services.",
    includes: ["Tree pruning", "Crown reduction", "Stump grinding", "Storm damage cleanup"],
  },
  {
    title: "Patio & Driveways",
    description: "Installation, driveways, of patios and other hard landscaping features.",
    includes: ["Patio laying", "Driveway installation", "Block paving", "Resin bonding"],
  },
];

export default function Services() {
  return (
    <>
      <section className="py-20 bg-green-700 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold">Our Services</h1>
          <p className="text-green-100 mt-4 text-xl">Comprehensive landscaping solutions for Belfast homes and businesses</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-lg transition">
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.includes.map((item, j) => (
                    <li key={j} className="flex items-center text-gray-600">
                      <span className="text-green-600 mr-2">✓</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Need Something Special?</h2>
          <p className="text-gray-600 mb-8">We tailor our services to meet your specific requirements. Contact us to discuss your project.</p>
          <Link href="/contact" className="inline-block bg-green-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-800 transition">
            Get a Custom Quote
          </Link>
        </div>
      </section>
    </>
  );
}
