export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center bg-gradient-to-br from-green-800 to-green-900">
        <div className="absolute inset-0 bg-[url('/hero.jpg')] bg-cover bg-center opacity-30"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Quality Landscaping in Belfast</h1>
          <p className="text-xl md:text-2xl text-green-100 mb-8 max-w-2xl">Family-run landscape gardening company serving Belfast and Northern Ireland since 1985. Quality service at competitive rates.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="/contact" className="bg-white text-green-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-50 transition">Get a Quote</a>
            <a href="/services" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition">Our Services</a>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Family-Run Since 1985</h2>
              <p className="text-gray-600 mb-4">
                Loane Landscapes is a small, family-run landscape gardening company based in Belfast, Northern Ireland. 
                Established in 1985, the company is still managed by Raymond Loane and aims to provide a quality 
                landscaping & maintenance service at competitive rates within the Belfast area.
              </p>
              <p className="text-gray-600 mb-6">
                As our business focuses on both maintenance and landscaping aspects, we are a good choice 
                whatever your gardening needs.
              </p>
              <a href="/about" className="text-green-700 font-semibold hover:underline">Learn more about us →</a>
            </div>
            <div className="bg-gray-200 rounded-2xl h-80 flex items-center justify-center">
              <span className="text-gray-400">Garden Image</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Our Services</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">We offer both landscaping and maintenance services throughout Belfast.</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-xl font-bold mb-4">Landscaping</h3>
              <p className="text-gray-600 mb-4">
                We have a growing portfolio of previous successful projects and a good reputation. 
                Contact us for a free consultation, whatever the size of job.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>✓ Free consultation</li>
                <li>✓ Personalised layout plans</li>
                <li>✓ Design & construction</li>
                <li>✓ Quality materials</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-xl font-bold mb-4">Maintenance</h3>
              <p className="text-gray-600 mb-4">
                We employ a well-established maintenance team throughout Belfast with services 
                including competitively-priced grass and hedge cutting.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>✓ Grass cutting</li>
                <li>✓ Hedge trimming</li>
                <li>✓ Pruning & garden upkeep</li>
                <li>✓ Tree work</li>
              </ul>
            </div>
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
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✓</span>
              </div>
              <h3 className="font-bold mb-2">Since 1985</h3>
              <p className="text-gray-600 text-sm">40 years of experience</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✓</span>
              </div>
              <h3 className="font-bold mb-2">Family Run</h3>
              <p className="text-gray-600 text-sm">Personal, friendly service</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✓</span>
              </div>
              <h3 className="font-bold mb-2">Qualified</h3>
              <p className="text-gray-600 text-sm">Horticulture trained staff</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✓</span>
              </div>
              <h3 className="font-bold mb-2">Local</h3>
              <p className="text-gray-600 text-sm">Based in Belfast</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-green-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Garden?</h2>
          <p className="text-green-100 mb-8 text-lg">Contact us for a free consultation.</p>
          <a href="/contact" className="inline-block bg-white text-green-800 px-10 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition">Contact Us Today</a>
        </div>
      </section>
    </>
  );
}
