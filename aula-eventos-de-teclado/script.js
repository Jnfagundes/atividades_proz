const linkPerfil = document.getElementById("link-perfil");
const navPerfil = document.getElementById("nav-perfil");

linkPerfil.addEventListener("mouseover", ()=> {
  navPerfil.style.display = "block"
})

linkPerfil.addEventListener("mouseleave", ()=> {
  navPerfil.style.display = "none";
});

window.addEventListener("keydown", (e) => {
  console.log(e.key);
});
