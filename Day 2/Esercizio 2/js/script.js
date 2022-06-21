let viewer = document.querySelector('#viewer'),
    btn = document.querySelector('#spendi');
    
    
btn.addEventListener('click', () => {  
    
    viewer.innerHTML = '';  //clean viewer
    var budget = 1000; //reset bugdet
    
    while (budget > 0) {
        let spent = Math.ceil(Math.random() * 100);//spend random number between 1 and 100

        if (spent > budget) {//prevent to spend more than budget
            spent = budget;
        }

        budget -= spent;//update budget
        
        viewer.innerHTML += `<p>Hai speso <b>${spent}</b>€`//show how much you spent

        if (budget < 500 && budget > 100) {//notify that half budget is reached
            viewer.innerHTML += '<p><i>Hai superato la metà del tuo budet!</i></p>';
        } else if (budget < 100) {//notify that most of the budget is spent
            viewer.innerHTML += '<p><i>Hai quasi finito i tuoi soldi!</i></p>';
        } else if (budget <= 0) {//notify that budget is over
            viewer.innerHTML += '<p><i>Non hai più soldi!</i></p>';
        }

        viewer.innerHTML += `<p class="last">Ti rimangono <b>${budget}€</b></p>`;//show updated budget
    }
});
