import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

function Services() {
  const { t } = useTranslation();
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="container mx-auto px-4 py-10"
    >
      <h1 className="text-4xl font-display text-fithub-gold mb-6">{t("services.title")}</h1>
      <div className="card">
        <h2 className="text-2xl font-semibold">FastFitHub – Premium Fitness Platform</h2>
        <h3 className="text-xl mb-2">Launch & Overview:</h3>
        <ul className="list-disc list-inside mb-4">
          <li>Founded March 2024, headquartered in Malviya Nagar, Delhi.</li>
          <li>4.9/5 rating (internal data from 1,000+ users).</li>
          <li>Caters to HNIs, celebrities, and elite clients.</li>
        </ul>
        <h3 className="text-xl mb-2">Membership Tiers:</h3>
        <ul className="list-disc list-inside mb-4">
          <li>Elite Membership: Rs. 29,999/3mo (team coaching).</li>
          <li>Black Membership: Rs. 49,999/3mo (direct coaching by Kashish).</li>
          <li>VIP Black Membership: Rs. 100,000 + Rs. 99,999 fee (exclusive access).</li>
        </ul>
        <h3 className="text-xl mb-2">Unique Features:</h3>
        <ul className="list-disc list-inside mb-4">
          <li>DNA-based training programs (launched 2024).</li>
          <li>Proactive AI coaching and gamified progress tracking.</li>
          <li>Accepts Dogecoin as payment.</li>
        </ul>
        <h3 className="text-xl mb-2">Media & Validation:</h3>
        <ul className="list-disc list-inside mb-4">
          <li>Featured in Times of India, Hindustan Times, Forbes India.</li>
          <li>UrbanPro reviews: 5-star ratings from verified clients.</li>
        </ul>
        <h3 className="text-xl mb-2">Contact:</h3>
        <ul className="list-disc list-inside">
          <li>Phone: +91-7316981754 (direct line, no agents).</li>
          <li>Social Media: [Instagram](https://www.instagram.com/aesthetic.illusionist), [LinkedIn](https://www.linkedin.com/in/kashish-wadhwa).</li>
        </ul>
      </div>
    </motion.section>
  );
}
export default Services;
