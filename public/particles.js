


document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".cube").forEach((element) => {
        element.addEventListener("click", async function() {
            if(this.classList.contains('spin')){
                const diceRoll = await rollDice();
                let optionSelected;
                const activeBlank = document.querySelector(".blank.active");
                if(diceRoll == 1){
                    this.classList.remove('spin');
                    this.classList.add('one');
                    optionSelected = document.querySelector("#one p").textContent;
                    activeBlank.innerHTML = optionSelected;
                    activeBlank.classList.remove("blank");
                } else if(diceRoll == 2){
                    this.classList.remove('spin');
                    this.classList.add('two');
                    optionSelected = document.querySelector("#one p").textContent;
                    activeBlank.innerHTML = optionSelected;
                    activeBlank.classList.remove("blank");
                } else if(diceRoll == 3){
                    this.classList.remove('spin');
                    this.classList.add('three');
                    optionSelected = document.querySelector("#one p").textContent;
                    activeBlank.innerHTML = optionSelected;
                    activeBlank.classList.remove("blank");
                } else if(diceRoll == 4){
                    this.classList.remove('spin');
                    this.classList.add('four');
                    optionSelected = document.querySelector("#one p").textContent;
                    activeBlank.innerHTML = optionSelected;
                    activeBlank.classList.remove("blank");
                } else if(diceRoll == 5){
                    this.classList.remove('spin');
                    this.classList.add('five');
                    optionSelected = document.querySelector("#one p").textContent;
                    activeBlank.innerHTML = optionSelected;
                    activeBlank.classList.remove("blank");
                } else if(diceRoll == 6){
                    this.classList.remove('spin');
                    this.classList.add('six');
                    optionSelected = document.querySelector("#one p").textContent;
                    activeBlank.innerHTML = optionSelected;
                    activeBlank.classList.remove("blank");
                }
            }
            else {
                this.classList.remove('one','two','three','four','five','six');
                this.classList.add('spin');
            }
        });
    });
});


async function rollDice(){
    const APIResponse = (await fetch('https://rolz.org/api/?1d6.json'));
    const diceRoll = await APIResponse.json();
    return diceRoll.result;
}