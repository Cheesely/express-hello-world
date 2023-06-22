


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
                    optionSelected = document.querySelectorAll("#" + activeBlank.dataset.number + " p span")[0].textContent;
                    activeBlank.innerHTML = optionSelected;
                    activeBlank.classList.remove("blank");
                } else if(diceRoll == 2){
                    this.classList.remove('spin');
                    this.classList.add('two');
                    optionSelected = document.querySelectorAll("#" + activeBlank.dataset.number + " p span")[1].textContent;
                    activeBlank.innerHTML = optionSelected;
                    activeBlank.classList.remove("blank");
                } else if(diceRoll == 3){
                    this.classList.remove('spin');
                    this.classList.add('three');
                    optionSelected = document.querySelectorAll("#" + activeBlank.dataset.number + " p span")[2].textContent;
                    activeBlank.innerHTML = optionSelected;
                    activeBlank.classList.remove("blank");
                } else if(diceRoll == 4){
                    this.classList.remove('spin');
                    this.classList.add('four');
                    optionSelected = document.querySelectorAll("#" + activeBlank.dataset.number + " p span")[3].textContent;
                    activeBlank.innerHTML = optionSelected;
                    activeBlank.classList.remove("blank");
                } else if(diceRoll == 5){
                    this.classList.remove('spin');
                    this.classList.add('five');
                    optionSelected = document.querySelectorAll("#" + activeBlank.dataset.number + " p span")[4].textContent;
                    activeBlank.innerHTML = optionSelected;
                    activeBlank.classList.remove("blank");
                } else if(diceRoll == 6){
                    this.classList.remove('spin');
                    this.classList.add('six');
                    optionSelected = document.querySelectorAll("#" + activeBlank.dataset.number + " p span")[5].textContent;
                    activeBlank.innerHTML = optionSelected;
                    activeBlank.classList.remove("blank");
                }
                document.querySelector(".blank").classList.add("active");
            }
            else {
                this.classList.remove('one','two','three','four','five','six');
                this.classList.add('spin');
                const activeOptions = document.querySelector(".options .active");
                const nextOptions = document.querySelector(".options .active~section");
                activeOptions.classList.remove("active");
                nextOptions.classList.remove("hidden");
                activeOptions.classList.add("hidden");
                nextOptions.classList.add("active");
            }
        });
    });
});


async function rollDice(){
    const APIResponse = (await fetch('https://rolz.org/api/?1d6.json'));
    const diceRoll = await APIResponse.json();
    return diceRoll.result;
}