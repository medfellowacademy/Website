'use client';
import { Award, CheckCircle, Globe, Building2, TrendingUp, Shield } from 'lucide-react';

export default function Certification() {

  return (
    <section id="certification" className="section-padding bg-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-64 h-64 bg-accent rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-secondary rounded-full filter blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2 glass-card rounded-full mb-6">
            <Shield className="w-4 h-4 text-accent" />
            <span className="text-accent font-semibold text-sm">ACCREDITATION & CERTIFICATION</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-primary mb-6">
            Globally <span className="gradient-text">Recognized Certification</span>
          </h2>
          <p className="text-lg lg:text-xl text-text-secondary max-w-3xl mx-auto">
            Our fellowship programs are accredited by leading medical bodies and recognized worldwide.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Main Certification Card */}
          <div className="card overflow-hidden mb-12 hover-lift">
            <div className="bg-linear-to-r from-accent via-yellow-500 to-accent p-10 text-white text-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0" style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                  backgroundSize: '30px 30px'
                }}></div>
              </div>
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur rounded-full mb-6">
                  <Award className="w-12 h-12" />
                </div>
                <h3 className="text-3xl lg:text-4xl font-heading font-bold mb-3">
                  Internationally Accredited Certification
                </h3>
                <p className="text-lg lg:text-xl opacity-95">
                  Premium certification included with every fellowship program
                </p>
              </div>
            </div>
            
            <div className="p-8 lg:p-10">
              <p className="text-lg text-text-secondary mb-8 text-center">
                Upon successful completion of your fellowship program, you will receive a certification that is:
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="glass-card rounded-2xl p-6 text-center hover-lift">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-linear-to-br from-blue-500 to-cyan-500 rounded-2xl text-white mb-4">
                    <Globe className="w-8 h-8" />
                  </div>
                  <h4 className="font-heading font-bold text-primary mb-2 text-lg">Globally Recognized</h4>
                  <p className="text-sm text-text-secondary">Accepted by medical institutions worldwide</p>
                </div>
                
                <div className="glass-card rounded-2xl p-6 text-center hover-lift">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-linear-to-br from-purple-500 to-pink-500 rounded-2xl text-white mb-4">
                    <Building2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-heading font-bold text-primary mb-2 text-lg">Industry Validated</h4>
                  <p className="text-sm text-text-secondary">Endorsed by top medical professionals</p>
                </div>
                
                <div className="glass-card rounded-2xl p-6 text-center hover-lift">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-linear-to-br from-green-500 to-emerald-500 rounded-2xl text-white mb-4">
                    <TrendingUp className="w-8 h-8" />
                  </div>
                  <h4 className="font-heading font-bold text-primary mb-2 text-lg">Career Enhancing</h4>
                  <p className="text-sm text-text-secondary">Opens doors to advanced opportunities</p>
                </div>
              </div>


            </div>
          </div>


        </div>
      </div>
    </section>
  );
}
