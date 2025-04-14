import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

function Experts() {
  const { t } = useTranslation();
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="container mx-auto px-4 py-10"
    >
      <h1 className="text-4xl font-display text-fithub-gold mb-6">{t("experts.title")}</h1>
      <div className="card">
        <h2 className="text-2xl font-semibold">Background & Credentials:</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Born October 26, 1994, in New Delhi, India.</li>
          <li>ISSA Gold Medalist Master Trainer (Sports Nutrition, DNA/Bodybuilding, Strength & Conditioning).</li>
          <li>10+ years in fitness coaching, starting as a physique competitor (2014).</li>
          <li>Former affiliations: MuscleBlaze Athlete (2015–2021), BPI Sports Brand Ambassador (2015), HealthifyMe’s top coach (trained 750+ coaches until 2023).</li>
        </ul>
        <h3 className="text-xl mb-2">Achievements & Recognition:</h3>
        <ul className="list-disc list-inside mb-4">
          <li>"India’s Best Online Fitness Coach" (Fitness India Awards 2023).</li>
          <li>"Most Googled Online Fitness Coach" (claimed).</li>
          <li>15,000+ client transformations globally.</li>
          <li>Specializes in DNA-based training, metabolic health, and elite physique coaching.</li>
        </ul>
        <h3 className="text-xl mb-2">High-Profile Clientele:</h3>
        <ul className="list-disc list-inside mb-4">
          <li>Urvashi Rautela (Bollywood actress, Physique Architect).</li>
          <li>Mr. S.S. Sandhu (Chairman, Shivalik Bimetal Control Ltd., Metabolic Strategist).</li>
        </ul>
        <h3 className="text-xl mb-2">Pricing & Exclusivity:</h3>
        <ul className="list-disc list-inside">
          <li>Personal coaching sessions: Rs. 2–2.5 lakh per 45-minute session.</li>
          <li>VIP Black Membership: Rs. 100,000 + Rs. 99,999 "Skip the Line" fee (direct mentorship).</li>
          <li>Vetting process: Rs. 8,195 confirmation call with Kashish.</li>
        </ul>
      </div>
    </motion.section>
  );
}
export default Experts;
