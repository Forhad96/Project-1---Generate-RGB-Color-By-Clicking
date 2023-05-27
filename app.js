// project requirwments 
// change backroground color rgb by clicking button 


// step 1 create onload function
window.onload = () => {
    main();
}

function main(){
    const body = document.body;
    const changeColor = document.querySelector(".change-color");
    

    changeColor.addEventListener("click", function(){
        const randomColor = rgbGen();

        body.style.backgroundColor = randomColor;
    });
}

// step 2: rbg color genarate function
function rgbGen(){
    const red = Math.floor(Math.random() * 255);
    const green =Math.floor(Math.random()* 255);
    const blue =Math.floor(Math.random()* 255);


    return `rgb(${red},${green},${green})`;
}

