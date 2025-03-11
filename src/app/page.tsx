import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white">
      {/* Navigation */}
      <header className="container mx-auto py-6 px-4">
        <nav className="flex justify-between items-center">
          <div className="font-bold text-2xl text-gray-900">Starry Agency</div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-900 font-medium">
              Home
            </Link>
            <Link href="/about" className="text-gray-900 font-medium">
              About
            </Link>
            <div className="relative group">
              <Link
                href="/services"
                className="text-gray-900 font-medium flex items-center"
              >
                Services
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-1 h-4 w-4"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </Link>
            </div>
            <Link href="/portfolio" className="text-gray-900 font-medium">
              Portfolio
            </Link>
            <Link href="/blog" className="text-gray-900 font-medium">
              Blog
            </Link>
          </div>
          <Button className="bg-white text-purple-600 border border-purple-200 hover:bg-purple-50 rounded-full px-6">
            Contact us <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </nav>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 relative">
        {/* Background Text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5 text-7xl md:text-9xl font-bold text-gray-300 text-center">
          <span>Creative Agency</span>
        </div>

        {/* Hero Section */}
        <section className="py-16 md:py-24 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 z-10">
            <h1 className="text-4xl md:text-6xl font-bold text-purple-700 mb-6">
              Welcome to our digital Agency where we meets expertise.
            </h1>
            <p className="text-gray-600 mb-8 max-w-lg">
              Welcome to our digital agency where innovation meets expertise to
              transform your online presence. At Khanstudio we specialize in a
              spectrum of digital services.
            </p>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-6 py-6">
              Start a Project <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="md:w-1/2 flex justify-end mt-12 md:mt-0">
            <div className="relative">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white"
                  >
                    <Image
                      src={`/placeholder.svg?height=48&width=48`}
                      alt={`Team member ${i}`}
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                ))}
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 text-xs font-medium border-2 border-white">
                  10+
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-2">Our Creative Team</p>
            </div>
          </div>
        </section>

        {/* Trusted by Clients Section */}
        <section className="container mx-auto px-4 py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                <span className="text-purple-600">Trusted by</span>
                <br />
                Awesome Clients
              </h2>
              <div className="bg-blue-50 border border-blue-100 rounded-lg p-6">
                <div className="flex items-start gap-2">
                  <div className="bg-blue-500 text-white text-xs px-2 py-1 rounded">
                    ℹ️
                  </div>
                  <p className="text-gray-700">
                    Not to brag, but a lot of hot startups and market leaders
                    reach out & touch base to commission our work.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="text-blue-500 font-bold text-xl">
                    Logoipsum
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="bg-gray-900 text-white py-24">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-purple-400 text-sm font-medium uppercase tracking-wider">
                Services
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mt-4 leading-tight">
                Our Awesome Services Your Digital Success Starts Here
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {/* Development */}
              <div className="bg-gray-800 rounded-xl p-6 relative">
                <span className="text-gray-600 text-6xl font-bold absolute right-6 top-6">
                  01
                </span>
                <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Development</h3>
                <p className="text-gray-400 mb-4">
                  Developing websites and apps is crucial for businesses. Both
                  require thoughtful design and coding.
                </p>
                <Link
                  href="/services/development"
                  className="text-purple-400 hover:text-purple-300 inline-flex items-center"
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>

              {/* Central Feature Card */}
              <div className="bg-purple-600 rounded-xl p-6 md:row-span-2 md:col-span-1 flex flex-col justify-between relative overflow-hidden">
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4">
                    Get Comprehensive Service Offerings
                  </h3>
                  <Button variant="secondary" className="mt-4">
                    View All Services <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <Image
                  src="/placeholder.svg?height=400&width=300"
                  alt="Service representative"
                  width={300}
                  height={400}
                  className="object-cover mt-6"
                />
              </div>

              {/* UI/UX Design */}
              <div className="bg-gray-800 rounded-xl p-6 relative">
                <span className="text-gray-600 text-6xl font-bold absolute right-6 top-6">
                  02
                </span>
                <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">UI/UX Design</h3>
                <p className="text-gray-400 mb-4">
                  Our UI/UX experts meticulously plan and implement interfaces
                  that not only look aesthetically pleasing but also enhance
                  user interaction.
                </p>
                <Link
                  href="/services/ui-ux"
                  className="text-purple-400 hover:text-purple-300 inline-flex items-center"
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>

              {/* Graphic Designing */}
              <div className="bg-gray-800 rounded-xl p-6 relative">
                <span className="text-gray-600 text-6xl font-bold absolute right-6 top-6">
                  03
                </span>
                <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Graphic Designing</h3>
                <p className="text-gray-400 mb-4">
                  Elevate your brands presence with our cutting-edge graphic
                  design services.
                </p>
                <Link
                  href="/services/graphic-design"
                  className="text-purple-400 hover:text-purple-300 inline-flex items-center"
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>

              {/* SEO Digital Marketing */}
              <div className="bg-gray-800 rounded-xl p-6 relative">
                <span className="text-gray-600 text-6xl font-bold absolute right-6 top-6">
                  04
                </span>
                <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">
                  SEO Digital Marketing
                </h3>
                <p className="text-gray-400 mb-4">
                  Boost your online presence with our specialized SEO services.
                  From keyword optimization to content marketing.
                </p>
                <Link
                  href="/services/seo"
                  className="text-purple-400 hover:text-purple-300 inline-flex items-center"
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-4xl md:text-5xl font-bold">
                We Create Amazing Digital{" "}
                <span className="text-purple-600">Products</span>
              </h2>
              <p className="text-gray-600 mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur finibus maura rhoncus odio eliquet, vitae.
              </p>
            </div>

            <div className="border border-blue-200 rounded-xl p-8 bg-white">
              <div className="grid md:grid-cols-3 gap-8">
                {/* Project Card 1 */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-xl">
                    Smart Business Management
                  </h3>
                  <p className="text-sm text-gray-600">
                    Lorem ipsum dolor sit amet consectetur.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs px-2 py-1 bg-purple-100 text-purple-600 rounded">
                      UI/UX Design
                    </span>
                    <span className="text-xs px-2 py-1 bg-blue-100 text-blue-600 rounded">
                      Website
                    </span>
                  </div>
                  <div className="aspect-video relative rounded-lg overflow-hidden bg-gray-100">
                    <Image
                      src="/placeholder.svg?height=300&width=400"
                      alt="Mobile app interface"
                      width={400}
                      height={300}
                      className="object-cover"
                    />
                  </div>
                  <Link
                    href="/projects/business-management"
                    className="inline-flex items-center text-sm text-purple-600 hover:text-purple-700"
                  >
                    See Detail <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>

                {/* Project Card 2 */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-xl">
                    Smart Business Management
                  </h3>
                  <p className="text-sm text-gray-600">
                    Lorem ipsum dolor sit amet consectetur.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs px-2 py-1 bg-purple-100 text-purple-600 rounded">
                      Development
                    </span>
                    <span className="text-xs px-2 py-1 bg-blue-100 text-blue-600 rounded">
                      Website
                    </span>
                  </div>
                  <div className="aspect-video relative rounded-lg overflow-hidden bg-gray-900">
                    <Image
                      src="/placeholder.svg?height=300&width=400"
                      alt="Website design"
                      width={400}
                      height={300}
                      className="object-cover"
                    />
                  </div>
                  <Link
                    href="/projects/business-platform"
                    className="inline-flex items-center text-sm text-purple-600 hover:text-purple-700"
                  >
                    See Detail <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>

                {/* Project Card 3 */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-xl">
                    Smart Business Management
                  </h3>
                  <p className="text-sm text-gray-600">
                    Lorem ipsum dolor sit amet consectetur.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs px-2 py-1 bg-purple-100 text-purple-600 rounded">
                      Digital Marketing
                    </span>
                    <span className="text-xs px-2 py-1 bg-blue-100 text-blue-600 rounded">
                      SEO
                    </span>
                  </div>
                  <div className="aspect-video relative rounded-lg overflow-hidden bg-gray-100">
                    <Image
                      src="/placeholder.svg?height=300&width=400"
                      alt="Product branding"
                      width={400}
                      height={300}
                      className="object-cover"
                    />
                  </div>
                  <Link
                    href="/projects/business-branding"
                    className="inline-flex items-center text-sm text-purple-600 hover:text-purple-700"
                  >
                    See Detail <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>

              <div className="mt-12 text-center">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-8">
                  View All Projects <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Working Process Section */}
        <section className="py-24 bg-gradient-to-b from-white to-purple-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-bold">
                Our <span className="text-purple-600">Working</span> Process
              </h2>
              <p className="text-gray-600 mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur finibus maura rhoncus odio eliquet, vitae.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Process Step 1 */}
              <div className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">Lorem ipsum</h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur finibus maura rhoncus odio eliquet, vitae.
                </p>
              </div>

              {/* Process Step 2 */}
              <div className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">Lorem ipsum</h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur finibus maura rhoncus odio eliquet, vitae.
                </p>
              </div>

              {/* Process Step 3 */}
              <div className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">Lorem ipsum</h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur finibus maura rhoncus odio eliquet, vitae.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Members Section */}
        <section className="bg-gray-900 text-white py-24">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-purple-400 text-sm font-medium uppercase tracking-wider">
                Team Members
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mt-4 leading-tight">
                Our Awesome Services Your Digital Success Starts Here
              </h2>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 mt-16 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <div>
            BASED ON
            <br />
            MAHARASHTRA, ID
          </div>
          <div className="mt-4 md:mt-0 text-right">
            BUILD WITH LOVE
            <br />
            KHAN STUDIO © 2024
          </div>
        </footer>
      </main>
    </div>
  );
}
