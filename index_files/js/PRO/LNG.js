var Categori					=document.getElementsByClassName("nav-link js-scroll-trigger");

var mal_slogan					=document.getElementsByClassName("masthead-subheading")[0];
var golem_slogan				=document.getElementsByClassName("masthead-heading text-uppercase")[0];

var Categori_rubriki			=document.getElementsByClassName("section-heading text-uppercase");//isto ko prvite
var Slogan_rubrici				=document.getElementsByClassName("section-subheading text-muted");

var Trite_vaznsti_TITLE			=document.getElementsByClassName("my-3 te");
var Trite_vaznsti_desc			=document.getElementsByClassName("m-3-y");

var Proekite_podnaslov			=document.getElementsByClassName("portfolio-caption-subheading text-muted");

var G_naslove=document.getElementsByClassName("subheading");
var G_desc=document.getElementsByClassName("g-desc");

var Frendsko = document.getElementById("Frnd_sup");

var Moto=document.getElementsByClassName("col-lg-8 mx-auto text-center")[0].children[0];




function teksto_inputski(a){ 
var PRO_MDL				= document.getElementsByClassName("portfolio-link");

for(i=0;i<Categori.length;i++){
		  Categori[i].innerHTML				=LANGUE[a]["Categori"][i];
  Categori_rubriki[i].innerHTML				=LANGUE[a]["Categori"][i];
}
		
mal_slogan.innerHTML						=LANGUE[a]["mal_slogan"];
golem_slogan.innerHTML						=LANGUE[a]["golem_slogan"];

for(e=0;e<Slogan_rubrici.length;e++){
		 Slogan_rubrici[e].innerHTML		=LANGUE[a]["Slogan_rubrici"][e];
}
for(tri=0;tri<Trite_vaznsti_TITLE.length;tri++){
	Trite_vaznsti_TITLE[tri].innerHTML 		=LANGUE[a]["Trite_vaznsti_TITLE"][tri];
	 Trite_vaznsti_desc[tri].innerHTML 		=LANGUE[a]["Trite_vaznsti_desc"][tri];
}

for(w=0;w<Proekite_podnaslov.length;w++){
		 Proekite_podnaslov[w].innerHTML	=LANGUE[a]["Proekite_podnaslov"][w];
		                                let W=w;
		 PRO_MDL[w].onclick=function(){ONDI(W,a);}
}
for(r=0;r<G_naslove.length;r++){
		  G_naslove[r].innerHTML 			=LANGUE[a]["G_naslove"][r];
}
for(t=0;t<G_desc.length;t++){
		  G_desc[t].innerHTML				=LANGUE[a]["G_desc"][t];
}
Frendsko.innerHTML 							=LANGUE[a]["frendsko"];
	
Moto.innerHTML				=LANGUE[a]["Moto"];}




var PRO_my_upgrade=null; var PRO_sezonjobs=null;

											var PRO=[PRO_my_upgrade,PRO_my_local,PRO_sezonjobs];
function ONDI(p,j){
document.getElementById("P_name").innerHTML= 	PRO[p]["IME"];
document.getElementById("P_slogan").src= 		PRO[p][j]["SLOGAN"];
document.getElementById("P_img").innerHTML= 	PRO[p]["FOTKA_SRC"];
document.getElementById("P_desc").innerHTML= 	PRO[p][j]["DESC"];
document.getElementById("P_datum").innerHTML=	PRO[p]["DATUM"];
document.getElementById("P_s1").innerHTML= 		PRO[p][j]["SECTOR"];
document.getElementById("P_s2").innerHTML= 		PRO[p]["WEB"];}




var LANGUE={
GB:{
Categori:["kuce","mace","petle","team"],	

mal_slogan:["ajde sega da videme"],
golem_slogan:["dali e onadenoi"],

Categori_rubriki:[""],
Slogan_rubrici:["ova se nasite servisi","ova se nasite porekti","aoca e plant","timkata treba de e oca","nestko 2kstra"],			

Trite_vaznsti_TITLE:["sigurno","vazno","jako"],		
Trite_vaznsti_desc:["da be","najako e","aj sega de"],		

Proekite_podnaslov:["mojte jaki lokalki","sezonsko baranje rabota","myta upgredtka"],		

G_naslove:["rodeno e","i da taka e"],         
G_desc:["sega se rodivme","sega prodolzuvame"],           

frendsko:["ova se mojte prinajaci prijateli"],

Moto:["najaci sme od sudbine"]},


DE:{
	
},
PL:{
	
},
MK:{
	
},
ES:{
	
}
	
	
};


function cl(){var itm = document.getElementById("bingo").children[0];
var cln = itm.cloneNode(true);document.getElementById("PROEKTITE").appendChild(cln);}


for(i in PRO){cl();

if(PRO[i]){
document.getElementsByClassName("img-fluid")[i].alt							=PRO[i]["FOTKA_SRC"];
document.getElementsByClassName("portfolio-caption-heading")[i].innerHTML	=PRO[i]["IME"];

}
} document.getElementById("bingo").remove();


teksto_inputski("GB");
