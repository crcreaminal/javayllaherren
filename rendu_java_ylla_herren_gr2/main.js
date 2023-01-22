const bouton = document.getElementById("bouton");
bouton.addEventListener("click", ()=>{
  document.body.style.backgroundColor = `rgb(
    ${Math.floor(Math.random()*225)},
    ${Math.floor(Math.random()*225)},
    ${Math.floor(Math.random()*225)}
)`; ;
});
// changement de couleur aléatoire 

const titre = "Ylla Herren"
let i = 0;

const bouton2 = document.getElementById("bouton2");
bouton.addEventListener("click", ()=>{
  titre.style.transform = `translateX(${i}px)`;
  i++;

  if (i >= window.innerWidth) {
    clearInterval(interval);

    const interval2 = setInterval(() => {
      titre.style.transform = `translateX(${i}px)`;
      i--;

      if (i <= 0)  {
        clearInterval(interval2);
      }
    });
  }
});