'use client';
import { Award, Users, TrendingUp, Clock } from 'lucide-react';

const STATS = [
  { icon: TrendingUp, value: '156%', label: 'Average Income Increase' },
  { icon: Users, value: '500+', label: 'Careers Transformed' },
  { icon: Award, value: '98%', label: 'Placement Success' },
  { icon: Clock, value: '12mo', label: 'Program Duration' },
];

export default function WhyMedFellow() {
  return (
    <section className="py-10" style={{ background: '#F2F3F4' }}>
      <div className="max-w-7xl mx-auto px-8">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-medium mb-2" style={{ color: '#1B4F72' }}>
            Why MedFellow Academy?
          </h2>
          <p className="text-xs" style={{ color: '#5D6D7E' }}>
            Trusted by practicing doctors nationwide for career advancement
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {STATS.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div key={i} className="bg-white rounded-lg p-4 text-center" style={{ border: '0.5px solid #BFC9CA' }}>
                <Icon className="w-5 h-5 mx-auto mb-2" style={{ color: '#2E86C1' }} />
                <div className="text-xl font-medium mb-1" style={{ color: '#1B4F72' }}>
                  {stat.value}
                </div>
                <div className="text-xs" style={{ color: '#5D6D7E' }}>
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
