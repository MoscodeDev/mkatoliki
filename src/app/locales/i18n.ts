import * as Localization from 'expo-localization';
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import orderOfMass from './en/orderOfMass.js';
import prayers from './en/prayers.js';
import pressables from './en/pressables.js';
import rosary from './en/rosary.js';
import bonyezi from './sw/bonyezi.js';
import kanuniYaMisa from './sw/kanuniYaMisa.js';
import rozari from './sw/rozari.js';
import sala from './sw/sala.js';

const resources = {
  en: {
    translation: {
      welcome: "Welcome",
      prayers: "Prayers",
      switch:"SWA",
      ...prayers,
      ...pressables,
      ...orderOfMass,
      ...rosary

    },
  },
  sw: {
    translation: {
      welcome: "karibu",
      prayers: "Sala",
      switch:"ENG",
      ...sala,
      ...bonyezi,
      ...kanuniYaMisa,
      ...rozari
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: Localization.getLocales()[0]?.languageCode || "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
