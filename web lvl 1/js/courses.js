function bold(){
    var str=document.getElementById("text");
    if (str.style.fontWeight=="bold"){
        str.style.fontWeight="normal"}
        else{
            str.style.fontWeight="bold"
        }
    }

    
function italique(){
    var itl=document.getElementById("text");
    if (itl.style.fontStyle=="italic"){
        itl.style.fontstyle="normal"
    }
    else{itl.style.fontStyle="italic"}
}
function underline(){
    var unr=document.getElementById("text");
    if(unr.style.textDecoration=="underline"){
        unr.style.textDecoration="none"}
        else{
            unr.style.textDecoration="underline"
        }
    }
    function px(){
      document.getElementById("text").style.fontSize=document.getElementById("ps").value;
    }
    function ar(){
        document.getElementById("text").style.fontFamily=document.getElementById("tt").value;
    }
    $(".b button").css("opacity","0");
  
           $(".b").mouseenter(function(){
           $(this).css("opacity","0.5");
           $(this).find("button").css("opacity","1");
           }
           );
           $(".b").mouseleave(function(){
            $(".b").css("opacity","100");
            $(this).find("button").css("opacity","0");
           });

