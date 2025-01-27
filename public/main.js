/// Hamburger Menu Nav cibling ///
let hamburgerMenu = document.querySelector("#hamburger-menu")
let overlay = document.querySelector("#overlay")
let nav1 = document.querySelector("#nav-1")
let nav2 = document.querySelector("#nav-2")
let nav3 = document.querySelector("#nav-3")
let nav4 = document.querySelector("#nav-4")
let nav5 = document.querySelector("#nav-5")
let navItems = [nav1, nav2, nav3, nav4, nav5]

// Function Navbar //
function navAnimation(val1, val2) {
  navItems.forEach((nav, i) => {
    nav.classList.replace(`slide-${val1}-${i + 1}`, `slide-${val2}-${i + 1}`)
  })
}

function toggleNav() {
  // Toggle: Ouvrir/Fermer
  hamburgerMenu.classList.toggle("active")

  //   Toggle: Actier
  overlay.classList.toggle("overlay-active")

  if (overlay.classList.contains("overlay-active")) {
    // Animate In - Overlay
    overlay.classList.replace("overlay-slide-left", "overlay-slide-right")

    // Animate In - Nav Items
    navAnimation("out", "in")
  } else {
    // Animate Out - Overlay
    overlay.classList.replace("overlay-slide-right", "overlay-slide-left")

    // Animate Out - Nav Items
    navAnimation("in", "out")
  }
}

// Events Listeners
hamburgerMenu.addEventListener("click", toggleNav)
navItems.forEach((nav) => {
  nav.addEventListener("click", toggleNav)
})

// Anime DOM
document.addEventListener("DOMContentLoaded", () => {
  // overlay rota
  overlay.classList.add("overlay-slide-left")

  // Initialiser 
  navItems.forEach((nav, i) => {
    nav.classList.add(`slide-out-${i + 1}`)
  })
})




