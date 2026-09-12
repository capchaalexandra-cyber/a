/*
  PERSONALIZA SOLO ESTE BLOQUE.
  Cambia nombre, textos y URLs de las fotografías.
*/
const DATA = {
  name: "Michael",
  intro: "Para mi persona favorita",
  photos: [
    "paris.jpg",
    "pepe.jpg",
    "ghibli mood.jpeg"
  ],
  letter: `Hoy quiero recordarte lo importante que eres para mí.

Gracias por todos los momentos compartidos, por las risas, por las conversaciones y por todas esas pequeñas cosas que hacen que estar contigo sea especial.

Ojalá este nuevo año te traiga todo aquello que deseas y muchísimos motivos para sonreír.

Y, sobre todo, ojalá podamos seguir creando recuerdos juntos.`
};

const $ = id => document.getElementById(id);

$("personName").textContent = DATA.name;
$("finalName").textContent = DATA.name;
$("introSmall").textContent = DATA.intro;
$("letterBody").textContent = DATA.letter;
DATA.photos.forEach((src,i) => {
  const img = $("photo"+(i+1));
  if(img) img.src = src;
});

$("heartBtn").addEventListener("click", () => {
  $("heartBtn").disabled = true;
  let p = 0;
  const timer = setInterval(() => {
    p += 4;
    $("progressBar").style.width = p + "%";
    $("progressText").textContent = p + "%";
    if(p >= 100){
      clearInterval(timer);
      setTimeout(() => {
        $("welcome").classList.add("hidden");
        $("story").classList.remove("hidden");
        $("musicBtn").classList.remove("hidden");
        initReveals();
        window.scrollTo(0,0);
      }, 250);
    }
  }, 35);
});

function initReveals(){
  const els = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, {threshold:.12});
  els.forEach(el => observer.observe(el));
}

/* Música: coloca tu archivo como "music.mp3" en esta misma carpeta. */
const audio = $("music");
audio.src = "music.mp3";
let playing = false;
$("musicBtn").addEventListener("click", async () => {
  try{
    if(!playing){ await audio.play(); playing=true; $("musicBtn").textContent="Ⅱ"; }
    else{ audio.pause(); playing=false; $("musicBtn").textContent="♫"; }
  }catch(e){
    alert("Añade un archivo llamado music.mp3 en la carpeta del proyecto.");
  }
});
