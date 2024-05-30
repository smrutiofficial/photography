// ===================================================================
const next = document.querySelector(".next");
const prev = document.querySelector(".previous");
const slides = document.querySelectorAll(".slide");

let index = 0;
display(index);

function display(index) {
  slides.forEach((slide) => {
    slide.style.display = "none";
  });
  slides[index].style.display = "flex";
}

function nextSlide() {
  index++;
  if (index > slides.length - 1) {
    index = 0;
  }
  display(index);
}

function prevSlide() {
  index--;
  if (index < 0) {
    index = slides.length - 1;
  }
  display(index);
}

next.addEventListener("click", nextSlide);
prev.addEventListener("click", prevSlide);


gsap.from(".scrolltx", {
    y: 200,
    duration: 2,
    delay: 3
})
gsap.from("#camera", {
    x: 200,
    duration: 2
})
gsap.from(".buttonsrow", {
    x: -1000,
    duration: 3,
    delay: 3
})
gsap.from("#h_tit", {
    x: -1000,
    duration: 2,
    delay: 1
})
gsap.from("#h_subt", {
    x: 1000,
    duration: 3,
    delay: 2,
    opacity: 0
})
gsap.from(".pannel", {
    y: 200,
    duration: 2,
    delay: 4
})
gsap.from(".rotalm", {
    opacity: 0,
    x: 200,
    duration: 3,
    scrollTrigger: {
        trigger: ".rotalm",
        scroller: "body",
        scrub: 1,
        start: "top 60%",
        end: "top 10%"
    }
})
gsap.from(".procont", {
    opacity: 0,
    y: -200,
    duration: 3,
    scrollTrigger: {
        trigger: ".procont",
        scroller: "body",
        scrub: 1,
        // markers:true,
        start: "top 80%",
        end: "top 5%"
    }
})

// about page
gsap.from(".imgcon_about", {
    opacity: 0,
    x: -200,
    duration: 2,
    scrollTrigger: {
        trigger: ".imgcon_about",
        scroller: "body",
        scrub: 1,
        // markers:true,
        start: "top 80%",
        end: "top 5%"
    }
})
gsap.from(" #sectag", {
    opacity: 0,
    x: 200,
    duration: 2,
    scrollTrigger: {
        trigger: " #sectag",
        scroller: "body",
        scrub: 1,
        // markers:true,
        start: "top 80%",
        end: "top 5%"
    }
})

gsap.from(" .divcon_two h1", {
    opacity: 0,
    x: -200,
    duration: 3,
    scrollTrigger: {
        trigger: " .divcon_two h1",
        scroller: "body",
        scrub: 1,
        // markers:true,
        start: "top 80%",
        end: "top 5%"
    }
})
gsap.from(" #abcont", {
    opacity: 0,
    x: 200,
    duration: 3,
    scrollTrigger: {
        trigger: " #abcont",
        scroller: "body",
        scrub: 1,
        // markers:true,
        start: "top 80%",
        end: "top 5%"
    }
})
gsap.from(".skills .part", {
    opacity: 0,
    y: 100,
    duration: 3,
    stagger: 1,
    scrollTrigger: {
        trigger: ".skills .part",
        scroller: "body",
        scrub: 1,
        // markers:true,
        // start: "top 80%",
        end: "top 30%"
    }
})

// services page
document.querySelectorAll('.contsecty').forEach(element => {
    gsap.from(element, {
        opacity: 0,
        y: -200,
        duration: 3,
        scrollTrigger: {
            trigger: element,
            scroller: "body",
            scrub: 1,
            start: "top 80%",
            end: "top 5%",
        }
    });
});
document.querySelectorAll('.imgcon').forEach(element => {
    gsap.from(element, {
        opacity: 0,
        x: -200,
        duration: 3,
        scrollTrigger: {
            trigger: element,
            scroller: "body",
            scrub: 1,
            start: "top 80%",
            end: "top 5%",
        }
    });
});
//videography
// Animate the section title
document.querySelectorAll('#sectag_se').forEach(element => {
    gsap.from(element, {
        opacity: 0,
        x: 200,
        duration: 2,
        scrollTrigger: {
            trigger: element,
            scroller: "body",
            scrub: 1,
            start: "top 80%",
            end: "top 5%",
        }
    });
});

document.querySelectorAll('#sectit').forEach(element => {
    gsap.from(element, {
        opacity: 0,
        x: -200,
        duration: 1.5,
        scrollTrigger: {
            trigger: element,
            scroller: "body",
            start: "top 80%",
            end: "top 10%",
            scrub: 1,
            // markers: true // Uncomment for debugging
        }
    });
});
// Animate the first icon image
gsap.from("#icon2", {
    opacity: 0,
    scale: 0.5,
    duration: 2,
    scrollTrigger: {
        trigger: "#icon2",
        start: "top 80%",
        end: "top 50%",
        scrub: 1,
    }
});

// Animate the images inside .imgconvid
gsap.from(".imgconvid", {
    opacity: 0,
    y: 100,
    duration: 2,
    stagger: 0.3,
    scrollTrigger: {
        trigger: ".imgconvid",
        start: "top 80%",
        end: "top 50%",
        scrub: 1,
    }
});

// Animate the second icon image
gsap.from("#icon3", {
    opacity: 0,
    x: -100,
    duration: 2,
    scrollTrigger: {
        trigger: "#icon3",
        start: "top 80%",
        end: "top 50%",
        scrub: 1,
    }
});

// Animate the paragraph inside the second .subvsec
gsap.from(".subvsec p", {
    opacity: 0,
    x: 200,
    duration: 2,
    scrollTrigger: {
        trigger: ".subvsec p",
        start: "top 80%",
        end: "top 50%",
        scrub: 1,
    }
});

// Animate the line inside the second .subvsec
gsap.from(".line_v", {
    opacity: 0,
    scaleX: 0,
    transformOrigin: "left center",
    duration: 2,
    scrollTrigger: {
        trigger: ".line_v",
        start: "top 80%",
        end: "top 50%",
        scrub: 1,
    }
});


// Animate elements within .glassbg
gsap.from(".glassbg .we", {
    opacity: 0,
    y: -50,
    duration: 2,
    stagger: 0.3,
    scrollTrigger: {
        trigger: ".glassbg",
        start: "top 80%",
        end: "top 10%",
        scrub: 1,
        // markers: true // Uncomment for debugging
    }
});


// Animate odd items
gsap.utils.toArray('.item:nth-child(odd)').forEach(item => {
    gsap.from(item, {
        opacity: 0,
        scale:0,
        x: -100, // Slide in from the left
        duration: 1,
        scrollTrigger: {
            trigger: item,
            // start: 'top 80%', // Trigger when the top of the item hits 80% of the viewport height
            scrub:1,
            toggleActions: 'play none none reverse' // Play animation on scroll in, reverse on scroll out
        }
    });
});

// Animate even items
gsap.utils.toArray('.item:nth-child(even)').forEach(item => {
    gsap.from(item, {
        opacity: 0,
        scale:0,
        x: 10, // Slide in from the right
        duration: 1,
        scrollTrigger: {
            trigger: item,
            // start: 'top 90%', // Trigger when the top of the item hits 80% of the viewport height
            scrub:1,
            toggleActions: 'play none none reverse' // Play animation on scroll in, reverse on scroll out
        }
    });
});











// -------------------------------------
var cursor = document.querySelector("#cursor");
var main = document.querySelector("body");
var camera = document.querySelector(".imgvtyu");
var btn1 = document.querySelector("#firstone");
var btn2 = document.querySelector("#secone");
// Ensure the cursor's transform origin is set to center
cursor.style.transformOrigin = "center center";


main.addEventListener("mousemove", function (val) {
    gsap.to(cursor, {
        mixBlendMode: "difference",
        x: val.clientX - cursor.offsetWidth / 2,
        y: val.clientY - cursor.offsetHeight / 2,
        duration: 0.4
    })
    camera.addEventListener("mouseenter", function () {
        cursor.innerHTML = "View Work"
        gsap.to(cursor, {
            scale: 2,
        })
    })
    camera.addEventListener("mouseleave", function () {
        cursor.innerHTML = ""
        gsap.to(cursor, {
            scale: 1,
        })
    })

    btn1.addEventListener("mouseenter", function () {
        gsap.to(cursor, {
            width: 120,
            height: 120,
        })
    })
    btn1.addEventListener("mouseleave", function () {
        gsap.to(cursor, {
            width: 40,
            height: 40,
        })
    })

    btn2.addEventListener("mouseenter", function () {

        gsap.to(cursor, {
            width: 120,
            height: 120,
        })
    })
    btn2.addEventListener("mouseleave", function () {

        gsap.to(cursor, {
            width: 40,
            height: 40,
        })
    })
})



