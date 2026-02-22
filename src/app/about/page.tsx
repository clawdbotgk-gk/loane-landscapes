import Link from "next/link";

export const metadata = {
  title: "About Us | Loane Landscapes",
  description: "Learn about Loane Landscapes, Belfast's trusted landscaping company.",
};

export default function About() {
  return (
    <>
      <section className="py-20 bg-green-700 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold">About Loane Landscapes</h1>
          <p className="text-green-100 mt-4 text-xl">Belfast's trusted landscaping professionals</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Loane Landscapes has been serving Belfast and the surrounding areas for over 10 years. 
                What started as a small lawn cutting business has grown into a full-service landscaping company.
              </p>
              <p className="text-gray-600 mb-4">
                We take pride in every project, no matter the size. Our team of experienced professionals 
                is dedicated to transforming outdoor spaces into beautiful, functional areas that our clients can enjoy.
              </p>
              <p className="text-gray-600">
                Whether you need regular garden maintenance or a complete landscape redesign, we're here to help 
                bring your vision to life.
              </p>
            </div>
            <div className="bg-gray-200 rounded-2xl h-80 flex items-center justify-center">
              <span className="text-gray-400 text-lg">Team Photo</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Quality", desc: "We never compromise on the quality of our work or materials." },
              { title: "Reliability", desc: "We show up on time and complete jobs as promised." },
              { title: "Customer Focus", desc: "Your satisfaction is our top priority." },
            ].map((value, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm">
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
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
