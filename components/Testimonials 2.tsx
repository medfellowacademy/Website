import Link from "next/link";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Dr. Amit Patel",
      role: "Emergency Medicine Fellow",
      text: "The fellowship program transformed my approach to emergency care. The exposure to high-volume trauma cases and mentorship from leading experts has been invaluable."
    },
    {
      name: "Dr. Sneha Verma",
      role: "Critical Care Fellow",
      text: "Med Fellow Academy provided exactly what I needed—structured learning, hands-on clinical exposure, and internationally recognized certification."
    }
  ];

  return (
    <section id="testimonials" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-block bg-linear-to-r from-primary/10 to-secondary/10 px-4 py-2 rounded-full mb-4">
            <span className="text-primary font-semibold text-sm">Success Stories</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
            What Our Fellows Say
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Hear from doctors who have advanced their careers through our fellowship programs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-linear-to-br from-background to-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all">
              {/* Quote Icon */}
              <div className="w-12 h-12 bg-linear-to-br from-secondary to-primary rounded-lg flex items-center justify-center text-white text-2xl mb-4">
                “
              </div>
              
              {/* Quote Text */}
              <div className="mb-6">
                <p className="text-text-primary leading-relaxed">
                  {testimonial.text}
                </p>
              </div>

              {/* Author Details */}
              <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                <div className="shrink-0 w-14 h-14 bg-linear-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-heading text-lg">
                  {testimonial.name.split(' ')[1][0]}
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-primary">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-secondary font-medium">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-text-secondary mb-4">Join 500+ doctors who have transformed their careers</p>
          <Link href="/apply" className="btn-primary px-8 py-3">
            Start Your Journey
          </Link>
        </div>
      </div>
    </section>
  );
}
