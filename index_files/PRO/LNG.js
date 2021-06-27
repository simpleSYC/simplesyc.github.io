const PROEKTI_ITMS = [PRO_HAS, PRO_MY_LOCAL, PRO_SEZONJOBS, PRO_MINISHOP];
function teksto_inputski(a) {
  let CoD = a.toUpperCase();
  for (i in EL_["NAV_MENU"]) {
    EL_["NAV_MENU"][i].innerHTML = LANGUE[CoD]["CAT"]["TITLE"][i];
    EL_["RUBRIKA"]["NASLOV"][i].innerHTML = LANGUE[CoD]["CAT"]["TITLE"][i];
    EL_["RUBRIKA"]["POD_NASLOV"][i].innerHTML = LANGUE[CoD]["CAT"]["TXT"][i];
  }

  EL_["SLOGAN"]["txt"].innerHTML = LANGUE[CoD]["WELCOME_txt"];
  EL_["SLOGAN"]["TXT"].innerHTML = LANGUE[CoD]["WELCOME_TXT"];
  EL_["BTN_WHT_DO"].innerHTML = LANGUE[CoD]["WHAT_DO"];

  for (h in EL_["HIGHLIGHTS"]["TITLE"]) {
    EL_["HIGHLIGHTS"]["TITLE"][h].innerHTML =
      LANGUE[CoD]["HIGHLIGTS"]["TITLE"][h];
    EL_["HIGHLIGHTS"]["TXT"][h].innerHTML = LANGUE[CoD]["HIGHLIGTS"]["TXT"][h];
  }

  for (p in EL_["PROEKTAT"]["MODEL_OTVARACH"]) {
    let N = p;
    EL_["PROEKTAT"]["POD_NASLOV"][p].innerHTML = LANGUE[CoD]["PROEKT_DESC"][p];
    EL_["PROEKTAT"]["MODEL_OTVARACH"][p].onclick = function () {
      MODELIRANJE(N, CoD);
    };
  }

  for (g in EL_["ABOUT"]["TITLE"]) {
    EL_["ABOUT"]["TITLE"][g].innerHTML = LANGUE[CoD]["ABOUT_US"]["TITLE"][g];
    EL_["ABOUT"]["TXT"][g].innerHTML = LANGUE[CoD]["ABOUT_US"]["TXT"][g];
  }
  EL_["CLIENTS_TXT"].innerHTML = LANGUE[CoD]["ABOUT_US"]["CLIENTS"];
  EL_["MOTO_TXT"].innerHTML = LANGUE[CoD]["ABOUT_US"]["MOTO"];
}

function MODELIRANJE(p, jazik) {
  EL_["MDL"]["TITLE"].innerHTML = PROEKTI_ITMS[p]["IME"];
  EL_["MDL"]["SLOGAN"].innerHTML = PROEKTI_ITMS[p][jazik]["SLOGAN"];
  EL_["MDL"]["FOTO"].src = PROEKTI_ITMS[p]["FOTKA_SRC"];
  EL_["MDL"]["DESC"].innerHTML = PROEKTI_ITMS[p][jazik]["DESC"];
  EL_["MDL"]["DATUM"].innerHTML = PROEKTI_ITMS[p]["DATUM"];
  EL_["MDL"]["SECTOR"].innerHTML = PROEKTI_ITMS[p][jazik]["SECTOR"];
  EL_["MDL"]["WEBSITE"].innerHTML = PROEKTI_ITMS[p]["WEB"];
}

for (i in PROEKTI_ITMS) {
  var cln = EL_["BLANKO"].cloneNode(true);
  cln.getElementsByClassName("img-fluid")[0].src =
    PROEKTI_ITMS[i]["FOTKA_LOGO"];
  cln.getElementsByClassName("portfolio-caption-heading")[0].innerHTML =
    PROEKTI_ITMS[i]["IME"];

  EL_["PROEKTAT"]["PROEKTITE_DIV"].appendChild(cln);
}

EL_["BLANKO"].parentElement.remove();
teksto_inputski("GB");
