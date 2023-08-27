function togglemode() {
  const html = document.documentElement
  html.classList.toggle("light") 
  
  const img = document.querySelector("#perfil img")
  
  if (html.classList.contains('light')) {
    img.setAttribute("src", "./assets/macaco.png")

    img.setAttribute('alt', "macaco bacana")
  }

  else {
    img.setAttribute('src', './assets/luizin.png')

    img.setAttribute("alt", "luizin preto e branco")

  }


  

}