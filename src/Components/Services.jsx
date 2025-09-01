import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import OrderPopup from "./Form-Order";

const services = [
  {
    title: "Commission Artwork",
    excerpt:
      "Capture your likeness or that of a loved one with a detailed pencil or charcoal portrait, drawn with precision and emotion.",
    image: "https://via.placeholder.com/400x400",
    type: "commission",
  },
  {
    title: "Art Classes & Tutorials",
    excerpt:
      "Learn the art of shading, sketching, and charcoal drawing through engaging lessons tailored for beginners and enthusiasts.",
    image: "https://via.placeholder.com/400x400",
    type: "learning",
  },
];

// Container for stagger effect
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15, // small delay between cards
    },
  },
};

// Card fade-in animation
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, type: "spring", stiffness: 80, damping: 12 },
  },
};

export default function Services() {
  return (
    <section
      className="mx-auto bg-white text-[#59554d] py-16 px-4 sm:px-6 lg:px-8"
      id="Services"
    >
      <motion.div
        className="mx-auto md:bg-[#f5f5f059] backdrop-blur-md md:py-16 md:px-16 rounded-md grid md:grid-cols-2 lg:grid-cols-2 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.5 }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-sm shadow-lg text-[#735c40] overflow-hidden transition-transform transform duration-300 hover:shadow-xl"
            variants={cardVariants}
          >
            {/* Image */}
            <img
              src={service.image}
              alt={service.title}
              className="h-48 w-full object-cover"
              loading="lazy"
            />

            {/* Text content */}
            <div className="p-6">
              <h3 className="text-md font-semibold">{service.title}</h3>
              <p className="mt-2 text-sm">{service.excerpt}</p>

              <div className="mt-4 flex items-center gap-2 text-sm text-[#b18e63] font-medium">
                {service.type === "commission" ? (
                  <OrderPopup
                    triggerText={
                      <span className="flex items-center space-x-2 cursor-pointer transition-all hover:text-[#735c40]">
                        <span>Commission Your Artwork</span>
                        <ArrowLongRightIcon className="h-5 w-5" />
                      </span>
                    }
                    title={`Commission: ${service.title}`}
                    description="Fill out the form below to commission your custom artwork."
                  />
                ) : (
                  <Link
                    to="/classes"
                    className="flex items-center gap-2 transition-all hover:text-[#735c40]"
                  >
                    <span>Start Learning</span>
                    <ArrowLongRightIcon className="h-5 w-5" />
                  </Link>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
