const toogleNav = function(){
    let classes = document.getElementById("sidenav").className;

    if(classes == "side_drawer"){
        document.getElementById("sidenav").className = "side_drawer open";
        document.getElementById("id_backdrop").className = "backdrop";
    }else{
        document.getElementById("sidenav").className = "side_drawer";
        document.getElementById("id_backdrop").className = "backdrop_close";
    }
}