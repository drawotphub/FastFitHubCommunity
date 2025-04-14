import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

function Home() {
  const { t } = useTranslation();
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="hero"
    >
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 text-fithub-gold tracking-wide animate-fade">
          {t("home.title")}
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
          {t("home.subtitle")}
        </p>
        <a
          href="#"
          className="bg-fithub-gold text-fithub-black px-10 py-4 rounded-full hover:bg-yellow-600 font-sans text-xl font-semibold transition-colors"
        >
          {t("home.cta")}
        </a>
      </div>
    </motion.section>
  );
}
export default Home;
