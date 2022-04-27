import {questHM, hangManTurn} from './data.js';
const inputText = document.querySelector(".hangman_input input");
class HangMan{
    words = [];
    hideWords = [];
    suggest = "";
    turns = {count: 0, limit: 0};
    get size(){
        return this.words.length;
    }
    constructor(props, turns){
        let wordsH = props.words.split(" ").join("");
        this.words = wordsH.split('');
        this.hideWords = wordsH.split('');
        this.suggest = props.suggest;
        this.turns.count = 0;
        this.turns.limit = turns;
    }
    checkRes(){
        if(this.words.join("") == this.hideWords.join("")){
            setTimeout(() => {
                alert("You're Winner");
                this.resetLines("hangman_text", this.words);
                location.reload();
            }, 500)
        }
    }
    checkOver(word){
        let flag = (this.findPosition(word).length > 0);
        if(!flag) this.turns.count = this.turns.count + 1;
        return this.turns.count;
    }
    findPosition(word){
        let position = [];
        this.hideWords.map((wo, i) => 
        (wo.toLowerCase() === word.toLowerCase()) ? position.push(i) : null);
        return position;
    }
    reachLines(word){
       return this.findPosition(word).map(wo => this.words[wo] = this.hideWords[wo]);   
    }
    hashLines(){
        const hashWords = this.words.fill("", 0, this.size);
        return this.words = hashWords;
    }
    printTurn(nameEle){
        const ele = document.querySelector(`.${nameEle}`);
        ele.src = `img/${this.turns.count}.png`;
    }
    printLines(nameEle, valEle){
        let result = "";
        const ele = document.querySelector(`.${nameEle}`);
        if(typeof valEle == "object")
            valEle.map(val => result += `<p>${val}</p>`)
        else result = `<p>${valEle}</p>`;
        return ele.innerHTML = result;
    }
    resetLines = (nameEle, words) => {
        HangM.hashLines();
        HangM.printLines(nameEle, words);
        this.turns.count = 0;
        HangM.printTurn("hangman_turn img");
    }
}
const HangM = new HangMan(questHM, hangManTurn);
HangM.resetLines("hangman_text", HangM.words);
HangM.printTurn("hangman_turn img");
HangM.printLines("hangman_suggets", HangM.suggest);
const activeHangM = (word) => {
    //console.log(HangM.checkOver(word));
    if(HangM.checkOver(word) < hangManTurn){
        HangM.reachLines(word);
        HangM.printLines("hangman_text", HangM.words);
        HangM.checkRes();
    } else {
        setTimeout(() => {
            alert("You lose");
            HangM.resetLines("hangman_text", HangM.words);
        }, 500);
    } 
    HangM.printTurn("hangman_turn img");
}
window.addEventListener("keydown", (e)=>{
    if(e.key === "Enter" && inputText.value !== ""){
        activeHangM(inputText.value);
        inputText.value = "";
    }
})