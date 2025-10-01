import Responces from "@/src/components/Responces";
import Section from "@/src/components/Section";
import Segment from "@/src/components/Segment";
import React from "react";
import { useTranslation } from "react-i18next";
import { ScrollView, Text } from "react-native";
import styles from "../styles/styles";

const Order: React.FC = () => {
  const { t } = useTranslation();

  return (
    <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
      <Text>{t("mass")}</Text>

      {/* --- INTRODUCTORY RITES --- */}
      <Section title={t("introductory")}>
        <Segment>
          <Responces lead="priest" res="introductoryRites.greeting.priest" />
          <Responces lead="people" res="introductoryRites.greeting.people" />

          <Responces lead="priest" res="introductoryRites.greeting.priest2" />
          <Responces lead="people" res="introductoryRites.greeting.people2" />

          <Text style={styles.or}>{t("or")}</Text>
          <Responces lead="priest" res="introductoryRites.greeting2.priest" />
          <Responces lead="people" res="introductoryRites.greeting2.people" />

          <Text style={styles.or}>{t("or")}</Text>

          <Responces lead="priest" res="introductoryRites.greeting2.priest2" />
          <Responces lead="people" res="introductoryRites.greeting2.people2" />
        </Segment>
        <Segment>
          <Responces
            lead="priest"
            res="introductoryRites.penitentialAct.priest"
          />

          <Responces
            lead="people (Confiteor)"
            res="introductoryRites.penitentialAct.confiteor.people"
          />

          <Responces
            lead="priest (Absolution)"
            res="introductoryRites.penitentialAct.absolution.priest"
          />
          <Responces
            lead="people"
            res="introductoryRites.penitentialAct.absolution.people"
          />
        </Segment>
        <Segment>
          <Text style={{ ...styles.or }}>{t("kyrie")}</Text>
          <Responces lead="priest" res="introductoryRites.kyrie.priest" />
          <Responces lead="people" res="introductoryRites.kyrie.people" />
          <Responces lead="priest" res="introductoryRites.kyrie.priest2" />
          <Responces lead="people" res="introductoryRites.kyrie.people2" />
          <Responces lead="priest" res="introductoryRites.kyrie.priest3" />
          <Responces lead="people" res="introductoryRites.kyrie.people3" />
        </Segment>
        <Segment>
          <Text style={{ ...styles.or }}>{t("gloria")}</Text>
          <Responces lead="" res="introductoryRites.gloria.people" />
        </Segment>
        <Segment>
          <Responces lead="priest" res="introductoryRites.collect.priest" />
          <Responces lead="people" res="introductoryRites.collect.people" />
        </Segment>
      </Section>

      {/* --- LITURGY OF THE WORD --- */}
      <Section title={t("liturgyWord")}>
        <Responces lead="lector" res="liturgyOfTheWord.firstReading.lector" />
        <Responces lead="people" res="liturgyOfTheWord.firstReading.people" />

        <Responces
          lead="responsorialPsalm"
          res="liturgyOfTheWord.responsorialPsalm.people"
        />

        <Responces lead="lector" res="liturgyOfTheWord.secondReading.lector" />
        <Responces lead="people" res="liturgyOfTheWord.secondReading.people" />

        <Responces lead="priest" res="liturgyOfTheWord.gospel.deaconOrPriest" />
        <Responces lead="people" res="liturgyOfTheWord.gospel.people" />
        <Responces
          lead="priest"
          res="liturgyOfTheWord.gospel.deaconOrPriest2"
        />
        <Responces lead="people" res="liturgyOfTheWord.gospel.people2" />
        <Responces
          lead="priest"
          res="liturgyOfTheWord.gospel.afterGospel.deaconOrPriest"
        />
        <Responces
          lead="people"
          res="liturgyOfTheWord.gospel.afterGospel.people"
        />

        <Responces lead="" res="liturgyOfTheWord.creed.people" />

        <Responces
          lead="priest"
          res="liturgyOfTheWord.prayersOfTheFaithful.priest"
        />
        <Responces
          lead="people"
          res="liturgyOfTheWord.prayersOfTheFaithful.people"
        />
      </Section>

      {/* --- LITURGY OF THE EUCHARIST --- */}
      <Section title={t("liturgyEucharist")}>
        <Responces
          lead="priest"
          res="liturgyOfTheEucharist.preparationOfGifts.priest"
        />
        <Responces
          lead="people"
          res="liturgyOfTheEucharist.preparationOfGifts.people"
        />
        <Responces
          lead="priest"
          res="liturgyOfTheEucharist.preparationOfGifts.priest2"
        />
        <Responces
          lead="people"
          res="liturgyOfTheEucharist.preparationOfGifts.people2"
        />
        <Responces
          lead="priest"
          res="liturgyOfTheEucharist.preparationOfGifts.priest3"
        />
        <Responces
          lead="people"
          res="liturgyOfTheEucharist.preparationOfGifts.people3"
        />

        <Responces
          lead="priest"
          res="liturgyOfTheEucharist.prayerOverOfferings.priest"
        />
        <Responces
          lead="people"
          res="liturgyOfTheEucharist.prayerOverOfferings.people"
        />

        <Text>
          <Text>Preface Dialogue:</Text>
        </Text>
        <Responces
          lead="priest"
          res="liturgyOfTheEucharist.prefaceDialogue.priest"
        />
        <Responces
          lead="people"
          res="liturgyOfTheEucharist.prefaceDialogue.people"
        />
        <Responces
          lead="priest"
          res="liturgyOfTheEucharist.prefaceDialogue.priest2"
        />
        <Responces
          lead="people"
          res="liturgyOfTheEucharist.prefaceDialogue.people2"
        />
        <Responces
          lead="priest"
          res="liturgyOfTheEucharist.prefaceDialogue.priest3"
        />
        <Responces
          lead="people"
          res="liturgyOfTheEucharist.prefaceDialogue.people3"
        />
        <Responces lead="" res="liturgyOfTheEucharist.sanctus.note" />

        <Responces lead="people" res="liturgyOfTheEucharist.sanctus.people" />

        <Responces
          lead="Consecration:"
          res="liturgyOfTheEucharist.eucharisticPrayer.consecration.priest"
        />

        <Text>
          <Text style={{ ...styles.or }}>{t("mystery")}</Text>
        </Text>
        <Segment>
        <Responces
          lead="priest"
          res="liturgyOfTheEucharist.eucharisticPrayer.mysteryOfFaith.priest"
        />
        <Responces
          lead="people"
          res="liturgyOfTheEucharist.eucharisticPrayer.mysteryOfFaith.acclamations.a"
        />

        <Text style={styles.or}>{t("or")}</Text>
        <Responces
          lead=" "
          res="liturgyOfTheEucharist.eucharisticPrayer.mysteryOfFaith.acclamations.b"
        />

        <Text style={styles.or}>{t("or")}</Text>
        <Responces
          lead=" "
          res="liturgyOfTheEucharist.eucharisticPrayer.mysteryOfFaith.acclamations.c"
        />
</Segment>
        <Responces
          lead="priest"
          res="liturgyOfTheEucharist.eucharisticPrayer.doxology.priest"
        />
        <Responces
          lead="people"
          res="liturgyOfTheEucharist.eucharisticPrayer.doxology.people"
        />
      </Section>

      {/* --- COMMUNION RITE --- */}
      <Section title={t("communion")}>
        <Responces lead="priest" res="communionRite.ourFather.priest" />
        <Responces lead="people" res="communionRite.ourFather.people" />
        <Responces lead="priest" res="communionRite.embolism.priest" />
        <Responces lead="people" res="communionRite.embolism.people" />

        <Responces lead="priest" res="communionRite.signOfPeace.priest" />
        <Responces lead="people" res="communionRite.signOfPeace.people" />
        <Responces lead="deaconOrPriest" res="communionRite.signOfPeace.deacon" />

        <Responces lead="priest" res="communionRite.agnusDei.people" />

        <Responces lead="priest" res="communionRite.invitationToCommunion.priest" />
        <Responces lead="people" res="communionRite.invitationToCommunion.people" />

        <Responces lead="" res="communionRite.communion.note" />
      </Section>

      {/* --- CONCLUDING RITES --- */}
      <Section title={t("concluding")}>
        <Responces lead="priest" res="concludingRites.blessing.priest" />
        <Responces lead="people" res="concludingRites.blessing.people" />

        <Responces
          lead="priest"
          res="concludingRites.blessing.priest2"
        />
        <Responces
          lead="people"
          res="concludingRites.blessing.people2"
        />

        <Responces lead="deaconOrPriest" res="concludingRites.dismissal.deaconOrPriest.options.a" />
        <Text style={styles.or}>{t("or")}</Text>
        <Responces lead="" res="concludingRites.dismissal.deaconOrPriest.options.b" />
        <Text style={styles.or}>{t("or")}</Text>
        <Responces lead="" res="concludingRites.dismissal.deaconOrPriest.options.c" />
        <Text style={styles.or}>{t("or")}</Text>
        <Responces lead="" res="concludingRites.dismissal.deaconOrPriest.options.d" />
        <Responces lead="people" res="concludingRites.dismissal.deaconOrPriest.people" />
      </Section>
    </ScrollView>
  );
};

export default Order;
