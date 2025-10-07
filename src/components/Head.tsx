import React from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import "../app/locales/i18n";

const Head = () => {
  const { t, i18n } = useTranslation();

  const handleChangeLang = () => {
    const newLang = i18n.language === "en" ? "sw" : "en";
    i18n.changeLanguage(newLang);
  };
  return (
    <View style={styles.container}>
      <Text>Mkatoliki</Text>
      <TouchableOpacity onPress={handleChangeLang} style={styles.button}>
        <Text style={styles.text}>{t("switch")}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Head;

const styles = StyleSheet.create({
  container: {
    paddingInline: 30,
    paddingVertical: 8,
    backgroundColor: "lightgrey",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    width: 50,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    backgroundColor: "#048ffaff",
    padding: 5,
  },
  text: {
    color: "white",
    fontWeight: "bold",
  },
});
