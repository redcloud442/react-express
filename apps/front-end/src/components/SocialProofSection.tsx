import { testimonials } from "@/lib/constant";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

const SocialProofSection = () => {
  return (
    <section className="relative py-24">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Real Results From Real Clients
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            These entrepreneurs followed the exact same system you're about to receive
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: index * 0.3, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="group relative">
                <CardContent className="flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <motion.span
                          key={`star-${testimonial.id}-${i}`}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.3 * i, type: "spring", stiffness: 150 }}
                        >
                          <Star className="h-5 w-5 text-yellow-400 fill-current" />
                        </motion.span>
                      ))}
                    </div>

                    <CardHeader className="p-0">
                      <CardTitle className="flex items-center">{testimonial.name}</CardTitle>
                      <CardDescription>{testimonial.company}</CardDescription>
                    </CardHeader>

                    <div className="text-2xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent mb-4">
                      {testimonial.result}
                    </div>

                    <blockquote className="text-gray-600 dark:text-gray-300 mb-6 italic">
                      "{testimonial.quote}"
                    </blockquote>
                  </div>

                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full flex items-center justify-center font-bold text-white text-sm mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</div>
                      <div className="text-gray-500 dark:text-gray-400 text-sm">{testimonial.company}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
