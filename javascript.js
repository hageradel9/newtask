function checkState(){

    var list = document.getElementById('list');
    
    if(list.options [list.selectedIndex].value == 'on'){
    
    document.getElementById('lamp2').src = 'image/on.jpg';}
    else{
    
    document.getElementById('lamp2').src = 'image/on.jpg';
    }
}

function stopvideo(){
  document.getElementById('video').pause()
  document.getElementById('video').currentTime = 0;
}
// document.getElementById('video').play();
// document.getElementById('video').play();
// console.log(document.getElementById('video'))
// console.log(document.getElementById('play'));
