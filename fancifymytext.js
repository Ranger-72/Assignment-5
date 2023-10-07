// Name: Eduardo Mariano
// Date: Oct 6, 2023
// Class: CSC 193A
// Assignment 5

function modifyFontsize(){
   alert("Hello, World!");
   const tArea = document.getElementById("userinput");
   tArea.style.fontSize = "2em";                        // 2em = 24pt
}

function modifyFont(){
    const tArea = document.getElementById("userinput");
    const fancyBtn = document.getElementById("Fancy");
    const boringBtn = document.getElementById("Boring");

    if (fancyBtn.checked){
        tArea.style.fontWeight = "bold";
        tArea.style.textDecoration = "underline";
        tArea.style.color = "blue";
    }
    else if (boringBtn.checked){
        tArea.style.fontWeight = "normal";
    }
}

function modifyText(){
     const tArea = document.getElementById("userinput");
     let input = tArea.value;
     let pInput = input.split(" ");
     input = pInput.join("-Moo ");

     input = input.split("");
     for (let i = 0; i < input.length; i++ ){
        if (input[i] == "."){
            if (i != input.length-1)
            input[i+1] = "";
            input[i+2] = "";
            input[i+3] = "";
            input[i+4] = "";
        }
     }
     input = input.join("");

     pInput = input.split(" ");
     for (let i = 0; i < pInput.length; i++){
        
        let str = pInput[i]
        if(str.includes(".")){
            let str1 = str.replace(".","-Moo.");
            pInput[i] = str1;
        }

        if (i == pInput.length-1){
            if (!str.includes(".")){
                let str2 = str.concat("-Moo");
                pInput[i] = str2;
            }
        }
     }
     input = pInput.join(" ");

     input = input.toUpperCase();
     tArea.value = input;
}

