//document.querySelector('.button').addEventListener('click', (evt) => {
    //alert('Boat was clicked!');
//});


document.querySelectorAll('.boat').forEach((elem) => {
    elem.addEventListener('click', () => {
        alert('It Works!')
    });
});
