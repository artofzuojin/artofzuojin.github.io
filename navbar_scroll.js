// document.addEventListener('DOMContentLoaded', function() {
//     number = document.getElementById("navbar");

//     let prevScrollpos = window.scrollY || document.body.scrollTop;

//     alert(prevScrollpos);

//     window.onscroll = function() {
//         let currentScrollPos = window.scrollY || document.body.scrollTop;
//         alert(currentScrollPos);

//         if (prevScrollpos > currentScrollPos) {
//             alert("scroll");
//             document.getElementById("navbar").style.top = "0";

//         } else {
//             document.getElementById("navbar").style.top = "-12px"; // Adjust the value based on your navbar height
//         }

//         prevScrollpos = currentScrollPos;
//     }
// });

// function test(){
//     alert('scroll');
// }


console.log('here');

// document.addEventListener('scroll', function() {
//     console.log('scrolling');
// }, {passive: true});


let prevScrollpos = window.scrollY || document.documentElement.scrollTop;

function alternate() {
    number = document.getElementById("navbar");

    // number = document.querySelector(".navbar");
    let currentScrollPos = window.scrollY || document.documentElement.scrollTop; 
    console.log("prev scroll: ", prevScrollpos);
    console.log("current scroll: ", currentScrollPos);

    if (prevScrollpos > currentScrollPos) {
        alert("scroll pt 2");
        document.getElementById("navbar").style.top = "0";
        // number.style.top = "0";

    } else {
        // document.getElementById("navbar").style.top = "-12px"; // Adjust the value based on your navbar height
        number.style.top = "12px"; // Adjust the value based on your navbar height

    }

    prevScrollpos = currentScrollPos;
    
}

window.addEventListener('wheel', alternate);