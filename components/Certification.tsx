export default function Certification() {
  const accreditations = [
    { name: "Medical Council of India", abbr: "MCI" },
    { name: "National Board of Examinations", abbr: "NBE" },
    { name: "International Medical Council", abbr: "IMC" },
    { name: "World Health Organization", abbr: "WHO" }
  ];

  return (
    <section id="certification" className="section-padding bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-accent/20 to-accent/10 px-4 py-2 rounded-full mb-4">
            <span className="text-accent font-semibold text-sm">Certification</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
            Accredited & Recognized
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Our fellowship programs are accredited by leading medical bodies and recognized worldwide.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Main Certification Card */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
            <div className="bg-gradient-to-r from-accent to-accent-dark p-8 text-white text-center">
              <div className="text-6xl mb-4">🏆</div>
              <h3 className="text-3xl font-heading font-bold mb-2">
                Internationally Accredited Certification
              </h3>
              <p className="text-lg opacity-90">
                Premium certification included with every fellowship program
              </p>
            </div>
            
            <div className="p-8">
              <p className="text-lg text-text-secondary mb-8 text-center">
                Upon successful completion of your fellowship program, you will receive a certification that is:
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white text-xl mx-auto mb-4">✓</div>
                  <h4 className="font-heading font-bold text-primary mb-2">Globally Recognized</h4>
                  <p className="text-sm text-text-secondary">Accepted by medical institutions worldwide</p>
                </div>
                
                <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white text-xl mx-auto mb-4">✓</div>
                  <h4 className="font-heading font-bold text-primary mb-2">Industry Validated</h4>
                  <p className="text-sm text-text-secondary">Endorsed by top medical professionals</p>
                </div>
                
                <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white text-xl mx-auto mb-4">✓</div>
                  <h4 className="font-heading font-bold text-primary mb-2">Career Enhancing</h4>
                  <p className="text-sm text-text-secondary">Opens doors to advanced opportunities</p>
                </div>
              </div>

              {/* Accrediting Bodies */}
              <div className="border-t border-gray-100 pt-8">
                <h4 className="text-center text-sm font-semibold text-text-tertiary mb-6">ACCREDITED BY</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {accreditations.map((org, index) => (
                    <div key={index} className="bg-background rounded-lg p-4 text-center">
                      <div className="font-heading font-bold text-primary text-lg mb-1">{org.abbr}</div>
                      <p className="text-xs text-text-secondary">{org.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 border-l-4 border-secondary">
              <h4 className="font-heading font-bold text-primary mb-2 flex items-center gap-2">
                <span>📄</span> Digital & Physical Certificate
              </h4>
              <p className="text-sm text-text-secondary">Receive both digital and printed versions of your certification</p>
            </div>
            <div className="bg-white rounded-xl p-6 border-l-4 border-accent">
              <h4 className="font-heading font-bold text-primary mb-2 flex items-center gap-2">
                <span>🔐</span> Blockchain Verified
              </h4>
              <p className="text-sm text-text-secondary">Secure verification through blockchain technology</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
