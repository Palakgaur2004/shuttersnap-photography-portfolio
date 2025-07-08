// components/Testimonials.js
export default function Testimonials() {
  const testimonials = [
    {
      name: "Aarav Mehta",
      feedback:
        "ShutterSnap made our wedding day unforgettable! Every emotion, every detail — perfectly captured. Highly recommended!",
      image: "/images/client1.jpeg",
    },
    {
      name: "Riya Kapoor",
      feedback:
        "The team is incredibly professional and creative. Loved my portfolio shoot — every photo was stunning!",
      image: "/images/client2.jpeg",
    },
    {
      name: "Kunal Sharma",
      feedback:
        "Fast delivery, friendly crew, and premium quality edits. Will definitely book again for future events.",
      image: "/images/client3.jpeg",
    },
  ];

  return (
    <section style={{ padding: "4rem 2rem", backgroundColor: "#fff" }}>
      <h2
        style={{
          textAlign: "center",
          fontSize: "2rem",
          marginBottom: "2rem",
          color: "#222",
        }}
      >
        What Our Clients Say 💬
      </h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "2rem",
        }}
      >
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#f5f5f5",
              padding: "2rem",
              borderRadius: "12px",
              maxWidth: "350px",
              flex: "1 1 300px",
              boxShadow: "0 6px 20px rgba(0,0,0,0.2)",
              textAlign: "center",
              transition: "transform 0.3s",
            }}
            
          >
            {/* Profile Image */}
            <img
              src={testimonial.image}
              alt={testimonial.name}
              style={{
                width: "300px",
                height: "200px",
                borderRadius: "5px", // ✅ square with slightly rounded corners
                objectFit: "cover",
                marginBottom: "1rem",
                boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
              }}
            />

            {/* Feedback */}
            <p
              style={{
                fontStyle: "italic",
                color: "#555",
                fontSize: "1rem",
                marginBottom: "1.2rem",
                lineHeight: "1.5",
              }}
            >
              “{testimonial.feedback}”
            </p>

            {/* Client Name */}
            <p
              style={{
                fontWeight: "600",
                fontSize: "1rem",
                color: "#222",
              }}
            >
              — {testimonial.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
