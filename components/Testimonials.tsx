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
        <div className="text-center mb-12">
          <h2 className="text-4xl font-heading font-bold text-primary mb-4">
            What Our Fellows Say
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Hear from doctors who have advanced their careers through our fellowship programs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card p-8">
              <p className="text-lg text-text-primary mb-6 leading-relaxed">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <div>
                <h4 className="font-heading font-semibold text-primary">
                  {testimonial.name}
                </h4>
                <p className="text-sm text-secondary">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
