const FotoURL = "index_files/PRO/";
const EL_ = {
  LOGO: document.getElementsByClassName("navbar-brand js-scroll-trigger")[0],
  NAV_MENU: document.getElementsByClassName("nav-link js-scroll-trigger"),

  BTN_WHT_DO: document.getElementsByClassName("btn-xl")[0],

  HIGHLIGHTS: {
    TITLE: document.getElementsByClassName("my-3 te"),
    TXT: document.getElementsByClassName("m-3-y"),
  },

  SLOGAN: {
    txt: document.getElementsByClassName("masthead-subheading")[0],
    TXT: document.getElementsByClassName("masthead-heading text-uppercase")[0],
  },

  RUBRIKA: {
    NASLOV: document.getElementsByClassName("section-heading text-uppercase"),
    POD_NASLOV: document.getElementsByClassName("section-subheading"),
  },

  PROEKTAT: {
    PROEKTITE_DIV: document.getElementById("PROEKTITE"),
    MODEL_OTVARACH: document.getElementsByClassName("portfolio-link"),
    POD_NASLOV: document.getElementsByClassName("portfolio-caption-subheading"),
  },

  ABOUT: {
    TITLE: document.getElementsByClassName("subheading"),
    TXT: document.getElementsByClassName("g-desc"),
    FOTO: document.getElementsByClassName("rounded-circle img-fluid"),
  },
  CLIENTS_TXT: document.getElementById("Frnd_sup"),
  MOTO_TXT: document.getElementById("moto"),

  ZNAME: {
    SELEKT_ZNAME: document.getElementById("slk_zmae"),
    BTN: document.getElementById("set_zname"),
    OPCITE: document.getElementById("zname"),
    zname_ICON: document.getElementsByClassName("flg"),
    PREVOD_COD: {
      0: "gb",
      1: "de",
      2: "pl",
      3: "mk",
      4: "es",
    },
  },
  BLANKO: document.getElementById("bingo").children[1],
  MDL: {
    TITLE: document.getElementById("P_name"),
    SLOGAN: document.getElementById("P_slogan"),
    FOTO: document.getElementById("P_img"),
    DESC: document.getElementById("P_desc"),
    DATUM: document.getElementById("P_datum"),
    SECTOR: document.getElementById("P_s1"),
    WEBSITE: document.getElementById("P_s2"),
  },
};
document.getElementById("INTRO").style.height = screen.availHeight + "px";
for (i in EL_["ABOUT"]["FOTO"]) {
  EL_["ABOUT"]["FOTO"][i].src = "index_files/MEDIA/TIMELINE/" + i + ".jpg";
}
//// TITLETO da go sodrzi datum + br +txt
