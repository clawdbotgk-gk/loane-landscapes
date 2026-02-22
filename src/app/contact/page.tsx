export const metadata = {
  title: "Contact | Loane Landscapes",
  description: "Get in touch with Loane Landscapes for a free quote in Belfast.",
};

export default function Contact() {
  return (
    <>
      <section className="py-20 bg-green-700 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold">Contact Us</h1>
          <p className="text-green-100 mt-4 text-xl">Get a free quote for your landscaping project</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              <p className="text-gray-600 mb-8">Fill out the form and we'll get back to you within 24 hours.</p>
              
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none" placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none" placeholder="Your phone number" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Service Required</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none">
                    <option>Lawn Cutting</option>
                    <option>Hedge Trimming</option>
                    <option>Garden Maintenance</option>
                    <option>Landscape Design</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none" placeholder="Tell us about your project..."></textarea>
                </div>
                <button type="submit" className="w-full bg-green-700 text-white py-4 rounded-lg font-semibold hover:bg-green-800 transition">
                  Send Message
                </button>
              </form>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-xl">📍</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Address</h3>
                    <p className="text-gray-600">Belfast, Northern Ireland</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-xl">📧</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-gray-600">info@loanelandscapes.co.uk</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-xl">📞</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-gray-600">(028) 1234 5678</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-xl">🕐</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Hours</h3>
                    <p className="text-gray-600">Mon - Sat: 8am - 6pm<br/>Sun: Closed</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 bg-gray-50 rounded-2xl">
                <h3 className="font-semibold mb-2">Emergency Services</h3>
                <p className="text-gray-600 text-sm">For urgent garden clearance or storm damage, call our emergency line.</p>
                <p className="font-semibold text-green-700 mt-2">(028) 1234 5679</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
