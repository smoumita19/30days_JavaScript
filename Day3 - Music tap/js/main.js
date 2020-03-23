window.addEventListener('load' , () => {
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".tabs div");
    const visual = document.querySelector(".visual");
    

    // console.log(sounds);
    //to make sound

    pads.forEach((tab , index) => {
        tab.addEventListener('click' , function(){
            sounds[index].currentTime = 0;
            sounds[index].play();

            // sounds[index].style.backgroundColor = black;

        });
        tab.addEventListener('dblclick', function(){
            sounds[index].pause();
        });
    });


});