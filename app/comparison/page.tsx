"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Comparison() {
  const [selectedProgram, setSelectedProgram] = useState("Gastroenterology");

  const programs = [
    "Gastroenterology",
    "Critical Care",
    "Orthopedics (Arthroscopy)",
    "Reproductive Medicine",
    "Pain Management",
    "Emergency Medicine"
  ];

  const comparisonData = {
    "Gastroenterology": {
      medfellow: {
        duration: "12 months",
        handsOn: "200+ ERCP, 150+ Colonoscopies, 100+ EUS",
        facultyRatio: "1:3",
        certification: "MCI + International Board",
        placementRate: "98%",
        avgSalary: "₹42 LPA",
        fees: "₹7.5 Lakhs",
        emiAvailable: "Yes (Interest-free)",
        hospitals: "8 premier hospitals (AIIMS, Apollo, Fortis, Max)",
        research: "Publication support included",
        jobAssist: "Dedicated placement team",
        flexibility: "Full-time, Weekend, Hybrid tracks"
      },
      competitors: {
        duration: "6-18 months (varies)",
        handsOn: "50-100 procedures (limited)",
        facultyRatio: "1:8 to 1:15",
        certification: "Institution certificate only",
        placementRate: "60-75%",
        avgSalary: "₹28-35 LPA",
        fees: "₹6-12 Lakhs",
        emiAvailable: "No or limited",
        hospitals: "1-3 hospitals (restricted access)",
        research: "Not included",
        jobAssist: "Minimal or none",
        flexibility: "Full-time only"
      }
    },
    "Critical Care": {
      medfellow: {
        duration: "12 months",
        handsOn: "500+ ICU admissions, 50+ ECMO, 200+ ventilator",
        facultyRatio: "1:4",
        certification: "MCI + International Board",
        placementRate: "100%",
        avgSalary: "₹50 LPA",
        fees: "₹10 Lakhs",
        emiAvailable: "Yes (Interest-free)",
        hospitals: "8 premier hospitals with Level-3 ICUs",
        research: "Publication support included",
        jobAssist: "Dedicated placement team",
        flexibility: "Full-time, Weekend, Hybrid tracks"
      },
      competitors: {
        duration: "6-12 months",
        handsOn: "100-200 admissions (observation-heavy)",
        facultyRatio: "1:10 to 1:20",
        certification: "Institution certificate only",
        placementRate: "65-80%",
        avgSalary: "₹32-40 LPA",
        fees: "₹8-15 Lakhs",
        emiAvailable: "No or limited",
        hospitals: "2-4 hospitals",
        research: "Not included",
        jobAssist: "Minimal",
        flexibility: "Full-time only"
      }
    },
    "Orthopedics (Arthroscopy)": {
      medfellow: {
        duration: "12 months",
        handsOn: "150+ arthroscopies, 80+ joint replacements",
        facultyRatio: "1:3",
        certification: "MCI + International Board",
        placementRate: "95%",
        avgSalary: "₹38 LPA",
        fees: "₹8.5 Lakhs",
        emiAvailable: "Yes (Interest-free)",
        hospitals: "6 orthopedic specialty hospitals",
        research: "Publication support included",
        jobAssist: "Dedicated placement team",
        flexibility: "Full-time, Weekend tracks"
      },
      competitors: {
        duration: "6-18 months",
        handsOn: "30-80 procedures (assisting only)",
        facultyRatio: "1:12 to 1:18",
        certification: "Institution certificate only",
        placementRate: "55-70%",
        avgSalary: "₹25-32 LPA",
        fees: "₹7-14 Lakhs",
        emiAvailable: "Limited",
        hospitals: "1-2 hospitals",
        research: "Not included",
        jobAssist: "None",
        flexibility: "Full-time only"
      }
    },
    "Reproductive Medicine": {
      medfellow: {
        duration: "12 months",
        handsOn: "200+ IVF cycles, 150+ IUI, 100+ ICSI",
        facultyRatio: "1:3",
        certification: "MCI + International Board",
        placementRate: "97%",
        avgSalary: "₹45 LPA",
        fees: "₹9 Lakhs",
        emiAvailable: "Yes (Interest-free)",
        hospitals: "5 fertility centers (success rate >50%)",
        research: "Publication support included",
        jobAssist: "Dedicated placement team",
        flexibility: "Full-time, Hybrid tracks"
      },
      competitors: {
        duration: "6-12 months",
        handsOn: "50-100 cycles (observation-heavy)",
        facultyRatio: "1:10 to 1:15",
        certification: "Institution certificate only",
        placementRate: "60-75%",
        avgSalary: "₹30-38 LPA",
        fees: "₹7-13 Lakhs",
        emiAvailable: "No",
        hospitals: "1-3 centers",
        research: "Not included",
        jobAssist: "Minimal",
        flexibility: "Full-time only"
      }
    },
    "Pain Management": {
      medfellow: {
        duration: "12 months",
        handsOn: "300+ interventional procedures",
        facultyRatio: "1:4",
        certification: "MCI + International Board",
        placementRate: "92%",
        avgSalary: "₹40 LPA",
        fees: "₹8 Lakhs",
        emiAvailable: "Yes (Interest-free)",
        hospitals: "7 pain management centers",
        research: "Publication support included",
        jobAssist: "Dedicated placement team",
        flexibility: "Full-time, Weekend tracks"
      },
      competitors: {
        duration: "6-12 months",
        handsOn: "80-150 procedures",
        facultyRatio: "1:8 to 1:12",
        certification: "Institution certificate only",
        placementRate: "55-70%",
        avgSalary: "₹28-35 LPA",
        fees: "₹6-11 Lakhs",
        emiAvailable: "Limited",
        hospitals: "2-3 centers",
        research: "Not included",
        jobAssist: "None",
        flexibility: "Full-time only"
      }
    },
    "Emergency Medicine": {
      medfellow: {
        duration: "12 months",
        handsOn: "1000+ ER cases, trauma, resuscitation",
        facultyRatio: "1:4",
        certification: "MCI + International Board",
        placementRate: "96%",
        avgSalary: "₹36 LPA",
        fees: "₹7 Lakhs",
        emiAvailable: "Yes (Interest-free)",
        hospitals: "8 tertiary care hospitals",
        research: "Publication support included",
        jobAssist: "Dedicated placement team",
        flexibility: "Full-time, Weekend, Hybrid tracks"
      },
      competitors: {
        duration: "6-12 months",
        handsOn: "300-500 cases (limited procedures)",
        facultyRatio: "1:10 to 1:20",
        certification: "Institution certificate only",
        placementRate: "65-75%",
        avgSalary: "₹26-32 LPA",
        fees: "₹5-9 Lakhs",
        emiAvailable: "No",
        hospitals: "2-4 hospitals",
        research: "Not included",
        jobAssist: "Minimal",
        flexibility: "Full-time only"
      }
    }
  };

  const features = [
    { key: "duration", label: "Program Duration" },
    { key: "handsOn", label: "Hands-On Training" },
    { key: "facultyRatio", label: "Faculty-to-Student Ratio" },
    { key: "certification", label: "Certification" },
    { key: "placementRate", label: "Placement Rate" },
    { key: "avgSalary", label: "Average Post-Fellowship Salary" },
    { key: "fees", label: "Total Fees" },
    { key: "emiAvailable", label: "Interest-Free EMI" },
    { key: "hospitals", label: "Training Hospitals" },
    { key: "research", label: "Research & Publications" },
    { key: "jobAssist", label: "Job Placement Assistance" },
    { key: "flexibility", label: "Learning Tracks" }
  ];

  const data = comparisonData[selectedProgram as keyof typeof comparisonData];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="bg-linear-to-br from-primary to-primary-dark text-white py-16">
        <div className="container-custom">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur rounded-full mb-4">
            <span className="text-sm font-semibold">⚖️ HONEST COMPARISON</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Med Fellow Academy vs Competitors</h1>
          <p className="text-xl opacity-90 max-w-3xl">
            See the difference in training quality, outcomes, and value. Data-backed, transparent comparison across all parameters.
          </p>
        </div>
      </section>

      {/* Program Selector */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <h2 className="text-2xl font-heading font-bold text-primary mb-6 text-center">
            Select Fellowship Program to Compare
          </h2>
          
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {programs.map((program) => (
              <button
                key={program}
                onClick={() => setSelectedProgram(program)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  selectedProgram === program
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-white border-2 border-gray-200 text-text-secondary hover:border-primary'
                }`}
              >
                {program}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-3xl font-heading font-bold text-primary mb-8 text-center">
            {selectedProgram} Fellowship: Feature-by-Feature Comparison
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full card">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="p-4 text-left font-heading">Feature</th>
                  <th className="p-4 text-center font-heading bg-accent">
                    Med Fellow Academy
                  </th>
                  <th className="p-4 text-center font-heading">
                    Typical Competitors
                  </th>
                </tr>
              </thead>
              <tbody>
                {features.map((feature, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-background' : 'bg-white'}>
                    <td className="p-4 font-semibold text-primary border-b border-gray-200">
                      {feature.label}
                    </td>
                    <td className="p-4 text-center border-b border-gray-200 bg-accent/5">
                      <span className="text-primary font-semibold">
                        {data.medfellow[feature.key as keyof typeof data.medfellow]}
                      </span>
                    </td>
                    <td className="p-4 text-center border-b border-gray-200">
                      <span className="text-text-secondary">
                        {data.competitors[feature.key as keyof typeof data.competitors]}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Key Differentiators */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <h2 className="text-3xl font-heading font-bold text-primary mb-12 text-center">
            What Makes Us Different
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card p-8 text-center hover:shadow-xl transition-shadow">
              <div className="text-6xl mb-4">🎯</div>
              <h3 className="text-xl font-heading font-bold text-primary mb-3">
                3X More Hands-On Training
              </h3>
              <p className="text-text-secondary">
                We don&apos;t just show you procedures—you perform them. 200+ procedures per fellow vs 50-100 at competitors.
              </p>
            </div>

            <div className="card p-8 text-center hover:shadow-xl transition-shadow">
              <div className="text-6xl mb-4">👨‍⚕️</div>
              <h3 className="text-xl font-heading font-bold text-primary mb-3">
                1:3 Faculty Ratio
              </h3>
              <p className="text-text-secondary">
                Personalized attention guaranteed. Most programs have 1:10 to 1:20 ratios—you&apos;ll be lost in the crowd.
              </p>
            </div>

            <div className="card p-8 text-center hover:shadow-xl transition-shadow">
              <div className="text-6xl mb-4">📈</div>
              <h3 className="text-xl font-heading font-bold text-primary mb-3">
                156% Average Salary Increase
              </h3>
              <p className="text-text-secondary">
                Our fellows earn ₹42L average vs ₹28-35L at competitor programs. That&apos;s ₹7-14L more per year.
              </p>
            </div>

            <div className="card p-8 text-center hover:shadow-xl transition-shadow">
              <div className="text-6xl mb-4">🏥</div>
              <h3 className="text-xl font-heading font-bold text-primary mb-3">
                8 Premier Hospital Partners
              </h3>
              <p className="text-text-secondary">
                Rotate through AIIMS, Apollo, Fortis, Max, and more. Competitors usually have 1-3 hospitals with limited access.
              </p>
            </div>

            <div className="card p-8 text-center hover:shadow-xl transition-shadow">
              <div className="text-6xl mb-4">💰</div>
              <h3 className="text-xl font-heading font-bold text-primary mb-3">
                Interest-Free EMI
              </h3>
              <p className="text-text-secondary">
                Zero hidden costs. Pay in 12 installments at 0% interest. Most competitors don&apos;t offer this.
              </p>
            </div>

            <div className="card p-8 text-center hover:shadow-xl transition-shadow">
              <div className="text-6xl mb-4">📚</div>
              <h3 className="text-xl font-heading font-bold text-primary mb-3">
                Research & Publications Included
              </h3>
              <p className="text-text-secondary">
                85% of our fellows publish papers. Competitors don&apos;t even offer research support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Comparison */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-3xl font-heading font-bold text-primary mb-8 text-center">
            Return on Investment: The Real Math
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="card p-8 bg-linear-to-br from-accent/10 to-accent/5">
              <h3 className="text-2xl font-heading font-bold text-primary mb-6 text-center">
                Med Fellow Academy
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                  <span className="text-text-secondary">Investment (Fees)</span>
                  <span className="font-bold text-primary">₹7.5 Lakhs</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                  <span className="text-text-secondary">Post-Fellowship Salary</span>
                  <span className="font-bold text-secondary">₹42 LPA</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                  <span className="text-text-secondary">Annual Increase</span>
                  <span className="font-bold text-accent">₹25.5 Lakhs/year</span>
                </div>
                <div className="flex justify-between items-center pt-3">
                  <span className="text-text-secondary font-semibold">ROI Break-Even</span>
                  <span className="font-bold text-primary text-xl">3.5 Months</span>
                </div>
              </div>
            </div>

            <div className="card p-8 bg-gray-50">
              <h3 className="text-2xl font-heading font-bold text-text-secondary mb-6 text-center">
                Typical Competitor
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                  <span className="text-text-secondary">Investment (Fees)</span>
                  <span className="font-bold text-text-secondary">₹8-12 Lakhs</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                  <span className="text-text-secondary">Post-Fellowship Salary</span>
                  <span className="font-bold text-text-secondary">₹28-35 LPA</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                  <span className="text-text-secondary">Annual Increase</span>
                  <span className="font-bold text-text-secondary">₹11-18 Lakhs/year</span>
                </div>
                <div className="flex justify-between items-center pt-3">
                  <span className="text-text-secondary font-semibold">ROI Break-Even</span>
                  <span className="font-bold text-text-secondary text-xl">6-10 Months</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-lg text-primary font-semibold">
              Choose Med Fellow Academy and recover your investment 2X faster while earning ₹7-14 lakhs more per year
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="bg-linear-to-br from-primary to-primary-dark text-white rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              The Choice is Clear
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              More procedures, better outcomes, faster ROI. Join India&apos;s most effective fellowship program.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/apply" className="px-8 py-4 bg-accent text-white rounded-lg font-semibold hover:bg-accent/90 transition-all text-lg">
                Apply Now
              </a>
              <a href="/contact" className="px-8 py-4 bg-white text-primary rounded-lg font-semibold hover:bg-gray-100 transition-all text-lg">
                Schedule a Call
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
