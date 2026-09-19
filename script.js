// script 1 - modification du contenu d'une cellule
document.getElementById("par1").innerHTML = "Avec Javascript, je remplace le contenu du paragraphe";

// script 2 - bouton on/off pour affichage d'un panneau
let panovis = "hidden";
document.getElementById("pann1").style.visibility = "hidden"
console.log(document.getElementById("pann1").style.visibility)
function clic() {		// affiche / cache le panneau on/off
  if(document.getElementById("pann1").style.visibility == "visible") panovis = "hidden" ;
  else panovis = "visible" ;
  document.getElementById("pann1").style.visibility = panovis ;
}   // fin fonction clic

// script 3 - boutons bas et haut de page
// fonction haut bas de page
function hbpage(x) {
 if (x==1) window.scrollTo(0, 0);
 if (x==0) window.scrollTo(0,document.body.scrollHeight);
}     // fin if haut bas de page

// Fonction de suppression des accents
supAccent = function(r){
  //r = r.replace(new RegExp(/\s/g),"");    // supprime les espaces
  r = r.replace(new RegExp(/[àâä]/g),"a");
  r = r.replace(new RegExp(/ç/g),"c");
  r = r.replace(new RegExp(/[èéêë]/g),"e");
  r = r.replace(new RegExp(/[îï]/g),"i");              
  r = r.replace(new RegExp(/[ôö]/g),"o");
  r = r.replace(new RegExp(/œ/g),"oe");
  r = r.replace(new RegExp(/[ùûü]/g),"u");
  //r = r.replace(new RegExp(/\W/g),"");    // supprime les espaces
  return r;
};
let avant = document.getElementById("acc_av").innerHTML;
document.getElementById("acc_ap").innerHTML = supAccent(avant);

