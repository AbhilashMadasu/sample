//Abhilash Madasu
module.exports = class Game{
    constructor(){
        this.horoscope = "";
        this.counter = 0;
        this.diceRoll;
        this.color="";
    }
    
    makeAMove(sInput)
    {
        if(this.counter==0)
        {
            this.counter=1;
            return [`Welcome to the horoscope generator. Would you like to know your horoscope? Yes or No?`];
        }
        else if(this.counter==1)
        {
            if(sInput.toLowerCase().match("yes")){
               this.counter=2;
                return[`You will now roll the dice to pick your lucky number`];}
            else if(sInput.toLowerCase().match("no")){
                this.counter=0;
            }
            else{
                this.counter=1;
                return[`Please enter a valid option`]
            }
        }
        else if (this.counter==2)
        {
            this.diceRoll = (Math.floor(Math.random() * 6)+1);
            this.counter=3;
            return[`Your lucky number is ${this.diceRoll}. You may now select a colour from BLACK or WHITE`];
        }
        else if(this.counter==3)
        {
            if(sInput.toLowerCase().match("black")){
                this.color="black";
                this.counter=4;
                return[`You chose color BLACK`];}
            else if(sInput.toLowerCase().match("white")){
                this.color="white";
                this.counter=4;
                return[`You chose color WHITE`];}            
            else {
                this.counter=3;
                return[`Please enter a valid color`]
            }
        }
        else if(this.counter==4)
        {
            this.counter=5;
            if(this.diceRoll==1 && this.color=="black")
            {
            this.horoscope=("You are a straighforward person.");
            return[this.horoscope];}

            else if(this.diceRoll==1 && this.color=="white")
            {
            this.horoscope=("You are a sweet person.");
            return[this.horoscope];}

            else if(this.diceRoll==2 && this.color=="black")
            {
            this.horoscope=("You are a humble person.");
            return[this.horoscope];}

            else if(this.diceRoll==2 && this.color=="white")
            {
            this.horoscope=("You are a sensitive person.");
            return[this.horoscope];}

            else if(this.diceRoll==3 && this.color=="black")
            {
            this.horoscope=("You are an honest person.");
            return[this.horoscope];}

            else if(this.diceRoll==3 && this.color=="white")
            {
            this.horoscope=("You are a polite person.");
            return[this.horoscope];}

            else if(this.diceRoll==4 && this.color=="black")
            {
            this.horoscope=("You are a conscious person.");
            return[this.horoscope];}

            else if(this.diceRoll==4 && this.color=="white")
            {
            this.horoscope=("You are a gentle person.");
            return[this.horoscope];}

            else if(this.diceRoll==5 && this.color=="black")
            {
            this.horoscope=("You are a kind person.");
            return[this.horoscope];}

            else if(this.diceRoll==5 && this.color=="white")
            {
            this.horoscope=("You are a generous person.");
            return[this.horoscope];}

            else if(this.diceRoll==6 && this.color=="black")
            {
            this.horoscope=("You are a cheerful person.");
            return[this.horoscope];}

            else if(this.diceRoll==6 && this.color=="white")
            {
            this.horoscope=("You are a funny person.");
            return[this.horoscope];}

        }
        else{
            this.counter=0;
            return[`You have generated your horoscope. Press any key to replay the game.`];
        }
        
    }
}

            
            
      