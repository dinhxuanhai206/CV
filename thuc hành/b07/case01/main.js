var heigh = 9;
var space = '+';
for (var i = 0; i <= heigh; i++)
{
    document.write(i + space);
   
    for( var j = i+1; j <= heigh; j++){
        if( j < heigh){
            document.write(j + space);
        }
        else{
            document.write(j);
        }
        
    }
    document.write('</br>');

}
