$(document).ready(handleReady)

function handleReady() {
    console.log('JS LOADED');

    $('.button').on('click', handleClick);
    $('#generateBtn').on('click', makeDiv);

    $('#body').on('click', '#deleteBtn', handleDelete);
    $('#body').on('click', '#yellowBtn', makeYellow);
}
function makeYellow(event) {
    event.preventDefault(); 
    console.log('yellowed');
    $(this).parent().parent().addClass('yellowed');
}

function handleDelete(event) {
    event.preventDefault(); 
    console.log('deleted');
    $(this).parent().parent().remove()

}    
function handleClick(event) {
    event.preventDefault(); //stop form from refreshing page
    console.log('clicked!');
}
let numberofDiv = 0;

function makeDiv() {
$('#body').append(`
<div> 
<p>${numberofDiv += 1}</p>
<p><button id="yellowBtn">Yellow</button></p>
<p><button id="deleteBtn">Delete</button></p>
</div>
`);
console.log('div made!')
}