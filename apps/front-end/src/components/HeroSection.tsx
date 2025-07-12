import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { stats } from "@/lib/constant";
import { cardVariants } from "@/lib/framer";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const HeroSection = () => {
  const handleRedirectToContactUs = () => {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      id="hero-section"
      className="relative flex items-center justify-center min-h-screen overflow-hidden bg-gradient-to-br from-violet-50 via-white to-indigo-50 "
    >
      <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-700/25 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]" />

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 rounded-full blur-3xl animate-pulse bg-violet-400/20" />
        <div className="absolute top-20 right-20 w-96 h-96 rounded-full blur-3xl animate-pulse bg-indigo-400/20" />
        <div className="absolute bottom-20 left-1/3 w-64 h-64 rounded-full blur-3xl animate-pulse bg-pink-400/20" />
      </div>

      <div className="relative max-w-6xl w-full px-6 text-center pt-16 pb-24">
        <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
          <Badge
            variant="secondary"
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 animate-pulse bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg rounded-full"
          >
            <Sparkles className="w-4 h-4" />
            LIMITED TIME: 50% OFF ENDS IN 24 HOURS
            <Sparkles className="w-4 h-4" />
          </Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-transparent"
        >
          Build Your
          <span className="block bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            $100M Business
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-xl md:text-2xl font-medium text-gray-600 dark:text-gray-300 mb-6 max-w-4xl mx-auto"
        >
          The complete system used to build multiple 8-figure companies
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-lg text-gray-500 dark:text-gray-400 mb-12 max-w-3xl mx-auto"
        >
          Even if you're starting from zero, have no experience, or have tried everything before
        </motion.p>

        <div className="flex justify-center gap-4 mb-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleRedirectToContactUs}
            className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-6 py-3 rounded-full shadow-lg hover:brightness-110 transition"
          >
            Contact Us
          </motion.button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 z-50">
          {stats.map(({ number, label, icon: Icon }, index) => (
            <motion.div key={label} custom={index} initial="hidden" animate="visible" variants={cardVariants}>
              <Card className="bg-white/20 backdrop-blur-lg border border-white/30 dark:border-white/10 transition-transform duration-300 hover:scale-105">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <Icon className="h-8 w-8 text-violet-600 mb-3" />
                  <div className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">{number}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">{label}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.blockquote
          className="mt-10 max-w-xl mx-auto italic text-gray-600 dark:text-gray-400 text-sm z-50"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          “This system helped me grow from zero to 7 figures in 18 months.”
        </motion.blockquote>
      </div>
    </motion.section>
  );
};

export default HeroSection;
