// main.js
// Seurausten talo – virtaus, 30×30-rakenne ja esimerkkicase

// -------------------------
// 1. Virtausnäkymän 6 vaihetta
// -------------------------

const phases = [
  {
    key: 1,
    label: "(1) Päätös",
    shortTitle: "Päätös tehdään",
    description:
      "Päätöksen hetkellä jokin linjaus, muutos tai toimenpide valitaan toisten vaihtoehtojen sijaan. Luvataan tiettyjä vaikutuksia – usein aliarvioiden niiden seuraukset."
  },
  {
    key: 2,
    label: "(2) Vaikutus",
    shortTitle: "Ensivaikutukset",
    description:
      "Päätös alkaa näkyä konkreettisina muutoksina. Ensimmäiset vaikutukset voivat näyttää hallituilta – tai paljastaa heti odottamattomia jännitteitä."
  },
  {
    key: 3,
    label: "(3) Seuraukset",
    shortTitle: "Kerrannaisvaikutukset",
    description:
      "Vaikutuksista kertyy seurauksia: hyötyjä, haittoja, sivuvaikutuksia ja syrjävaikutuksia. Osa on näkyviä, osa piileviä, osa tunnistetaan liian myöhään."
  },
  {
    key: 4,
    label: "(4) Sopeutuminen",
    shortTitle: "Käytökset muuttuvat",
    description:
      "Ihmiset, instituutiot ja järjestelmät alkavat sopeutua seurauksiin. Syntyy uusia rutiineja, kiertoteitä, vastareaktioita ja puolustusmekanismeja."
  },
  {
    key: 5,
    label: "(5) Kertautuminen",
    shortTitle: "Rakenne toistaa itseään",
    description:
      "Samankaltaiset päätökset ja virheet alkavat toistaa itseään. Vanha ongelma palaa uusin kasvoin – kriisit muistuttavat toisiaan, vaikka nimet vaihtuvat."
  },
  {
    key: 6,
    label: "(6) Muutos normiksi",
    shortTitle: "Uusi normaali",
    description:
      "Alun perin poikkeava ratkaisu muuttuu normaaliksi: se kirjoittuu lainsäädäntöön, instituutioiden käytäntöihin ja arkisiin oletuksiin – tai torjutaan ja puretaan."
  }
];

// -------------------------
// 2. 30×30-nimistö (P1–P30, V1–V30, ...)
// -------------------------

const phaseSlotNames = {
  PAATOS: Array.from({ length: 30 }, (_, i) => ({
    id: i + 1,
    code: "P" + (i + 1),
    label: "Päätös – kohta " + (i + 1)
  })),
  VAIKUTUS: Array.from({ length: 30 }, (_, i) => ({
    id: i + 1,
    code: "V" + (i + 1),
    label: "Vaikutus – kohta " + (i + 1)
  })),
  SEURAUKSET: Array.from({ length: 30 }, (_, i) => ({
    id: i + 1,
    code: "S" + (i + 1),
    label: "Seuraukset – kohta " + (i + 1)
  })),
  SOPEUTUMINEN: Array.from({ length: 30 }, (_, i) => ({
    id: i + 1,
    code: "SO" + (i + 1),
    label: "Sopeutuminen – kohta " + (i + 1)
  })),
  KERTAUTUMINEN: Array.from({ length: 30 }, (_, i) => ({
    id: i + 1,
    code: "K" + (i + 1),
    label: "Kertautuminen – kohta " + (i + 1)
  })),
  MUUTOS_NORMIKSI: Array.from({ length: 30 }, (_, i) => ({
    id: i + 1,
    code: "M" + (i + 1),
    label: "Muutos normiksi – kohta " + (i + 1)
  }))
};

// 30×30-vaiherakenne koodilla
const phases30x30 = [
  { id: 1, name: "Päätös", code: "PAATOS" },
  { id: 2, name: "Vaikutus", code: "VAIKUTUS" },
  { id: 3, name: "Seuraukset", code: "SEURAUKSET" },
  { id: 4, name: "Sopeutuminen", code: "SOPEUTUMINEN" },
  { id: 5, name: "Kertautuminen", code: "KERTAUTUMINEN" },
  { id: 6, name: "Muutos normiksi", code: "MUUTOS_NORMIKSI" }
];

// -------------------------
// 3. Esimerkkicase 30×30-rakenteeseen
// -------------------------

const exampleCaseA = {
  id: "esimerkki-a",
  title: "Esimerkki A – X-lain uudistus",
  context:
    "Kansallinen lainsäädäntöuudistus, jonka tavoitteena oli yksinkertaistaa järjestelmää ja vähentää kustannuksia.",
  actors:
    "Lainsäätäjät, ministeriö, etujärjestöt, kansalaiset",
  slots: {
    PAATOS: {
      P1: "Alkuperäinen poliittinen lupaus ja julkinen narratiivi päätöksestä.",
      P2: "Hiljainen oletus siitä, mitä ongelmaa uudistus oikeasti ratkoo.",
      P3: "Päätöksen läpiviemiseksi tehtyjen kompromissien kirjaus."
      // P4–P30 tyhjänä toistaiseksi
    },
    VAIKUTUS: {
      V1: "Ensimmäinen näkyvä muutos palvelurakenteessa.",
      V2: "Mediareaktiot ja julkinen keskustelu ensimmäisten kuukausien aikana."
    },
    SEURAUKSET: {
      S1: "Odotetut taloudelliset säästöt ja niiden toteutuma.",
      S2: "Odottamattomat sivuvaikutukset heikoimmassa asemassa oleville.",
      S3: "Pitkän aikavälin signaalit, joita ei huomattu ajoissa."
    },
    SOPEUTUMINEN: {
      SO1: "Käytännön kiertotiet, joita paikalliset toimijat kehittivät.",
      SO2: "Epäviralliset rutiinit, joilla järjestelmää saatiin toimimaan arjessa."
    },
    KERTAUTUMINEN: {
      K1: "Rakenteellinen ongelma, joka oli ollut läsnä myös edellisessä uudistuksessa.",
      K2: "Samaa kaavaa noudattanut kriisi 20 vuotta aiemmin."
    },
    MUUTOS_NORMIKSI: {
      M1: "Tapa, jolla uudistus kirjautui lopulta arkiseksi oletukseksi: \"näin tämä on aina ollut\".",
      M2: "Myöhemmät päätökset, jotka nojaavat tähän uuteen normaaliin kyseenalaistamatta sitä."
    }
  }
};

// Hakee esimerkkicasesta tekstin, jos sitä on määritelty
function getExampleCaseText(phaseCode, index) {
  const phaseSlots = exampleCaseA.slots[phaseCode];
  if (!phaseSlots) return null;

  const prefixMap = {
    PAATOS: "P",
    VAIKUTUS: "V",
    SEURAUKSET: "S",
    SOPEUTUMINEN: "SO",
    KERTAUTUMINEN: "K",
    MUUTOS_NORMIKSI: "M"
  };
  const prefix = prefixMap[phaseCode] || "";
  const key = prefix + index; // esim. "P1", "S3", "M2"

  return phaseSlots[key] || null;
}

// -------------------------
// 4. Virtausnäkymän logiikka (ympyra-virtaus.html)
// -------------------------

let currentIndex = 0;

const phaseLabelEl = document.getElementById("phase-label");
const phaseIndexEl = document.getElementById("phase-index");
const phaseTitleEl = document.getElementById("phase-title");
const phaseDescriptionEl = document.getElementById("phase-description");
const timelineEl = document.getElementById("timeline");

function renderTimeline() {
  if (!timelineEl) return;
  timelineEl.innerHTML = "";
  phases.forEach((phase, index) => {
    const span = document.createElement("span");
    span.textContent = phase.key;
    if (index < currentIndex) {
      span.classList.add("done");
    } else if (index === currentIndex) {
      span.classList.add("active");
    }
    timelineEl.appendChild(span);
  });
}

function renderPhase() {
  if (!phaseLabelEl || !phaseIndexEl || !phaseTitleEl || !phaseDescriptionEl)
    return;
  const phase = phases[currentIndex];
  phaseLabelEl.textContent = phase.label;
  phaseIndexEl.textContent =
    "Vaihe " + (currentIndex + 1) + " / " + phases.length;
  phaseTitleEl.textContent = phase.shortTitle;
  phaseDescriptionEl.textContent = phase.description;
  renderTimeline();
}

function nextPhase() {
  currentIndex = (currentIndex + 1) % phases.length;
  renderPhase();
}

function prevPhase() {
  currentIndex = (currentIndex - 1 + phases.length) % phases.length;
  renderPhase();
}

// -------------------------
// 5. 30×30-UI: slotit + detail-boksi (ympyra-virtaus.html lisäosa)
// -------------------------

function getSlotPlaceholder(phase, index) {
  const map = {
    PAATOS: "P",
    VAIKUTUS: "V",
    SEURAUKSET: "S",
    SOPEUTUMINEN: "SO",
    KERTAUTUMINEN: "K",
    MUUTOS_NORMIKSI: "M"
  };
  const prefix = map[phase.code] || "";
  const code = prefix + index;

  // ensin yritetään hakea oikea esimerkkidata
  const exampleText = getExampleCaseText(phase.code, index);
  if (exampleText) {
    return (
      phase.id +
      ") " +
      phase.name +
      " – " +
      code +
      ". " +
      exampleText
    );
  }

  // muuten geneerinen placeholder
  return (
    phase.id +
    ") " +
    phase.name +
    " – " +
    code +
    ". " +
    "Paikka yksittäiselle havainnolle, caselle tai indikaattorille, " +
    "joka liittyy tähän kohtaan Seurausten talon 30×30-rakenteessa."
  );
}

function render30x30Matrix() {
  const container = document.getElementById("matrix-30x30");
  const detailBox = document.getElementById("slot-detail");
  const detailTitle = document.getElementById("slot-title");
  const detailDescription = document.getElementById("slot-description");

  if (!container) return; // jos sivulla ei ole 30×30-osuutta

  container.innerHTML = "";

  phases30x30.forEach((phase) => {
    const block = document.createElement("div");
    block.style.marginBottom = "20px";
    block.style.borderTop = "1px solid #eee";
    block.style.paddingTop = "15px";

    const title = document.createElement("h3");
    title.textContent = phase.id + ") " + phase.name + " (" + phase.code + ")";
    title.style.margin = "0 0 8px 0";
    title.style.color = "#2c3e50";

    const hint = document.createElement("p");
    hint.textContent =
      "Klikkaa jotakin kohdista 1–30 tarkentaaksesi, mitä tähän paikkaan voidaan kirjata.";
    hint.style.margin = "0 0 8px 0";
    hint.style.fontSize = "0.9em";
    hint.style.color = "#7f8c8d";

    const slotsWrapper = document.createElement("div");
    slotsWrapper.style.display = "flex";
    slotsWrapper.style.flexWrap = "wrap";
    slotsWrapper.style.gap = "4px";

    for (let i = 1; i <= 30; i++) {
      const slot = document.createElement("div");
      slot.textContent = i;
      slot.style.width = "30px";
      slot.style.height = "30px";
      slot.style.display = "flex";
      slot.style.alignItems = "center";
      slot.style.justifyContent = "center";
      slot.style.borderRadius = "4px";
      slot.style.border = "1px solid #ddd";
      slot.style.fontSize = "0.8em";
      slot.style.cursor = "pointer";
      slot.style.userSelect = "none";
      slot.title = phase.name + " – kohta " + i;

      slot.addEventListener("click", () => {
        if (!detailBox || !detailTitle || !detailDescription) return;
        detailTitle.textContent = phase.id + ") " + phase.name + " – " + i;
        detailDescription.textContent = getSlotPlaceholder(phase, i);
        detailBox.style.display = "block";
        detailBox.scrollIntoView({ behavior: "smooth", block: "center" });
      });

      slotsWrapper.appendChild(slot);
    }

    block.appendChild(title);
    block.appendChild(hint);
    block.appendChild(slotsWrapper);
    container.appendChild(block);
  });
}

// -------------------------
// 6. Alustus (vain jos elementit löytyvät sivulta)
// -------------------------

document.addEventListener("DOMContentLoaded", () => {
  // Virtausnäkymä
  if (
    phaseLabelEl &&
    phaseIndexEl &&
    phaseTitleEl &&
    phaseDescriptionEl &&
    timelineEl
  ) {
    renderPhase();
  }

  // 30×30-rakenne
  render30x30Matrix();
});
