import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

function Contact() {
  const { t } = useTranslation();
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="container mx-auto px-4 py-10 text-center"
    >
      <h1 className="text-4xl font-display text-fithub-gold mb-6">{t("contact.title")}</h1>
      <p>Email: info@fastfithub.com | Phone: +91-7316981754 | Instagram: @aesthetic.illusionist</p>
    </motion.section>
  );
}
export default Contact;
