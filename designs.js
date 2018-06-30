// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

//function makeGrid() {

  // Your code goes here!
  
  //}

  

 //define variables
let color;
let mycol;
let myrow;


$('#sizePicker').submit(function(event){
    event.preventDefault();

    mycol=$('#inputHeight').val();
    myrow=$('#inputWeight').val();
    makeGrid(mycol, myrow)


});



function makeGrid(n, m) {
    $('tr').remove();


    for(let i = 1; i <= n; i++){
        $('#pixelCanvas').append('<tr id=table'+i+'></tr>');
        for(let j = 1; j <= m; j++){
            $('#table'+i).append('<td></td>');
        }
    }



    $('td').click(function(){
        color = $('#colorPicker').val();

        if($(this).attr('style')){
            $(this).removeAttr('style');
        } else{
            $(this).attr('style', 'background-color:'+ color);
        }
    })
}