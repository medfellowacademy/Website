'use client';
import { Award, Globe, Building2, Shield } from 'lucide-react';

export default function Certification() {
  return (
    <section className="py-10" style={{ background: '#EAF2FB' }}>
      <div className="max-w-7xl mx-auto px-8">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-medium mb-2" style={{ color: '#1B4F72' }}>
            Internationally Accredited Certification
          </h2>
          <p className="text-xs" style={{ color: '#5D6D7E' }}>
            Recognized by leading medical bodies worldwide
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { Icon: Globe, title: 'Global Recognition', desc: 'Accepted by hospitals and institutions worldwide' },
            { Icon: Building2, title: 'Hospital Validated', desc: 'Recognized by premier hospital networks' },
            { Icon: Shield, title: 'Career Advancement', desc: 'Opens doors to specialist positions' },
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-lg p-5 text-center" style={{ border: '0.5px solid #BFC9CA' }}>
              <div 
                className="w-10 h-10 rounded-md mx-auto mb-3 flex items-center justify-center"
                style={{ background: '#1B4F72' }}
              >
                <item.Icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xs font-medium mb-1" style={{ color: '#1B4F72' }}>
                {item.title}
              </h3>
              <p className="text-xs" style={{ color: '#5D6D7E', lineHeight: 1.6 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
