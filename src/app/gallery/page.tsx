import Link from "next/link";

export const metadata = {
  title: "Gallery | Loane Landscapes",
  description: "View our portfolio of completed landscaping projects in Belfast.",
};

const projects = [
  { title: "Residential Garden", location: "South Belfast", category: "Garden Design" },
  { title: "Commercial Premises", location: "City Centre", category: "Maintenance" },
  { title: "Backyard Renovation", location: "East Belfast", category: "Lawn & Hedges" },
  { title: "Front Garden Makeover", location: "North Belfast", category: "Design" },
  { title: "Hedge Installation", location: "West Belfast", category: "Hedges" },
  { title: "Patio Installation", location: "Lisburn", category: "Hard Landscaping" },
];

export default function Gallery() {
  return (
    <>
      <section className="py-20 bg-green-700 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold">Our Work</h1>
          <p className="text-green-100 mt-4 text-xl">A selection of our recent landscaping projects in Belfast</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <div key={i} className="group relative aspect-square bg-gray-200 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-6">
                  <div className="text-white">
                    <p className="text-sm text-green-300">{project.category}</p>
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <p className="text-sm text-gray-300">{project.location}</p>
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  <span className="text-4xl">🏡</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Like What You See?</h2>
          <p className="text-gray-600 mb-8">Get in touch to discuss your own landscaping project.</p>
          <Link href="/contact" className="inline-block bg-green-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-800 transition">
            Start Your Project
          </Link>
        </div>
      </section>
    </>
  );
}
