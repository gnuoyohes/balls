import { animate, press } from "motion"

var infoCard = document.getElementById("info-card")
var openBtn = document.getElementById("open-info-btn")
var closeBtn = document.getElementById("close-info-btn")

openBtn.classList.remove("hidden")
animate(infoCard, { scale: 0 })

// var showInfo = false

press(openBtn, () => {
    infoCard.classList.remove("hidden")
    return () => {
        animate(infoCard, { scale: [0, 0.8] }, { type: "spring", stiffness: 100 })
        animate(infoCard, { scale: 1 }, { type: "spring", stiffness: 70 })
        const animation = animate(openBtn, { opacity: [1, 0] }, { duration: 0.2 })
        animation.then(() => {
            openBtn.classList.add("hidden")
        })
    }
})

press(closeBtn, () => {
    return () => {
        // animate(infoCard, { scale: 0 }, { type: "spring", stiffness: 100 })
        openBtn.classList.remove("hidden")
        animate(openBtn, { opacity: [0, 1] }, { duration: 0.2 })
        const animation = animate(infoCard, { scale: [1, 0] }, { duration: 0.2 }, { type: "spring", stiffness: 100 })
        animation.then(() => {
            // infoCard.classList.add("invisible")
        })
    }
})