import NavButton from "@/src/components/NavButton";
import { useRouter } from "expo-router";
import React from "react";
import { useTranslation } from "react-i18next";
import { ScrollView, View } from "react-native";

const index = () => {
  const router = useRouter();
  const {t} = useTranslation()
  return (
    <ScrollView>
      <View style={{ flex: 1, gap: 20, padding: 20 }}>
        <NavButton text={t('signTitle')} to="/church/prayers/signs" />
        <NavButton text={t('ourFatherTitle')} to="/church/prayers/father" />
        <NavButton text={t('hailMaryTitle')} to="/church/prayers/hailMary" />
        <NavButton text={t('iBelieveTitle')} to="/church/prayers/iBelieve" />
        <NavButton text={t('gloryBeTitle')} to="/church/prayers/groryBe" />
        <NavButton text={t("hailQueen")} to="/church/prayers/holyQueen" />
        <NavButton text={t('fatimaPrayerTitle')} to="/church/prayers/fatimaPrayer" />
      </View>
    </ScrollView>
  );
};

export default index;
