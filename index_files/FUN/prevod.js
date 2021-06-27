const flag_SELETIRANOT = new CountryFlag(EL_["ZNAME"]["SELEKT_ZNAME"]);
const flag_stalaz_0 = new CountryFlag(EL_["ZNAME"]["zname_ICON"][0]);
const flag_stalaz_1 = new CountryFlag(EL_["ZNAME"]["zname_ICON"][1]);
const flag_stalaz_2 = new CountryFlag(EL_["ZNAME"]["zname_ICON"][2]);
const flag_stalaz_3 = new CountryFlag(EL_["ZNAME"]["zname_ICON"][3]);
const flag_stalaz_4 = new CountryFlag(EL_["ZNAME"]["zname_ICON"][4]);

flag_SELETIRANOT.selectByAlpha2("gb");
flag_stalaz_0.selectByAlpha2("gb");
flag_stalaz_1.selectByAlpha2("de");
flag_stalaz_2.selectByAlpha2("pl");
flag_stalaz_3.selectByAlpha2("mk");
flag_stalaz_4.selectByAlpha2("es");

$(EL_["ZNAME"]["BTN"]).click(function () {
  $(EL_["ZNAME"]["OPCITE"]).slideToggle(600, "linear");
});

for (i in EL_["ZNAME"]["zname_ICON"]) {
  let I = i;
  EL_["ZNAME"]["zname_ICON"][i].onclick = function () {
    LNG_F(EL_["ZNAME"]["PREVOD_COD"][I]);
  };
}

function LNG_F(a) {
  flag_SELETIRANOT.selectByAlpha2(a);
  $(EL_["ZNAME"]["OPCITE"]).slideToggle(600, "linear");
  setTimeout(function () {
    EL_["LOGO"].click();
  }, 777);

  teksto_inputski(a);
}
