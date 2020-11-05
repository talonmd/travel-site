import "../styles/styles.css"

import "lazysizes"

import MobileMenu from "./modules/MobileMenu"
import RevealOnScroll from "./modules/RevealOnScroll"
import StickyHeader from "./modules/StickyHeader"
import ClientArea from "./modules/ClientArea"

// React related code goes here
import React from "react"
import ReactDOM from "react-dom"

import ReactComponent from "./modules/ReactComponent"

ReactDOM.render(<ReactComponent />, document.querySelector("#react-example"))

// end React related code

let modal

new MobileMenu()
new StickyHeader()
new ClientArea()

new RevealOnScroll(document.querySelectorAll(".feature-item"), 75)
new RevealOnScroll(document.querySelectorAll(".testimonial"), 60)

document.querySelectorAll(".open-modal").forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault()
    if (typeof modal == "undefined") {
      import(/* webpackChunkName: "modal" */ "./modules/Modal")
        .then((x) => {
          modal = new x.default()
          setTimeout(() => modal.openTheModal(), 20)
        })
        .catch(() => console.log("There was a problem."))
    } else {
      modal.openTheModal()
    }
  })
})

if (module.hot) {
  module.hot.accept()
}
