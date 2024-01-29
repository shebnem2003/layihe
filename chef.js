
window.addEventListener("scroll",function(){
    if(window.scrollY>=200){
        document.querySelector("nav").style.backgroundColor="white"
        $("nav>*").addClass("active")
        $("nav a").addClass("active")
        $(".icon span").addClass("active")
        $(".icon input").addClass("active")
        document.querySelector(".navbar-toggler").style.borderColor="black"
        document.querySelector(".navbar-expand-lg").style.backgroundColor="white"
    }
    else{
        document.querySelector("nav").style.backgroundColor="#263037"
        $("nav>*").removeClass("active")
        $("nav a").removeClass("active")
        $(".icon span").removeClass("active")
        $(".icon input").removeClass("active")
        document.querySelector(".navbar-expand-lg").style.backgroundColor="#263037"
        document.querySelector(".navbar-toggler").style.borderColor=""

    }
})



document.querySelector(".fa-magnifying-glass").addEventListener("click",function () {
    document.querySelector(".icon input").classList.toggle("active-input")
    $(".icon input").val("")
    })




    $(".pages").on("mouseover",function () {
        $(".page").show()
        })
        $(".page").on("mouseleave",function (){
            $(".page").hide()
        })
        
     
        
    
$(".fa-magnifying-glass").click(function () {
    $(".icons input").toggleClass("active-input")
    $(".icons input").val("")
    })


    document.querySelector(".fa-magnifying-glass").addEventListener("click",function () {
        document.querySelector(".icons input").classList.toggle("actives-input")
        $(".icons input").val("")
        })