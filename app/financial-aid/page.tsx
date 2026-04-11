"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function FinancialAid() {
  const [loanAmount, setLoanAmount] = useState(800000);
  const [currentIncome, setCurrentIncome] = useState(80000);

  const calculateEMI = (principal: number, months: number) => {
    const rate = 0.12 / 12; // 12% annual
    const emi = principal * rate * Math.pow(1 + rate, months) / (Math.pow(1 + rate, months) - 1);
    return Math.round(emi);
  };

  const calculateROI = () => {
    const postFellowshipIncome = currentIncome * 3; // 3X increase
    const totalCost = loanAmount;
    const annualIncrease = (postFellowshipIncome - currentIncome) * 12;
    const monthsToBreakeven = Math.ceil(totalCost / (postFellowshipIncome - currentIncome));
    return { postFellowshipIncome, annualIncrease, monthsToBreakeven };
  };

  const roi = calculateROI();

  const scholarships = [
    {
      name: "Merit-Based Excellence Scholarship",
      amount: "Up to 30% tuition waiver",
      criteria: "Academic excellence, prior publications, entrance exam score >85%",
      deadline: "Feb 15, 2026"
    },
    {
      name: "Women in Medicine Scholarship",
      amount: "₹2,00,000",
      criteria: "Female doctors, preference for underserved specialties",
      deadline: "Feb 20, 2026"
    },
    {
      name: "Rural Healthcare Impact Scholarship",
      amount: "₹1,50,000",
      criteria: "Commitment to practice in rural areas for 2 years post-fellowship",
      deadline: "Feb 25, 2026"
    },
    {
      name: "Need-Based Financial Aid",
      amount: "₹1,00,000 - ₹3,00,000",
      criteria: "Income proof, family circumstances, academic merit",
      deadline: "Rolling basis"
    }
  ];

  const bankPartners = [
    { name: "HDFC Bank", interest: "10.5% p.a.", tenure: "Up to 7 years", processing: "0.5%" },
    { name: "ICICI Bank", interest: "11% p.a.", tenure: "Up to 5 years", processing: "1%" },
    { name: "Axis Bank", interest: "10.75% p.a.", tenure: "Up to 6 years", processing: "0.75%" },
    { name: "SBI", interest: "10% p.a.", tenure: "Up to 7 years", processing: "1%" }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="bg-linear-to-br from-primary to-primary-dark text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Financial Aid & Support</h1>
          <p className="text-xl opacity-90 max-w-3xl">
            Don&apos;t let finances hold you back. Explore scholarships, EMI options, and see your investment ROI.
          </p>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <h2 className="text-3xl font-heading font-bold text-primary mb-3">Fellowship ROI Calculator</h2>
          <p className="text-lg text-text-secondary mb-8">
            Calculate your return on investment and see when you&apos;ll break even
          </p>

          <div className="card p-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Input Section */}
              <div>
                <div className="mb-8">
                  <label className="block text-sm font-semibold text-primary mb-3">
                    Current Monthly Income: ₹{currentIncome.toLocaleString()}
                  </label>
                  <input
                    type="range"
                    min="30000"
                    max="300000"
                    step="10000"
                    value={currentIncome}
                    onChange={(e) => setCurrentIncome(parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-text-secondary mt-2">
                    <span>₹30K</span>
                    <span>₹3L</span>
                  </div>
                </div>

                <div className="mb-8">
                  <label className="block text-sm font-semibold text-primary mb-3">
                    Fellowship Cost: ₹{loanAmount.toLocaleString()}
                  </label>
                  <input
                    type="range"
                    min="500000"
                    max="1000000"
                    step="50000"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-text-secondary mt-2">
                    <span>₹5L</span>
                    <span>₹10L</span>
                  </div>
                </div>
              </div>

              {/* Results Section */}
              <div>
                <div className="bg-linear-to-br from-accent/10 to-secondary/10 rounded-xl p-6 mb-6">
                  <h3 className="text-2xl font-heading font-bold text-primary mb-6">Your Projection</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                      <span className="text-text-secondary">Current Income (Monthly)</span>
                      <span className="text-xl font-bold text-primary">₹{currentIncome.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                      <span className="text-text-secondary">Post-Fellowship Income</span>
                      <span className="text-xl font-bold text-accent">₹{roi.postFellowshipIncome.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                      <span className="text-text-secondary">Annual Income Increase</span>
                      <span className="text-xl font-bold text-secondary">₹{roi.annualIncrease.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center pt-3">
                      <span className="text-text-secondary">Break-even Timeline</span>
                      <span className="text-2xl font-bold text-primary">{roi.monthsToBreakeven} months</span>
                    </div>
                  </div>
                </div>

                <div className="bg-primary text-white rounded-xl p-6">
                  <h4 className="font-bold mb-2">💡 Investment Summary</h4>
                  <p className="text-sm opacity-90">
                    With a {loanAmount.toLocaleString()} fellowship investment, you&apos;ll increase your income by 3X 
                    and recover your investment in just {roi.monthsToBreakeven} months. That&apos;s a 
                    {Math.round((roi.annualIncrease / loanAmount) * 100)}% return in the first year!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Options */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-3xl font-heading font-bold text-primary mb-8">Flexible Payment Options</h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="card p-6">
              <div className="text-4xl mb-4">📅</div>
              <h3 className="text-xl font-heading font-bold text-primary mb-3">Interest-Free EMI</h3>
              <p className="text-text-secondary mb-4">
                Pay in 6-12 monthly installments with zero interest. No hidden charges.
              </p>
              <div className="bg-background p-4 rounded-lg">
                <div className="text-sm text-text-secondary mb-1">Example for ₹8,50,000</div>
                <div className="text-2xl font-bold text-accent">₹70,833/month</div>
                <div className="text-xs text-text-secondary">for 12 months</div>
              </div>
            </div>

            <div className="card p-6">
              <div className="text-4xl mb-4">💳</div>
              <h3 className="text-xl font-heading font-bold text-primary mb-3">Credit Card Payment</h3>
              <p className="text-text-secondary mb-4">
                Pay via credit card and use your bank&apos;s EMI conversion option.
              </p>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li className="flex items-center gap-2">
                  <span className="text-secondary">✓</span>
                  <span>All major cards accepted</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-secondary">✓</span>
                  <span>Instant confirmation</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-secondary">✓</span>
                  <span>Earn reward points</span>
                </li>
              </ul>
            </div>

            <div className="card p-6">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-heading font-bold text-primary mb-3">One-Time Payment</h3>
              <p className="text-text-secondary mb-4">
                Pay the full amount upfront and get special early bird discounts.
              </p>
              <div className="bg-accent/10 border border-accent/30 rounded-lg p-4">
                <div className="text-sm text-primary mb-1">Early Bird Discount</div>
                <div className="text-2xl font-bold text-accent">10% OFF</div>
                <div className="text-xs text-text-secondary">if paid 2 months before</div>
              </div>
            </div>
          </div>

          {/* EMI Calculator */}
          <div className="card p-8">
            <h3 className="text-2xl font-heading font-bold text-primary mb-6">Bank EMI Calculator</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-background rounded-lg">
                <div className="text-sm text-text-secondary mb-2">6 Months</div>
                <div className="text-2xl font-bold text-primary">₹{calculateEMI(loanAmount, 6).toLocaleString()}</div>
                <div className="text-xs text-text-secondary">per month</div>
              </div>
              <div className="text-center p-4 bg-background rounded-lg">
                <div className="text-sm text-text-secondary mb-2">12 Months</div>
                <div className="text-2xl font-bold text-primary">₹{calculateEMI(loanAmount, 12).toLocaleString()}</div>
                <div className="text-xs text-text-secondary">per month</div>
              </div>
              <div className="text-center p-4 bg-background rounded-lg">
                <div className="text-sm text-text-secondary mb-2">24 Months</div>
                <div className="text-2xl font-bold text-primary">₹{calculateEMI(loanAmount, 24).toLocaleString()}</div>
                <div className="text-xs text-text-secondary">per month</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bank Partners */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <h2 className="text-3xl font-heading font-bold text-primary mb-3">Partner Banks for Education Loans</h2>
          <p className="text-lg text-text-secondary mb-8">
            Get up to 80% financing from our partner banks with competitive interest rates
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {bankPartners.map((bank, index) => (
              <div key={index} className="card p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-heading font-bold text-primary">{bank.name}</h3>
                  <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-bold">
                    Partner Bank
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-sm text-text-secondary mb-1">Interest Rate</div>
                    <div className="font-bold text-accent">{bank.interest}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-text-secondary mb-1">Max Tenure</div>
                    <div className="font-bold text-primary">{bank.tenure}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-text-secondary mb-1">Processing</div>
                    <div className="font-bold text-primary">{bank.processing}</div>
                  </div>
                </div>
                <button className="w-full px-6 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-white transition-all">
                  Apply for Loan
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scholarships */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-3xl font-heading font-bold text-primary mb-3">Available Scholarships</h2>
          <p className="text-lg text-text-secondary mb-8">
            We offer multiple scholarship opportunities based on merit and need
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {scholarships.map((scholarship, index) => (
              <div key={index} className="card p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-heading font-bold text-primary flex-1">{scholarship.name}</h3>
                  <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-bold whitespace-nowrap ml-3">
                    {scholarship.amount}
                  </span>
                </div>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-primary mb-2">Eligibility Criteria:</h4>
                  <p className="text-sm text-text-secondary">{scholarship.criteria}</p>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <span className="text-sm text-text-secondary">
                    📅 Deadline: <span className="font-semibold text-primary">{scholarship.deadline}</span>
                  </span>
                  <button className="px-6 py-2 bg-primary text-white rounded-lg text-sm font-semibold hover:bg-accent transition-all">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tax Benefits */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="card p-8 md:p-12">
            <h2 className="text-3xl font-heading font-bold text-primary mb-6">Tax Benefits on Fellowship Fees</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-heading font-bold text-primary mb-4">Section 80C Benefits</h3>
                <ul className="space-y-3 text-text-secondary">
                  <li className="flex items-start gap-2">
                    <span className="text-secondary text-xl">✓</span>
                    <span>Fellowship fees qualify for deduction up to ₹1.5 lakhs under Section 80C</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary text-xl">✓</span>
                    <span>Education loan interest deductible under Section 80E (no upper limit)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary text-xl">✓</span>
                    <span>Can claim deduction for up to 8 years from loan disbursement</span>
                  </li>
                </ul>
              </div>
              <div className="bg-linear-to-br from-accent/10 to-secondary/10 rounded-xl p-6">
                <h4 className="font-bold text-primary mb-4">Example Tax Savings</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Fellowship Fee</span>
                    <span className="font-bold text-primary">₹8,50,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-secondary">80C Deduction</span>
                    <span className="font-bold text-accent">₹1,50,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Annual Interest</span>
                    <span className="font-bold text-accent">₹85,000</span>
                  </div>
                  <div className="flex justify-between pt-3 border-t border-gray-300">
                    <span className="text-primary font-semibold">Total Tax Saving (30%)</span>
                    <span className="font-bold text-secondary text-xl">₹70,500</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="bg-linear-to-br from-primary to-primary-dark text-white rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Need Help with Financial Planning?
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Speak with our financial counselors to explore the best payment options and scholarships for your situation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="px-8 py-4 bg-accent text-white rounded-lg font-semibold hover:bg-accent/90 transition-all text-lg">
                Schedule Consultation
              </a>
              <a href="/apply" className="px-8 py-4 bg-white text-primary rounded-lg font-semibold hover:bg-gray-100 transition-all text-lg">
                Apply for Fellowship
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
