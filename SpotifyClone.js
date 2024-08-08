// // let playbtns=document.querySelectorAll(".playbtn");


function addborder(ele){
ele.style.border="4px solid green"
}

function removeborder(element){
    element.style.border="none"
}
   


// let audio=new Audio("audio.mp3");
// function playnaat(){  
//     audio.play()
// }

// function pausenaat(){
//     audio.pause()
// }



// let Gif = document.querySelector('.gif img');
// Gif.style.display="none"


// let play=document.querySelectorAll(".playbtn");
// let activeButton = null;

// play.forEach(function(playbtn){

//     playbtn.addEventListener("click",()=>{

//         if (activeButton && activeButton !== playbtn) {
//             activeButton.src = "play.png"; // Reset the previously active button to "play"
//         }

//         // Toggle the clicked button
//         if (playbtn.src.includes("play.png")) {
//             playbtn.src = "pause2.png";
//             activeButton = playbtn; // Set the current button as the active button
//             playnaat()
//         } else {
//             playbtn.src = "play.png";
//             activeButton = null; // No active button if it's paused again
//             pause()
//         }

//     //    if(playbtn.src.includes("play.png")){
//     //     playbtn.src="pause2.png"
//     //     Gif.style.display="block"
      
    
    
//     // }
        
//     //    else{
//     //     playbtn.src="play.png"
//     //     Gif.style.display="none"
//     //    }

//     })
   

        

//     })
    
   

//     // Variable to keep track of the currently active (paused) button
    
    
//     // playButtons.forEach(function(playbtn) {
//     //     playbtn.addEventListener("click", () => {
//     //         // If there is an active button and it's not the current button, reset it
//     //         if (activeButton && activeButton !== playbtn) {
//     //             activeButton.src = "play.png"; // Reset the previously active button to "play"
//     //         }
    
//     //         // Toggle the clicked button
//     //         if (playbtn.src.includes("play.png")) {
//     //             playbtn.src = "pause2.png";
//     //             activeButton = playbtn; // Set the current button as the active button
//     //         } else {
//     //             playbtn.src = "play.png";
//     //             activeButton = null; // No active button if it's paused again
//     //         }
//     //     });
//     // });
    


// // play.forEach(function(stopbtn){
// //     stopbtn.addEventListener("click",()=>{
// //         stopbtn.src="play.png";
      
// //     })
// // })















// //

// // naat.addEventListener("click",()=>{
  
   
// //     playnaat()
// //     naat.innerText="playing"
// // })



// ********  N e w  C o d e  ********





// let audio1=new Audio("naat 1.mp3")
// function playnaat1(){
//     audio1.play()
// }
// let audio2=new Audio("naat 2.mp3")
// function playnaat2(){
//     audio2.play()
// }
// let audio3=new Audio("naat 3.mp3")
// function playnaat3(){
//     audio3.play()
// }
// let audio4=new Audio("naat 4.mp3")
// function playnaat4(){
//     audio4.play()
// }
// let audio5=new Audio("naat 5.mp3")
// function playnaat5(){
//     audio5.play()
// }

// function pauseAll(){
//     audio1.pause()
//     audio2.pause()
//     audio3.pause()
//     audio4.pause()
//     audio5.pause()
// }

// function pausenaat1(){
//     audio1.pause()
// }
// function pausenaat2(){
//     audio2.pause()
// }
// function pausenaat3(){
//     audio3.pause()
// }
// function pausenaat4(){
//     audio4.pause()
// }
// function pausenaat5(){
//     audio5.pause()
// }

// let Gif=document.querySelector(".gif img")

// Gif.style.display="none"



// let activeButton = null;



// let firstbtn=document.querySelector(".SardaraNabiplaybtn")
// firstbtn.addEventListener("click",()=>{
//     if(firstbtn.src.includes("play.png")){
//         firstbtn.src="pause2.png"
//                     playnaat1()
//                     Gif.style.display="block"
//                     // activeButton = playbtn;
//                 }

//                 else{
//                     firstbtn.src="play.png"
//                     pausenaat1()
//                     Gif.style.display="none"
//                     // activeButton = null;
//                 }
// })





// let secondbtn=document.querySelector(".Zanzeerbanplaybtn") 
// secondbtn.addEventListener("click",()=>{
//     if(secondbtn.src.includes("play.png")){
//         secondbtn.src="pause2.png"
//                     playnaat2()
//                     Gif.style.display="block"
//                     // activeButton = playbtn;
//                 }
//                 else{
//                     secondbtn.src="play.png"
//                     pausenaat2()
//                     Gif.style.display="none"
//                     // activeButton = null;
//                 }
// })










// let thirdbtn=document.querySelector(".Madinaplaybtn")



// thirdbtn.addEventListener("click",()=>{
//     if(thirdbtn.src.includes("play.png")){
//         thirdbtn.src="pause2.png"
//                     playnaat3()
//                     Gif.style.display="block"
//                     // activeButton = playbtn;
//                 }
//                 else{
//                     thirdbtn.src="play.png"
//                     pausenaat3()
//                     Gif.style.display="none"
//                     // activeButton = null;
//                 }
// })






// let fourthbtn=document.querySelector(".Dalayplaybtn")



// fourthbtn.addEventListener("click",()=>{
//     if(fourthbtn.src.includes("play.png")){
//         fourthbtn.src="pause2.png"
//                     playnaat4()
//                     Gif.style.display="block"
//                     // activeButton = playbtn;
//                 }
//                 else{
//                     fourthbtn.src="play.png"
//                     pausenaat4()
//                     Gif.style.display="none"
//                     // activeButton = null;
//                 }
// })








// let fifthbtn=document.querySelector(".Hanzalaplaybtn")



// fifthbtn.addEventListener("click",()=>{
//     if(fifthbtn.src.includes("play.png")){
//         fifthbtn.src="pause2.png"
//                     playnaat5()
//                     Gif.style.display="block"
//                     // activeButton = playbtn;
//                 }
//                 else{
//                     fifthbtn.src="play.png"
//                     pausenaat5()
//                     Gif.style.display="none"
//                     // activeButton = null;
//                 }
// })



// let Bigbtn=document.querySelector("#Bigbtn")


// let Gif=document.querySelector(".gif img")

// Gif.style.display="none"


// Bigbtn.addEventListener('click',()=>{
//     if(Bigbtn.src.includes("Bigplaybtn.png")){
//         Bigbtn.src="pause.png"
//        item.play()
//        Gif.style.display="block"
//     }
//     else{
//         Bigbtn.src="Bigplaybtn.png"
//         item.pause()
//         Gif.style.display="none"
//     }

// })



// let audio1=new Audio("naat 1.mp3");
// let audio2=new Audio("naat 2.mp3");
// let audio3=new Audio("naat 3.mp3");
// let audio4=new Audio("naat 4.mp3");
// let audio5=new Audio("naat 5.mp3");


// function pause(){
//     audio1.pause()
//     audio2.pause()
//     audio3.pause()
//     audio4.pause()
//     audio5.pause()
// }
// let activebtns=null;


// let playbtns=[
//     // { playbtn: document.querySelector(".SardaraNabiplaybtn"), play: () => audio1.play(), pause: () => audio1.pause() },
//     {btn:document.querySelector(".SardaraNabiplaybtn"),play:()=>audio1.play(),pause:()=>audio1.pause()},
//     {btn:document.querySelector(".Zanzeerbanplaybtn"),play:()=>audio2.play(),pause:()=>audio2.pause()},
//     {btn:document.querySelector(".Madinaplaybtn"),play:()=>audio3.play(),pause:()=>audio3.pause()},
//     {btn:document.querySelector(".Dalayplaybtn"),play:()=>audio4.play(),pause:()=>audio4.pause()},
//     {btn:document.querySelector(".Hanzalaplaybtn"),play:()=>audio5.play(),pause:()=>audio5.pause()}
// ]


// playbtns.forEach(function(item){
//     item.btn.addEventListener("click",()=>{

//         if(activebtns && activebtns!==item.btn){
//             activebtns.src="play.png"
//             pause()
//         }
//         if (item.btn.src.includes("play.png")) {
//                         item.btn.src = "pause2.png"; // Change the current button to "pause"
//                         item.play(); // Play the audio
//                         Gif.style.display = "block"; // Show the GIF
                       
//                         activebtns = item.btn; // Set the current button as the active one
//                     } else {
//                         item.btn.src = "play.png"; // Change the current button to "play"
//                         item.pause(); // Pause the audio
//                         Gif.style.display = "none"; // Hide the GIF
//                         activebtns = null; // No active button now
//                     }

//     })
// })




// let audio1 = new Audio("naat 1.mp3");
// let audio2 = new Audio("naat 2.mp3");
// let audio3 = new Audio("naat 3.mp3");
// let audio4 = new Audio("naat 4.mp3");
// let audio5 = new Audio("naat 5.mp3");

// function pausenaat() {  
//     audio1.pause();
//     audio2.pause();
//     audio3.pause();
//     audio4.pause();
//     audio5.pause();
// }


// let activeButton = null;

// let playButtons = [
//     { playbtn: document.querySelector(".SardaraNabiplaybtn"), play: () => audio1.play(), pause: () => audio1.pause() },
//     { playbtn: document.querySelector(".Zanzeerbanplaybtn"), play: () => audio2.play(), pause: () => audio2.pause() },
//     { playbtn: document.querySelector(".Madinaplaybtn"), play: () => audio3.play(), pause: () => audio3.pause() },
//     { playbtn: document.querySelector(".Dalayplaybtn"), play: () => audio4.play(), pause: () => audio4.pause() },
//     { playbtn: document.querySelector(".Hanzalaplaybtn"), play: () => audio5.play(), pause: () => audio5.pause() }
// ];

// playButtons.forEach(function(item) {
//     item.playbtn.addEventListener("click", () => {
//         // If there is an active button and it's not the current button, reset it
//         if (activeButton && activeButton !== item.playbtn) {
//             activeButton.src = "play.png"; // Change the previous button to "play"
//             pausenaat(); // Pause all audio
//             Gif.style.display = "none"; // Hide the GIF
//         }

//         // Toggle the current button
//         if (item.playbtn.src.includes("play.png")) {
//             item.playbtn.src = "pause2.png"; // Change the current button to "pause"
//             item.play(); // Play the audio
//             Gif.style.display = "block"; // Show the GIF
//             activeButton = item.playbtn; // Set the current button as the active one
//         } else {
//             item.playbtn.src = "play.png"; // Change the current button to "play"
//             item.pause(); // Pause the audio
//             Gif.style.display = "none"; // Hide the GIF
//             activeButton = null; // No active button now
//         }
//     });
// });
































// playbuttons.forEach(function(playbtn) {
//     playbtn.addEventListener("click",()=>{

//         if (activeButton && activeButton !== playbtn) {
//             activeButton.src = "play.png"; // Change the previous button to "play"
//         }


//         if(playbtn.src.includes("play.png")){
//             playbtn.src="pause2.png"
//             playnaat()
//             Gif.style.display="block"
//             activeButton = playbtn;
//         }
//         else{
//             playbtn.src="play.png"
//             pausenaat()
//             Gif.style.display="none"
//             activeButton = null;
//         }
       
//     })

// });










// let audio1 = new Audio("naat 1.mp3");
// let audio2 = new Audio("naat 2.mp3");
// let audio3 = new Audio("naat 3.mp3");
// let audio4 = new Audio("naat 4.mp3");
// let audio5 = new Audio("naat 5.mp3");

// function pause() {
//     audio1.pause();
//     audio2.pause();
//     audio3.pause();
//     audio4.pause();
//     audio5.pause();
// }

// let activebtns = null;
// let currentAudio = null;

// let playbtns = [
//     {btn: document.querySelector(".SardaraNabiplaybtn"), audio: audio1},
//     {btn: document.querySelector(".Zanzeerbanplaybtn"), audio: audio2},
//     {btn: document.querySelector(".Madinaplaybtn"), audio: audio3},
//     {btn: document.querySelector(".Dalayplaybtn"), audio: audio4},
//     {btn: document.querySelector(".Hanzalaplaybtn"), audio: audio5}
// ];

// let range = document.getElementById("range");
// let Gif = document.querySelector(".gif img");

// Gif.style.display = "none";

// playbtns.forEach(function(item) {
//     item.btn.addEventListener("click", () => {
//         if (activebtns && activebtns !== item.btn) {
//             activebtns.src = "play.png";
//             pause();
//             Gif.style.display = "none";
//         }
//         if (item.btn.src.includes("play.png")) {
//             item.audio.currentTime = 0; // Reset to start
//             item.btn.src = "pause2.png"; // Change the current button to "pause"
//             item.audio.play(); // Play the audio
//             currentAudio = item.audio;
//             Gif.style.display = "block"; // Show the GIF
//             activebtns = item.btn; // Set the current button as the active one
//         } else {
//             item.btn.src = "play.png"; // Change the current button to "play"
//             item.audio.pause(); // Pause the audio
//             Gif.style.display = "none"; // Hide the GIF
//             activebtns = null; // No active button now
//             currentAudio = null;
//         }
//     });

//     item.audio.addEventListener("timeupdate", () => {
//         range.value = (item.audio.currentTime / item.audio.duration) * 100;
//     });
// });

// range.addEventListener("input", () => {
//     if (currentAudio) {
//         currentAudio.currentTime = (range.value / 100) * currentAudio.duration;
//     }
// });


let Gif=document.querySelector(".gif img")
Gif.style.display='none'

let audio1 = new Audio("naat 1.mp3");
let audio2 = new Audio("naat 2.mp3");
let audio3 = new Audio("naat 3.mp3");
let audio4 = new Audio("naat 4.mp3");
let audio5 = new Audio("naat 5.mp3");

function pause() {
    audio1.pause();
    audio2.pause();
    audio3.pause();
    audio4.pause();
    audio5.pause();
}


let playbtns = [
        {btn: document.querySelector(".SardaraNabiplaybtn"), audio: audio1},
        {btn: document.querySelector(".Zanzeerbanplaybtn"), audio: audio2},
        {btn: document.querySelector(".Madinaplaybtn"), audio: audio3},
        {btn: document.querySelector(".Dalayplaybtn"), audio: audio4},
        {btn: document.querySelector(".Hanzalaplaybtn"), audio: audio5}
    ];
    
let activebtns = null;
    
let currentAudio = null;
let range=document.querySelector('#range')





    playbtns.forEach(function(item){

        item.btn.addEventListener("click",()=>{
            if(activebtns && activebtns !==item.btn)
                activebtns.src="play.png"
                pause()
                
            if(item.btn.src.includes("play.png")){
                item.btn.src="pause2.png"
                item.audio.play()
                activebtns=item.btn
                currentAudio=item.audio;
                item.audio.currentTime=0;
                Gif.style.display='block'
            }
            else{
                item.btn.src="play.png"
                item.audio.pause()
                activebtns=null;
                currentAudio=null;
                Gif.style.display='none'
            }
        
            })
            item.audio.addEventListener("timeupdate",()=>{
                range.value=(item.audio.currentTime/item.audio.duration)*100
            })
            range.addEventListener("input", () => {
                if (currentAudio) {
                    currentAudio.currentTime = (range.value / 100) * currentAudio.duration;
                }
            });
        
    })


    const volumeslider=document.querySelector("#volume")
    volumeslider.addEventListener("input",()=>{
        if(currentAudio){
            currentAudio.volume =volumeslider.value/100
        }
    })

    const li=document.querySelectorAll(".li-H")

    const AllBars=document.querySelectorAll(".naatbar")

    const Footer=document.querySelector(".footer")


    let btnsLightMode=[

        {btnLightMode: document.querySelector(".SardaraNabiplaybtn")},
        {btnLightMode: document.querySelector(".Zanzeerbanplaybtn")},
        {btnLightMode: document.querySelector(".Madinaplaybtn")},
        {btnLightMode: document.querySelector(".Dalayplaybtn")},
        {btnLightMode: document.querySelector(".Hanzalaplaybtn")}
    ];

    document.addEventListener('DOMContentLoaded', () => {
        // Wait until the HTML document is fully loaded and parsed before running the JavaScript code.
        const themeToggleBtn = document.getElementById('theme-toggle');
        // Select the button element with the ID 'theme-toggle'.
        
        const body = document.body;
        // Select the body element of the document.
        
        const navbar = document.querySelector('.navbar');
        li.forEach(function(links){
            links.style.color = 'black'
            links.style.fontSize="25px"
            links.style.fontFamily="import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap')"
        })
        // Select the first element in the document with the class 'navbar'.
    
        themeToggleBtn.addEventListener('click', () => {
            // Add an event listener to the theme toggle button that listens for 'click' events.
            
            body.classList.toggle('dark-theme');
            // Toggle the 'dark-theme' class on the body element. If the class is present, it will be removed; if it's not present, it will be added.
            
            navbar.classList.toggle('dark-theme');
            // Toggle the 'dark-theme' class on the navbar element. Same behavior as above.
            
    
            if (body.classList.contains('dark-theme')) {
                // Check if the body element currently has the 'dark-theme' class.
                                
    btnsLightMode.forEach(function(LightModebtn){
        LightModebtn.btnLightMode.style.backgroundColor ="grey"
    })
                themeToggleBtn.textContent = 'Light Theme';
                // If the 'dark-theme' class is present, change the button text to 'Light Theme'.
                li.forEach(function(links){
                    links.style.color = 'white'
                    links.style.fontSize="25px"
                    links.style.fontFamily="import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap')"
                })
               
                AllBars.forEach(function(bars){
                    bars.style.backgroundColor="grey"
                })
                 Footer.style.backgroundColor="black"
            

            } else {
                themeToggleBtn.textContent = 'Dark Theme';
                // If the 'dark-theme' class is not present, change the button text to 'Dark Theme'.
                li.forEach(function(links){
                    links.style.color = 'black'
                    links.style.fontSize="25px"
                    links.style.fontFamily="import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap')"
                })
                AllBars.forEach(function(bars){
                    bars.style.backgroundColor="white"
                })
                Footer.style.backgroundColor="white"

                                
    btnsLightMode.forEach(function(LightModebtn){
        LightModebtn.btnLightMode.style.backgroundColor ="white"
    })
            }
        });
    });
    





    