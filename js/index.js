
// ***************nav scroll effect js + scrolling up btn js************** //
let nav = document.getElementById("nv-st-sc");
let logo = document.getElementById("logo");
let up_scrolling_btn = document.getElementById("up-scrolling-btn");
window.addEventListener("scroll", function (e) {
    // print "false" if direction is down and "true" if up
    let scroll = this.scrollY;
    let y = this.oldScroll > this.scrollY;
    this.oldScroll = this.scrollY;
    // ***************nav scroll effect js************** //
    if (y) {
        if (scroll == 0) {
            nav.classList.remove("sticky")
            logo.src = "icons/logo.svg";
        } else {
            nav.classList.add("sticky")
            logo.src = "icons/logo-dark.svg";
            nav.style.cssText = "top:-0rem";


        }
    } else {
        nav.style.cssText = "top:-128px"
    }
    // ***************scrolling up btn js************** //
    if (scroll > 300) {
        up_scrolling_btn.style.right = "30px";

    } else {
        up_scrolling_btn.style.right = "-50px";
    }
    up_scrolling_btn.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;
        console.log(document.documentElement.scrollTop);
    })
})

// ***************nav scroll effect js************** //

let searchicon2 = document.getElementById("search-icon-2");
let CI2 = document.getElementById("CI2");
let CI1 = document.getElementById("CI1");
CI1.addEventListener("click", () => {
    const displatofci = CI2.style.visibility
    if (displatofci == "visible") {
        CI2.style.cssText = ""
        CI1.className = 'fa fa-search'

    } else {
        CI2.style.cssText = "bottom: -8rem;visibility: visible;opacity: 1;"
        CI1.className = 'fa-solid fa-x'
    }

})
// ***************video-btn js************** //
let videoplayer = document.getElementsByClassName("video-function_class");
for (let i = 0; i < videoplayer.length; i++) {
    const videoplayerbutton = videoplayer[i];
    videoplayerbutton.addEventListener("click", () => {
        let videodiv = document.createElement("div");
        let closeicon = document.createElement("i");
        videodiv.classList.add("videodiv");
        closeicon.setAttribute("class", "fa-solid fa-x close-icon")
        videodiv.append(closeicon)
        let video = document.createElement("video");
        video.classList.add("video");
        video.setAttribute("src", `images/video${i}.mkv`);//oly files with name video[number] and mkv extention
        video.setAttribute("controll", " j")
        videodiv.appendChild(video)
        document.body.insertBefore(videodiv, document.body.firstElementChild)

        closeicon.addEventListener("click", () => {
            closeicon.parentElement.remove()
        })

    })
}

// ***********radio-btn js**************************//
// let radiobtnss = document.getElementsByClassName("radio-btn");
// for (let i = 0; i < radiobtnss.length; i++) {
//     const radioBtn = radiobtnss[i];
//     radioBtn.addEventListener("click", () => {
//         radiobtnss[0].classList = "radio-btn";
//         radiobtnss[1].classList = "radio-btn";
//         radiobtnss[2].classList = "radio-btn";
//         // console.log(radiobtnss[i])
//         radioBtn.classList.add("r-active")
//     })
// }




// ***********bar fill js**************************//
let sec_3 = document.getElementById("sec-3")
window.addEventListener("scroll", () => {
    let progressbars = document.getElementsByClassName("b");
    if (window.scrollY >= sec_3.offsetTop - 300) {
        for (let i = 0; i < progressbars.length; i++) {
            const p_bar = progressbars[i];
            let span_attr = p_bar.getAttribute("data-progress-value");
            p_bar.style.width = span_attr + "%";
        }
    } else {
        for (let i = 0; i < progressbars.length; i++) {
            const p_bar = progressbars[i];
            p_bar.style.width = 0 + "%";
        }
    }
})

//************circular progressbr************************* */
// let sec_7_card = document.getElementsByClassName("sec-7-card");
// console.log(sec_7_card);
// for (let z = 0; z < sec_7_card.length; z++) {
//     const card_r_p = sec_7_card[z];
//     let data_round_progress = parseInt(card_r_p.getAttribute("data-round-progress"));
//     console.log(data_round_progress);

// }
// let progressBar = document.querySelector(".circular-progress");
// let valueContainer = document.querySelector(".value-container");
// let progressValue = 0;
// let progressEndValue = 65;
// let speed = 100;
// let progress = setInterval(() => {
//     progressValue++;
//     valueContainer.textContent= progressValue;
//     progressBar.style.background = `conic-gradient (#4d5bf9 ${progressValue * 3.6}deg,#cadcff ${progressValue * 3.6}deg`;
//     if (progressValue == progressEndValue) {
//         clearInterval(progress)
//     }
// })

