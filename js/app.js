"use strict"

const min = document.querySelector('.min'),
max = document.querySelector('.max'),
btn = document.querySelector('.btn'),
text = document.querySelector('.result-number')

btn.addEventListener('click', ()=>{

    let minVAl = +min.value,
    maxVal = +max.value

    if(minVAl === 0 && maxVal === 0){
        alert("Avval sonlarni kiriting");
        return
    }else if(minVAl === 0){
        alert("MIN sonini kiriting");
        return
    }else if(maxVal === 0){
        alert("MIN sonini kiriting");
        return
    }else if(minVAl > maxVal){
        alert("MIN soni MAX sonidan kichik bo`lishi kerak");
        return
    }else if(minVAl < 0){
        alert("Manfiy son kiritmang");
        return
    }else if(maxVal < 0){
        alert("Manfiy son kiritmang");
        return
    }else{
        text.textContent = Math.floor(Math.random()*(maxVal-minVAl+1)+minVAl)
    }
})