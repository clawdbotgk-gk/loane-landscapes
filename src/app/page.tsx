export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center bg-gradient-to-br from-green-800 to-green-900">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558904541-efa843a96f01?w=1920')] bg-cover bg-center opacity-30"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Transform Your Outdoor Space</h1>
          <p className="text-xl md:text-2xl text-green-100 mb-8 max-w-2xl">Professional landscaping services in Belfast. From lawn cutting to complete garden transformations.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="/contact" className="bg-white text-green-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-50 transition">Get a Quote</a>
            <a href="/gallery" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition">View Our Work</a>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Our Services</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">Comprehensive landscaping solutions for residential and commercial properties in Belfast.</p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Lawn Cutting", desc: "Regular maintenance to keep your lawn healthy and beautiful all year round.", icon: "🌱" },
              { title: "Hedge Trimming", desc: "Professional hedge shaping and trimming for clean, neat boundaries.", icon: "🌿" },
              { title: "Garden Design", desc: "Complete landscape design to transform your outdoor space.", icon: "🎨" },
            ].map((service, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a href="/services" className="inline-block border-2 border-green-700 text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-green-700 hover:text-white transition">View All Services</a>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose Loane Landscapes?</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: "Local", desc: "Based in Belfast, serving NI for over 10 years" },
              { title: "Professional", desc: "Fully insured and qualified team" },
              { title: "Reliable", desc: "Scheduled visits, always on time" },
              { title: "Quality", desc: "Premium equipment and materials" },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">✓</span>
                </div>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-green-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Garden?</h2>
          <p className="text-green-100 mb-8 text-lg">Get in touch for a free, no-obligation quote.</p>
          <a href="/contact" className="inline-block bg-white text-green-800 px-10 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition">Contact Us Today</a>
        </div>
      </section>
    </>
  );
}
