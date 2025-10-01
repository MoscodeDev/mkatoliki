export default {
  priest: "Priest",
  people: "People",
  deacon: "Deacon",
  lector: "Lector",
  responsorialPsalm: "Responsorial Psalm",
  introductory: "Introductory Rites",
  liturgyWord: "Liturgy of the Word",
  liturgyEucharist: "Liturgy of the Eucharist",
  communion: "Communion Rite",
  concluding: "Concluding Rites",
  mass: "MASS",
  deaconOrPriest: "Deacon or Priest",
  or: "or",
  kyrie:"KYRIE",
  gloria:"GLORIA",
  mystery:"MYSTERY OF FAITH",
  introductoryRites: {
    greeting: {
      priest:
        "In the name of the Father, and of the Son, and of the Holy Spirit.",
      people: "Amen.",
      priest2: "The Lord be with you.",
      people2: "And with your spirit.",
    },
    greeting2: {
      priest:
        "The Grace of our Lord Jesus Christ, \nand the love of God, \nand the communion of the Holy Spirit be with you all.",
      people: "And with your spirit",
      priest2:
        "Grace to you and peace from God our Father and the Lord Jesus Christ",
      people2: "And with your spirit.",
    },
    penitentialAct: {
      priest:
        "Brothers and sisters, let us acknowledge our sins, and so prepare ourselves to celebrate the sacred mysteries.",
      confiteor: {
        people:
          "I confess to almighty God and to you, my brothers and sisters, that I have greatly sinned, \nin my thoughts and in my words, \nin what I have done and in what I have failed to do \n(and while striking your breast say) \nthrouhg my fault, through my fault \nthrough my most grievous fault; \n(then continue) \ntherefore I ask blessed Mary ever Virgin, \nall the Angels and saints, \nand to you my brothers and sisters, \nto pray for me to the Lord our God",
      },
      absolution: {
        priest:
          "May almighty God have mercy on us, forgive us our sins, and bring us to everlasting life.",
        people: "Amen.",
      },
    },
    kyrie: {
      priest: "Lord, have mercy.",
      people: "Lord, have mercy.",
      priest2: "Christ, have mercy.",
      people2: "Christ, have mercy.",
      priest3: "Lord, have mercy.",
      people3: "Lord, have mercy.",
    },
    gloria: {
      people:
        "Glory to God in the highest, and on earth peace to people of good will. \nWe praise you, we bless you, we adore you, we glorify you, \nwe give you thanks for your great glory, \nLord God, heavenly King, O God, almighty Father. \n\nLord Jesus Christ, Only Begotten Son, \nLord God, Lamb of God, Son of the Father, \nyou take away the sins of the world, have mercy on us; \nyou take away the sins of the world, receive our prayer; \nyou are seated at the right hand of the Father, have mercy on us. \n\nFor you alone are the Holy One, \nyou alone are the Lord, \nyou alone are the Most High, Jesus Christ, \nwith the Holy Spirit, \nin the glory of God the Father. \nAmen.",
    },
    collect: {
      priest:
        "Let us pray. … Through our Lord Jesus Christ, your Son, who lives and reigns with you in the unity of the Holy Spirit, God, for ever and ever.",
      people: "Amen.",
    },
  },

  liturgyOfTheWord: {
    firstReading: {
      lector: "The Word of the Lord.",
      people: "Thanks be to God.",
    },
    responsorialPsalm: {
      people:
        "-- The psalmist sings or says the Psalm with the people making the response --",
    },
    secondReading: {
      lector: "The Word of the Lord.",
      people: "Thanks be to God.",
    },
    gospel: {
      deaconOrPriest: "The Lord be with you.",
      people: "And with your spirit.",
      deaconOrPriest2: "A reading from the holy Gospel according to N.",
      people2:
        "Glory to you, O Lord. \n(All make the Sign of the cross on their forehead, lips and breast.)",
      afterGospel: {
        deaconOrPriest: "The Gospel of the Lord.",
        people: "Praise to you, Lord Jesus Christ.",
      },
    },
    homily: {
      theHomily: "The Homily",
      note: "The homily is given.",
    },
    creed: {
      people:
        "I believe in one God, the Father almighty, maker of heaven and earth … Amen.",
    },
    prayersOfTheFaithful: {
      priest: "Lord, hear us.",
      people: "Lord, graciously hear us.",
    },
  },

  liturgyOfTheEucharist: {
    preparationOfGifts: {
      priest:
        "Blessed are you, Lord God of all creation, for through your goodness we have received the bread we offer you: fruit of the earth and work of human hands, it will become for us the bread of life.",
      people: "Blessed be God for ever.",
      priest2:
        "Blessed are you, Lord God of all creation, for through your goodness we have received the wine we offer you: fruit of the vine and work of human hands, it will become our spiritual drink.",
      people2: "Blessed be God for ever.",
      priest3:
        "Pray, brothers and sisters, that my sacrifice and yours may be acceptable to God, the almighty Father.",
      people3:
        "May the Lord accept the sacrifice at your hands for the praise and glory of his name, for our good and the good of all his holy Church.",
      note: "Priest with hands extended says prayers of the offering.",
    },

    prayerOverOfferings: {
      priest: "… Through Christ our Lord.",
      people: "Amen.",
    },
    prefaceDialogue: {
      note: "Priest begins the Eucharistic prayer with the following dialogue:",
      priest: "The Lord be with you.",
      people: "And with your spirit.",
      priest2: "Lift up your hearts.",
      people2: "We lift them up to the Lord.",
      priest3: "Let us give thanks to the Lord our God.",
      people3: "It is right and just.",
    },
    sanctus: {
      note: "(Priest with extended hands continues the preface and concludesby singing or saying aloud with the people:)",
      people:
        "Holy, Holy, Holy Lord God of hosts. \nHeaven and earth are full of your glory. \nHosanna in the highest \nBlessed is he who comes in the name of the Lord. \nHosanna in the highest.",
    },
    eucharisticPrayer: {
      consecration: {
        priest:
          "Take this, all of you, and eat of it … Do this in memory of me.",
      },
      mysteryOfFaith: {
        priest: "The mystery of faith.",
        acclamations: {
          a: "We proclaim your Death, O Lord, and profess your Resurrection until you come again.",
          b: "When we eat this Bread and drink this Cup, we proclaim your Death, O Lord, until you come again.",
          c: "Save us, Savior of the world, for by your Cross and Resurrection you have set us free.",
        },
      },
      doxology: {
        priest:
          "Through him, and with him, and in him, O God, almighty Father, in the unity of the Holy Spirit, all glory and honor is yours, for ever and ever.",
        people: "Amen.",
      },
    },
  },

  communionRite: {
    ourFather: {
      priest: "At the Savior’s command … we dare to say:",
      people: "Our Father, who art in heaven,\nhallowed be thy name. \nThy kingdom come, thy will be done on earth as it is in heaven. \nGive us this day our daily bread, and forgive us our trespasses, \nas we forgive those who trespass against us. \nAnd lead us not into temptation, but deliver us from evil",
    },
    embolism: {
      priest:
        "Deliver us, Lord, we pray, from every evil … as we await the coming of our Savior, Jesus Christ.",
      people:
        "For the kingdom, the power and the glory are yours now and for ever.",
    },
    signOfPeace: {
      priest: "The peace of the Lord be with you always.",
      people: "And with your spirit.",
      deacon: "Let us offer each other the sign of peace.",
    },
    agnusDei: {
      people:
        "Lamb of God, you take away the sins of the world, have mercy on us.\nLamb of God, you take away the sins of the world, have mercy on us. \nLamb of God, you take away the sins of the world, grant us peace.",
    },
    invitationToCommunion: {
      priest:
        "Behold the Lamb of God … Blessed are those called to the supper of the Lamb.",
      people: "Lord, I am not worthy that you should enter under my roof, but only say the word and my soul shall be healed.",
    },
    communion: {
      note: "---The faithful receive Holy Communion. (Silence or hymn may follow.)---",
    },
    prayerAfterCommunion: {
      priest: "Let us pray. … Through Christ our Lord.",
      people: "Amen.",
    },
  },

  concludingRites: {
    blessing: {
      priest: "The Lord be with you.",
      people: "And with your spirit.",
      priest2:
        "May almighty God bless you, the Father, and the Son, ✠ and the Holy Spirit.",
      people2: "Amen.",
    },
    dismissal: {
      deaconOrPriest: {
        options: {
          a: "Go forth, the Mass is ended.",
          b: "Go and announce the Gospel of the Lord.",
          c: "Go in peace, glorifying the Lord by your life.",
          d: "Go in peace.",
        },
        people: "Thanks be to God.",
      },
    },
  },
};
