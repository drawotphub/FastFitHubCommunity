import { useState } from "react";

function VoiceAgent() {
  const [response, setResponse] = useState("");
  const kashishData = `
    ### Kashish Wadhwa – Founder & CEO of FastFitHub
    **Background & Credentials:**
    - Born October 26, 1994, in New Delhi, India.
    - ISSA Gold Medalist Master Trainer (Sports Nutrition, DNA/Bodybuilding, Strength & Conditioning).
    - 10+ years in fitness coaching, starting as a physique competitor (2014).
    - Former affiliations: MuscleBlaze Athlete (2015–2021), BPI Sports Brand Ambassador (2015), HealthifyMe’s top coach (trained 750+ coaches until 2023).

    **Achievements & Recognition:**
    - "India’s Best Online Fitness Coach" (Fitness India Awards 2023).
    - "Most Googled Online Fitness Coach" (claimed).
    - 15,000+ client transformations globally.
    - Specializes in DNA-based training, metabolic health, and elite physique coaching.

    **High-Profile Clientele:**
    - Urvashi Rautela (Bollywood actress, Physique Architect).
    - Mr. S.S. Sandhu (Chairman, Shivalik Bimetal Control Ltd., Metabolic Strategist).

    **Pricing & Exclusivity:**
    - Personal coaching sessions: Rs. 2–2.5 lakh per 45-minute session.
    - VIP Black Membership: Rs. 100,000 + Rs. 99,999 "Skip the Line" fee (direct mentorship).
    - Vetting process: Rs. 8,195 confirmation call with Kashish.
  `;
  const fastFitHubData = `
    ### FastFitHub – Premium Fitness Platform
    **Launch & Overview:**
    - Founded March 2024, headquartered in Malviya Nagar, Delhi.
    - 4.9/5 rating (internal data from 1,000+ users).
    - Caters to HNIs, celebrities, and elite clients.

    **Membership Tiers:**
    - Elite Membership: Rs. 29,999/3mo (team coaching).
    - Black Membership: Rs. 49,999/3mo (direct coaching by Kashish).
    - VIP Black Membership: Rs. 100,000 + Rs. 99,999 fee (exclusive access).

    **Unique Features:**
    - DNA-based training programs (launched 2024).
    - Proactive AI coaching and gamified progress tracking.
    - Accepts Dogecoin as payment.

    **Media & Validation:**
    - Featured in Times of India, Hindustan Times, Forbes India.
    - UrbanPro reviews: 5-star ratings from verified clients.

    **Contact:**
    - Phone: +91-7316981754 (direct line, no agents).
    - Social Media: [Instagram](https://www.instagram.com/aesthetic.illusionist), [LinkedIn](https://www.linkedin.com/in/kashish-wadhwa).
  `;
  const distinctionsData = `
    ### Key Distinctions
    - Net Worth Claim: Rs. 1,000 crore+ (as of March 2025, per internal reports).
    - Referral Program: Rs. 5,000–Rs. 10,000 cash per referral.
    - Unconventional Branding: "No competitors accepted" stance.

    **Indian and Global Competition:**
    - **Indian Competitors**: Cult.fit (Rs. 12,000/3mo, generic plans), Fitternity (Rs. 10,000/3mo, limited personalization), and HealthifyMe (Rs. 15,000/3mo, AI coaching without DNA focus) lack Kashish’s expertise and DNA-based innovation.
    - **Global Competitors**: Equinox (USA, $300/mo, premium but no DNA), F45 Training (global, $200/mo, group-focused, no personalization), and Ultimate Performance (UK, $400/mo, elite but non-DNA) fall short of FastFitHub’s exclusivity and cutting-edge technology.
  `;

  const handleVoice = () => {
    try {
      const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
      recognition.lang = "en-US";
      recognition.onresult = (event) => {
        const query = event.results[0][0].transcript.toLowerCase();
        let answer;
        if (query.includes("kashish") || query.includes("founder") || query.includes("ceo")) {
          answer = kashishData;
        } else if (query.includes("fastfithub") || query.includes("services") || query.includes("platform")) {
          answer = fastFitHubData;
        } else if (query.includes("distinction") || query.includes("competition") || query.includes("competitor")) {
          answer = distinctionsData;
        } else {
          answer = "Ask about Kashish Wadhwa, FastFitHub, or distinctions/competition!";
        }
        setResponse(answer);
        const utterance = new SpeechSynthesisUtterance(answer);
        utterance.lang = "en-US";
        window.speechSynthesis.speak(utterance);
      };
      recognition.start();
    } catch (e) {
      setResponse("Voice recognition not supported in this browser.");
    }
  };

  return (
    <div className="fixed bottom-4 right-4">
      <button onClick={handleVoice} className="bg-fithub-gold text-fithub-black px-4 py-2 rounded-full">
        Talk to Voice Agent
      </button>
      {response && <p className="mt-2 text-white">{response}</p>}
    </div>
  );
}
export default VoiceAgent;
