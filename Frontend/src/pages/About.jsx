import React from 'react'
import { Target, History, Mail, Phone, MapPin } from 'lucide-react'

export default function About() {
  return (
    <div className="min-h-screen bg-[#0F0F1A]">
      {/* Page Header Section */}
      <section className="max-w-[1200px] mx-auto px-6 md:px-8 pt-20 md:pt-24 pb-16 border-b border-[rgba(122,47,247,0.2)]">
        <div className="text-center">
          <h1 className="font-poppins font-semibold text-[2rem] text-white mb-4 leading-[1.5]">
            About CSI
          </h1>
          <p className="font-inter text-base text-[rgba(255,255,255,0.7)] mb-0">
            Computer Society of India - Student Chapter
          </p>
          {/* Decorative Line */}
          <div 
            className="h-0.5 w-32 md:w-48 mx-auto mt-6 rounded-full"
            style={{
              background: 'linear-gradient(to right, transparent, #7A2FF7, transparent)',
              boxShadow: '0 0 8px rgba(122, 47, 247, 0.6)'
            }}
          />
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="max-w-[1200px] mx-auto px-6 md:px-8 py-16 md:py-20">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-[rgba(122,47,247,0.2)] rounded-lg flex items-center justify-center">
            <Target className="w-6 h-6 text-[#7A2FF7]" />
          </div>
          <h2 className="font-poppins font-semibold text-[2rem] text-white m-0 leading-[1.5]">
            Mission & Vision
          </h2>
        </div>

        {/* Mission & Vision Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Mission Card */}
          <div className="bg-[rgba(0,0,0,0.5)] border border-[rgba(122,47,247,0.2)] rounded-2xl p-6 md:p-8 transition-all duration-300 hover:border-[rgba(122,47,247,0.4)]">
            <h3 className="font-poppins font-semibold text-[1.5rem] text-white mb-4 leading-[1.5]">
              Our Mission
            </h3>
            <p className="font-inter text-base text-[rgba(255,255,255,0.7)] leading-relaxed m-0">
              To foster a collaborative environment where students can learn, grow, and contribute to the ever-evolving world of technology through workshops, hackathons, seminars, and networking events.
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-[rgba(0,0,0,0.5)] border border-[rgba(122,47,247,0.2)] rounded-2xl p-6 md:p-8 transition-all duration-300 hover:border-[rgba(122,47,247,0.4)]">
            <h3 className="font-poppins font-semibold text-[1.5rem] text-white mb-4 leading-[1.5]">
              Our Vision
            </h3>
            <p className="font-inter text-base text-[rgba(255,255,255,0.7)] leading-relaxed m-0">
              To be the leading student technology community that bridges the gap between academic learning and industry requirements, while building lasting connections with like-minded individuals.
            </p>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="max-w-[1200px] mx-auto px-6 md:px-8 py-16 md:py-20">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-[rgba(122,47,247,0.2)] rounded-lg flex items-center justify-center">
            <History className="w-6 h-6 text-[#7A2FF7]" />
          </div>
          <h2 className="font-poppins font-semibold text-[2rem] text-white m-0 leading-[1.5]">
            Our History
          </h2>
        </div>

        {/* History Card */}
        <div className="bg-[rgba(0,0,0,0.5)] border border-[rgba(122,47,247,0.2)] rounded-2xl p-6 md:p-8">
          <p className="font-inter text-base text-[rgba(255,255,255,0.7)] leading-relaxed mb-4">
            The Computer Society of India (CSI) is the largest body of computer professionals in India, established in 1965. The CSI Sanjivani Student Chapter was founded to extend the mission of CSI to engineering students.
          </p>
          <p className="font-inter text-base text-[rgba(255,255,255,0.7)] leading-relaxed mb-4">
            Since our inception, we have been committed to providing students with opportunities to enhance their technical skills, connect with industry professionals, and stay updated with the latest technological advancements.
          </p>
          <p className="font-inter text-base text-[rgba(255,255,255,0.7)] leading-relaxed m-0">
            Our chapter has successfully organized numerous workshops, technical seminars, coding competitions, and hackathons, impacting hundreds of students and helping them build successful careers in technology.
          </p>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="max-w-[1200px] mx-auto px-6 md:px-8 py-16 md:py-20">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-[rgba(122,47,247,0.2)] rounded-lg flex items-center justify-center">
            <Mail className="w-6 h-6 text-[#7A2FF7]" />
          </div>
          <h2 className="font-poppins font-semibold text-[2rem] text-white m-0 leading-[1.5]">
            Contact Information
          </h2>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Email Card */}
          <div className="bg-[rgba(0,0,0,0.5)] border border-[rgba(122,47,247,0.2)] rounded-2xl p-6 transition-all duration-300 hover:border-[rgba(122,47,247,0.4)]">
            <div className="w-12 h-12 bg-[rgba(122,47,247,0.2)] rounded-lg flex items-center justify-center mb-4">
              <Mail className="w-6 h-6 text-[#7A2FF7]" />
            </div>
            <h3 className="font-poppins font-semibold text-[1.5rem] text-white mb-2 leading-[1.5]">
              Email
            </h3>
            <p className="font-inter text-base text-[rgba(255,255,255,0.7)] m-0">
              contact@csisanjivani.edu
            </p>
          </div>

          {/* Phone Card */}
          <div className="bg-[rgba(0,0,0,0.5)] border border-[rgba(122,47,247,0.2)] rounded-2xl p-6 transition-all duration-300 hover:border-[rgba(122,47,247,0.4)]">
            <div className="w-12 h-12 bg-[rgba(122,47,247,0.2)] rounded-lg flex items-center justify-center mb-4">
              <Phone className="w-6 h-6 text-[#7A2FF7]" />
            </div>
            <h3 className="font-poppins font-semibold text-[1.5rem] text-white mb-2 leading-[1.5]">
              Phone
            </h3>
            <p className="font-inter text-base text-[rgba(255,255,255,0.7)] m-0">
              +91 98765 43210
            </p>
          </div>

          {/* Location Card */}
          <div className="bg-[rgba(0,0,0,0.5)] border border-[rgba(122,47,247,0.2)] rounded-2xl p-6 transition-all duration-300 hover:border-[rgba(122,47,247,0.4)]">
            <div className="w-12 h-12 bg-[rgba(122,47,247,0.2)] rounded-lg flex items-center justify-center mb-4">
              <MapPin className="w-6 h-6 text-[#7A2FF7]" />
            </div>
            <h3 className="font-poppins font-semibold text-[1.5rem] text-white mb-2 leading-[1.5]">
              Location
            </h3>
            <p className="font-inter text-base text-[rgba(255,255,255,0.7)] m-0">
              Sanjivani College of Engineering
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
