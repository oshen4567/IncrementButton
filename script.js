function incrementButton(){
    var element = document.getElementById('incrementText');
    var value = element.innerHTML;

    ++value;

    console.log(value);
    document.getElementById('incrementText').innerHTML = value;
}

function decrementButton() {
    var element = document.getElementById('incrementText');
    var value = parseInt(element.innerHTML);

    value--;

    console.log(value);
    element.innerHTML = value;
}


