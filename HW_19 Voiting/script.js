let smilebox=document.querySelector('.SmileBox');

let smiles = ["😈", "😊", "⛅", "⛈", "😎"]; 
let Numberclick = Array(smiles.length).fill(0); 

function FirstTask() {
    smilebox.innerHTML = "";
    smiles.forEach((smile, index) => {
        let NewDiv = document.createElement("div");
        NewDiv.className = "smile";
        NewDiv.textContent = smile + " " + Numberclick[index];
       
        NewDiv.addEventListener("click", () => {
            Numberclick[index]++;
            FirstTask();
        });

        smilebox.appendChild(NewDiv);
    });
}

FirstTask(); 



