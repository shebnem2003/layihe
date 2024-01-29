
window.addEventListener("scroll",function(){
    if(window.scrollY>=200){
        document.querySelector("nav").style.backgroundColor="white"
        $("nav>*").addClass("color")
        $("nav a").addClass("color")
        $(".icon span").addClass("color")
        $(".icon input").addClass("color")
        document.querySelector(".navbar-toggler").style.borderColor="black"
        document.querySelector(".navbar-expand-lg").style.backgroundColor="white"
    }
    else{
        document.querySelector("nav").style.backgroundColor="#263037"
        $("nav>*").removeClass("color")
        $("nav a").removeClass("color")
        $(".icon span").removeClass("color")
        $(".icon input").removeClass("color")
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
        



window.addEventListener("scroll",function(){
    console.log(window.scrollY)
    // if(window.scrollY>=1876){
        if(window.scrollY>=1300){
        document.querySelector(".item").style.animationName="item"
        document.querySelector(".items img").style.animationName="animation"
    }
    else{
        document.querySelector(".item").style.animationName=" "
        document.querySelector(".items img").style.animationName=" "
    }
})



$(".play i").click(function(){
    $('.video video').show()
    $(".play").hide()
    $('.video video').trigger('play')
    $("video").prop('muted', false);
})

$(".video video").click(function(){
    $('.video').hide()
    $(".play").show()
    $("video").prop('muted', true);
})




window.addEventListener("scroll",function(){
    console.log(window.scrollY)
        if(window.scrollY>=2800){
        document.querySelector(".story").style.animationName="story"
        document.querySelector(".image").style.animationName="image"
    }
    else{
        document.querySelector(".story").style.animationName=" "
        document.querySelector(".image").style.animationName=" "
    }
})


    
$(".fa-magnifying-glass").click(function () {
    $(".icons input").toggleClass("active-input")
    $(".icons input").val("")
    })


    document.querySelector(".fa-magnifying-glass").addEventListener("click",function () {
        document.querySelector(".icons input").classList.toggle("actives-input")
        $(".icons input").val("")
        })
