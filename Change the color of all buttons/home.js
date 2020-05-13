    var all_buttons = document.getElementsByTagName('button');
    
    var copyAllButtons = [];
    for(let i=0 ; i < all_buttons.length ; i++){
        copyAllButtons.push(all_buttons[i].classList[1]);
    }
    
    function buttonColorChange(buttonThingy){
        if (buttonThingy.value === 'red'){
            buttonsRed();
        }
        else if (buttonThingy.value === 'green'){
            buttonsGreen();
        }
        else if ( buttonThingy.value === 'reset'){
            buttonColorReset();
        }
        else if (buttonThingy.value === 'random'){
            randomColors();
        }
    }
    
    function buttonsRed(){
        for(let i = 0 ; i < all_buttons.length ; i++){
            all_buttons[i].classList.remove(all_buttons[i].classList[1]);
            all_buttons[i].classList.add('btn-danger');
        }
    }
    function buttonsGreen(){
        for(let i = 0 ; i < all_buttons.length ; i++){
            all_buttons[i].classList.remove(all_buttons[i].classList[1]);
            all_buttons[i].classList.add('btn-success');
        }
    }
    function buttonColorReset(){
        for(let i = 0 ; i < all_buttons.length ; i++){
            all_buttons[i].classList.remove(all_buttons[i].classList[1]);
            all_buttons[i].classList.add(copyAllButtons[i]);
        }
    }
    function randomColors(){
        let Choices = ['btn-primary' , 'btn-success' , 'btn-danger' , 'btn-warning'];
        
        for(let i = 0 ; i < all_buttons.length ; i++ ){
            let randomNumber = Math.floor(Math.random() * 4);
            all_buttons[i].classList.remove(all_buttons[i].classList[1]);
            all_buttons[i].classList.add(Choices[randomNumber]);
        }
    
    }