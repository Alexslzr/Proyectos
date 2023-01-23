
let count=0;

function increment(){
    count+=1;
    document.getElementById('counter').innerText = count;
    console.log('button was clicked '+count+' Times');
}

function save(){
    console.log(count);
    let lastentry = document.getElementById('last-entry')
    lastentry.textContent += count+' - ';
    count=0;
    document.getElementById('counter').innerText = count;
}