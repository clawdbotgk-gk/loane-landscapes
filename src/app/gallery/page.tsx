import Link from "next/link";

export const metadata = {
  title: "Gallery | Loane Landscapes",
  description: "View our portfolio of completed landscaping projects in Belfast.",
};

export default function Gallery() {
  return (
    <>
      <section className="py-20 bg-green-700 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold">Our Work</h1>
          <p className="text-green-100 mt-4 text-xl">Portfolio of landscaping projects in Belfast</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-600 text-center mb-12">
            We have a growing portfolio of successful projects throughout Belfast and Northern Ireland. 
            Contact us to see more examples of our work and discuss your own project.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="aspect-square bg-gray-200 rounded-2xl flex items-center justify-center">
                <span className="text-gray-400">Project {i}</span>
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
