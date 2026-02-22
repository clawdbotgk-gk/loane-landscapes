import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Loane Landscapes | Belfast Landscaping Services",
  description: "Professional landscaping services in Belfast. Lawn cutting, hedge trimming, garden maintenance, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased text-gray-800 bg-white">
        <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <a href="/" className="text-xl font-bold text-green-700">Loane Landscapes</a>
              <div className="hidden md:flex space-x-8">
                <a href="/" className="text-gray-600 hover:text-green-700 transition">Home</a>
                <a href="/about" className="text-gray-600 hover:text-green-700 transition">About</a>
                <a href="/services" className="text-gray-600 hover:text-green-700 transition">Services</a>
                <a href="/gallery" className="text-gray-600 hover:text-green-700 transition">Gallery</a>
                <a href="/contact" className="text-gray-600 hover:text-green-700 transition">Contact</a>
              </div>
              <a href="/contact" className="md:hidden bg-green-700 text-white px-4 py-2 rounded-lg text-sm">Contact</a>
            </div>
          </div>
        </nav>
        <main className="pt-16">{children}</main>
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-bold mb-4">Loane Landscapes</h3>
                <p className="text-gray-400">Professional landscaping services in Belfast and surrounding areas.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4">Services</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>Lawn Cutting</li>
                  <li>Hedge Trimming</li>
                  <li>Garden Maintenance</li>
                  <li>Landscape Design</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4">Contact</h3>
                <p className="text-gray-400">Belfast, Northern Ireland</p>
                <p className="text-gray-400">info@loanelandscapes.co.uk</p>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
              © 2026 Loane Landscapes. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
