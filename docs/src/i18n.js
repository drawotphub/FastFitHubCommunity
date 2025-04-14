import i18next from "i18next";
import { initReactI18next } from "react-i18next";

i18next.use(initReactI18next).init({
  lng: "en",
  resources: {
    en: {
      translation: {
        "nav.home": "Home",
        "nav.experts": "Experts",
        "nav.services": "Services",
        "nav.contact": "Contact",
        "home.title": "FastFitHub Global",
        "home.subtitle": "Premier fitness platform featuring Kashish Wadhwa.",
        "home.cta": "Learn More",
        "experts.title": "Kashish Wadhwa",
        "services.title": "FastFitHub Services",
        "contact.title": "Contact Us"
      }
    }
  }
});
