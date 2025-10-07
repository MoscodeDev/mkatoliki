import { useTranslation } from "react-i18next";
import { Text, View } from "react-native";
import styles from "../app/styles/styles";

interface RosaryMysteryProps {
  type: string;
}

const RosaryMystery = ({ type }: RosaryMysteryProps) => {
  const { t } = useTranslation();
  return (
    <View style={{marginTop:15}}>
      <Text style={styles.header2}>{t(`holyrosary.${type}.title`)}</Text>
      <View style={styles.flexRow}>
        <Text style={styles.fontComment}>{t("day")}: </Text>
        <Text style={styles.fontComment}>{t(`holyrosary.${type}.days`)}</Text>
      </View>
      <View>
        <Text>1. {t(`holyrosary.${type}.first`)}</Text>
        <Text>2. {t(`holyrosary.${type}.second`)}</Text>
        <Text>3. {t(`holyrosary.${type}.third`)}</Text>
        <Text>4. {t(`holyrosary.${type}.fourth`)}</Text>
        <Text>5. {t(`holyrosary.${type}.fifth`)}</Text>
      </View>
    </View>
  );
};

export default RosaryMystery
