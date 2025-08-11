import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaCheckCircle } from "react-icons/fa";
import profilePhoto from "../public/sriharsha_photo_optimized.jpg";

export default function App() {
  const fadeInUp = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div className="font-sans text-gray-800">
      {/* Hero */}
      <section className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white min-h-screen flex flex-col justify-center items-center text-center px-4">
        <motion.img src={profilePhoto} alt="Sriharsha Varma Dandu" className="w-40 h-40 rounded-full shadow-lg mb-6 border-4 border-white" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} />
        <motion.h1 className="text-4xl md:text-6xl font-bold mb-4" variants={fadeInUp} initial="hidden" animate="visible" transition={{ delay: 0.2 }}>Sriharsha Varma Dandu</motion.h1>
        <motion.p className="text-lg md:text-xl max-w-3xl" variants={fadeInUp} initial="hidden" animate="visible" transition={{ delay: 0.4 }}>
          SAP Program & AMS Delivery Leader | S/4HANA Transformation Expert | Account Management Specialist | Strategic IT Partner | Generative AI Mastermind
        </motion.p>
      </section>

      {/* About */}
      <section id="about" className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start"><FaCheckCircle className="text-indigo-500 mt-1 mr-2" />Led S/4HANA Technical Migration for Axfood AB (Go-Live Q4 2025)</li>
              <li className="flex items-start"><FaCheckCircle className="text-indigo-500 mt-1 mr-2" />Generated over USD 12M revenue for Yash Technologies AB (2018–2025)</li>
              <li className="flex items-start"><FaCheckCircle className="text-indigo-500 mt-1 mr-2" />Signed multiple major agreements in Sweden (2024)</li>
              <li className="flex items-start"><FaCheckCircle className="text-indigo-500 mt-1 mr-2" />Grew Yash Team from 1 to 80+ consultants at Sandvik</li>
            </ul>
            <p className="mb-4">As a seasoned SAP and IT transformation leader, I specialize in delivering complex enterprise solutions that drive business value. My expertise spans across S/4HANA migrations, landscape architecture, and strategic IT program management.</p>
            <p>I’m passionate about leveraging SAP Activate, Agile practices, AI Models, and cloud-first strategies to modernize enterprise systems.</p>
          </motion.div>
          <motion.img src={profilePhoto} alt="Sriharsha Varma Dandu" className="rounded-2xl shadow-lg" initial={{ x: 50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }} />
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Expertise</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {['SAP Technologies','Project Management & Delivery','Cloud & Infrastructure','Leadership & Management'].map((cat, idx) => (
              <motion.div key={idx} className="bg-white rounded-xl shadow-md p-6" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <h3 className="text-indigo-600 font-semibold mb-4">{cat}</h3>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>S/4HANA</li>
                  <li>ECC to S/4HANA Conversions</li>
                  <li>Agile/Scrum</li>
                  <li>Cloud Architecture</li>
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Key SAP Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {["S/4HANA Conversion & Migration - Axfood AB","S/4HANA Implementation - Sandvik","SAP Carve-Out & Conversion - Sandvik","SAP Greenfield Implementations"].map((title, idx) => (
              <motion.div key={idx} className="rounded-xl shadow-lg overflow-hidden" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-4 font-semibold">{title}</div>
                <div className="p-4 text-gray-700 text-sm">
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Leading ECC to S/4HANA Migration with Go-Live scheduled for Q4 2025</li>
                    <li>Implementing SAP Activate - Agile Project Management methodologies</li>
                    <li>Managing governance over System Integrator's technical execution</li>
                    <li>Partnering with SNP for data migration integrity and validation</li>
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-16 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Professional Journey</h2>
          {["Manager - Client Services (2021–Present)","Lead SAP Consultant (2016–2021)","SAP Basis Administrator (2014–2015)","Team Lead - UNISYS (2012–2014)"].map((role, idx) => (
            <motion.div key={idx} className="bg-white rounded-xl shadow-md p-6 mb-4" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <h3 className="font-semibold text-lg text-indigo-600">{role}</h3>
              <p className="text-sm text-gray-600 mt-2">Description of role, achievements, and responsibilities. Detailed content can be updated as needed.</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Recommendations */}
      <section id="recommendations" className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Client Recommendations</h2>
          {["Torbjörn Bäckström","Kristina Jonsson Ädel","Jan Sorlien","Katja Scheu"].map((name, idx) => (
            <motion.div key={idx} className="bg-gray-50 rounded-xl shadow-md p-6 mb-4" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <p className="italic text-gray-700 mb-2">Testimonial text from {name}...</p>
              <p className="text-indigo-600 font-semibold">{name}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 px-6 bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Let's Connect</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div><FaEnvelope className="text-3xl mb-2 mx-auto" /><a href="mailto:dandusriharshavarma@gmail.com">dandusriharshavarma@gmail.com</a></div>
            <div><FaPhone className="text-3xl mb-2 mx-auto" /><p>+46 790777746</p></div>
            <div><FaMapMarkerAlt className="text-3xl mb-2 mx-auto" /><p>Sweden</p></div>
            <div><FaLinkedin className="text-3xl mb-2 mx-auto" /><a href="https://www.linkedin.com/in/sriharsha-varma-dandu-4a4787135/">LinkedIn</a></div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-gray-900 text-white text-center">
        <p>&copy; 2025 Sriharsha Varma Dandu. All rights reserved.</p>
        <p className="text-sm mt-1 opacity-75">SAP & IT Transformation Leader | 13+ Years of Excellence</p>
      </footer>
    </div>
  );
}
