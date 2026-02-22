import Link from "next/link";

export const metadata = {
  title: "About Us | Loane Landscapes",
  description: "Learn about Loane Landscapes, Belfast's trusted landscaping company since 1985.",
};

export default function About() {
  return (
    <>
      <section className="py-20 bg-green-700 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold">About Loane Landscapes</h1>
          <p className="text-green-100 mt-4 text-xl">Family-run landscaping in Belfast since 1985</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                We are a small, long-established, family run landscape gardening company based in Belfast. 
                The company was started and is still managed by Raymond Loane with the aim to provide a 
                quality service at a competitive price.
              </p>
              <p className="text-gray-600 mb-4">
                With both a maintenance and landscape side to our business, we are a good choice, 
                whatever your needs are regarding the garden. Our aim and speciality is creating 
                well designed and low maintenance gardens.
              </p>
              <p className="text-gray-600">
                We have a growing portfolio of previous successful projects and a good reputation 
                throughout Belfast and Northern Ireland.
              </p>
            </div>
            <div className="bg-gray-200 rounded-2xl h-80 flex items-center justify-center">
              <span className="text-gray-400">Company Image</span>
            </div>
          </div>
        </div>
      </section>

      <section class20 bg-gray-Name="py-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Quality Standards</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-xl font-bold mb-4">Qualified Staff</h3>
              <p className="text-gray-600">
                All staff are trained and qualified in all aspects of Horticulture, garden design and landscaping.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-xl font-bold mb-4">Quality Equipment</h3>
              <p className="text-gray-600">
                We use a high standard of machinery on every job to ensure the best results.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-xl font-bold mb-4">Safe & Efficient</h3>
              <p className="text-gray-600">
                Every job is delivered in a safe, efficient manner with proper planning and execution.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-xl font-bold mb-4">Client Relations</h3>
              <p className="text-gray-600">
                Throughout all phases of design and construction we maintain a good working relationship with our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Work Together?</h2>
          <p className="text-gray-600 mb-8">Get in touch for a free quote on your landscaping project.</p>
          <Link href="/contact" className="inline-block bg-green-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-800 transition">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
