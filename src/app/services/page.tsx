import Link from "next/link";

export const metadata = {
  title: "Services | Loane Landscapes",
  description: "Our landscaping and garden maintenance services in Belfast.",
};

const services = [
  {
    title: "Landscaping",
    description: "We have a growing portfolio of successful projects and a good reputation. Feel free to contact us for a free consultation, whatever the size of job. The visit will include advice on maximising space, required materials, suitable plants etc. We create a personalised layout plan for each garden based on our clients' needs and desires.",
    includes: ["Free consultation", "Personalised design plans", "Garden construction", "Patios & driveways", "Planting schemes"],
  },
  {
    title: "Garden Maintenance",
    description: "We have a well established maintenance team throughout Belfast with services that include competitively priced grass cutting in any area, pruning, and general garden up-keep.",
    includes: ["Grass cutting", "Hedge trimming", "Pruning", "General garden upkeep", "Regular maintenance contracts"],
  },
  {
    title: "Tree Work",
    description: "Professional tree surgery services including pruning, trimming, and removal when necessary.",
    includes: ["Tree pruning", "Crown reduction", "Tree removal", "Stump grinding", "Storm damage cleanup"],
  },
];

export default function Services() {
  return (
    <>
      <section className="py-20 bg-green-700 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold">Our Services</h1>
          <p className="text-green-100 mt-4 text-xl">Landscaping & Maintenance in Belfast</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-lg transition">
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
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
