// Creare array con nome ruolo e foto;

let membri = [
 {
    nome : "Wayne Barnett",
    ruolo : "Founder & CEO",
    foto : "wayne-barnett-founder-ceo.jpg"
 },
 {
    nome : "Angela Caroll",
    ruolo : "Chief Editor",
    foto : "angela-caroll-chief-editor.jpg "
 },
 {
    nome : "Walter Gordon",
    ruolo : "Office Manager",
    foto : "walter-gordon-office-manager.jpg"
 },
 {
    nome : "Angela Lopez",
    ruolo : "Social Media Manager",
    foto : "angela-lopez-social-media-manager.jpg"
 },
 {
    nome : "Scott Estrada",
    ruolo : "Developer",
    foto : "scott-estrada-developer.jpg",
 },
 {
    nome : "Barbara Ramos",
    ruolo : "Graphic Designer",
    foto : "barbara-ramos-graphic-designer.jpg"
 }

]

//Stampare su console le informazioni di ogni membro del team;
for(let i=0; i<membri.length; i++){
   let membro = membri[i];

   for(let key in membro){
      console.log(membro[key]);
   }   
}      
//Stampare le stesse a schermo e l'immagine tramite stringa;
