//lấy danh sách các box
 boxs = document.getElementsByClassName('box');
  var maxHeight = 0;
  //lấy chiều cao lớn nhất trong các box => maxheight
  for (var i = 0; i < boxs.length; i++) {
      var height = boxs[i].offsetHeight;
      if(height > maxHeight){
          maxHeight = height;
      }
}

for (var i = 0; i < boxs.length; i++){
    //duyệt qua từng box và gắn chiều cao bằn maxheight
    boxs[i].style.height = maxHeight + 'px';
    // var bgColor = 'gold';
    var bgClass = 'bg-gold';
    if( i % 2 == 0){
        //nếu box ở vị trí lẻ thì màu đỏ
        bgClass = 'bg-red';
    }
    boxs[i].classList.add(bgClass);
    // boxs[i].style.backgroundColor = bgColor;
}
