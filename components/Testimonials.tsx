export default function Testimonials() {
  const testimonials = [
    {
      name: "Dr. Amit Patel",
      role: "Emergency Medicine Fellow → ER Department Head",
      text: "I went from earning ₹80,000/month as a general practitioner to ₹3.2 lakhs/month as an ER specialist in just 14 months. The fellowship didn't just teach me skills—it repositioned my entire career trajectory.",
    },
    {
      name: "Dr. Sneha Verma",
      role: "Critical Care Fellow → ICU Consultant",
      text: "Before the fellowship, I was stuck in a career plateau with limited growth. Now I'm a sought-after ICU consultant with multiple hospital partnerships and my own critical care practice.",
    },
    {
      name: "Dr. Rajan Nair",
      role: "Gastroenterology Fellow → Senior Consultant",
      text: "The hands-on training and mentorship at Med Fellow Academy was unlike anything I experienced during my postgraduate degree. Within 6 months of completing the fellowship I had two hospital offers.",
    },
    {
      name: "Dr. Pooja Reddy",
      role: "Reproductive Medicine Fellow → IVF Specialist",
      text: "The faculty genuinely cares about your growth. The curriculum is practical, structured, and immediately applicable to real patient cases. I feel far more confident in my specialty now.",
    },
    {
      name: "Dr. Suresh Menon",
      role: "Diabetology Fellow → Consultant Diabetologist",
      text: "What sets this program apart is the quality of clinical exposure. I handled more cases in 12 months than I did in years of regular practice. Highly recommended for any doctor serious about specializing.",
    },
    {
      name: "Dr. Kavita Singh",
      role: "Pain Management Fellow → Pain Clinic Director",
      text: "From day one the program was focused and purpose-driven. The support from mentors even after completing the fellowship has been invaluable in setting up my own practice.",
    },
  ];

  return (
    <section id="testimonials" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-heading font-bold text-primary mb-3 md:mb-4">
            What Our Fellows Say
          </h2>
          <p className="text-base md:text-lg text-text-secondary max-w-2xl mx-auto">
            Hear from doctors who have completed our fellowship programs and transformed their careers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card p-6 flex flex-col">
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((s) => (
                  <span key={s} className="text-accent text-lg">★</span>
                ))}
              </div>
              <p className="text-text-primary leading-relaxed flex-1 mb-6">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <div className="border-t border-gray-100 pt-4">
                <p className="font-heading font-semibold text-primary">{testimonial.name}</p>
                <p className="text-sm text-secondary mt-0.5">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
