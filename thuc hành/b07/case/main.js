let a = document.querySelectorAll('.box > img[src=""]');
a.forEach ( function (item){
    if(item.getAttribute('src') == "")
    item.src= "";
}
)