import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Navbar() {
  const { t } = useTranslation();
  return (
    <nav className="bg-fithub-blue p-4">
      <ul className="flex space-x-6 justify-center">
        <li><Link to="/" className="text-fithub-gold hover:text-yellow-600">{t("nav.home")}</Link></li>
        <li><Link to="/experts" className="text-white hover:text-fithub-gold">{t("nav.experts")}</Link></li>
        <li><Link to="/services" className="text-white hover:text-fithub-gold">{t("nav.services")}</Link></li>
        <li><Link to="/contact" className="text-white hover:text-fithub-gold">{t("nav.contact")}</Link></li>
      </ul>
    </nav>
  );
}
export default Navbar;
