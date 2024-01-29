
window.addEventListener("scroll",function(){
    if(window.scrollY>=200){
        document.querySelector("nav").style.backgroundColor="white"
        $("nav>*").addClass("active")
        $("nav a").addClass("active")
        $(".icon span").addClass("active")
        $(".icons span").addClass("active")
        $(".icon input").addClass("active")
        $(".page").css("backgroundColor","white")
        document.querySelector(".navbar-toggler").style.borderColor="black"
        document.querySelector(".navbar-expand-lg").style.backgroundColor="white"
        document.querySelector(".collapse").style.backgroundColor="white"
    }
    else{
        document.querySelector("nav").style.backgroundColor="#263037"
        $("nav>*").removeClass("active")
        $("nav a").removeClass("active")
        $(".icon span").removeClass("active")
        $(".icons span").removeClass("active")
        $(".page").css("backgroundColor","#263037")
        $(".icon input").removeClass("active")
        document.querySelector(".navbar-expand-lg").style.backgroundColor="#263037"
        document.querySelector(".navbar-toggler").style.borderColor=""
        document.querySelector(".collapse").style.backgroundColor=""
    }
})


document.querySelector(".fa-magnifying-glass").addEventListener("click",function () {
    document.querySelector(".icon input").classList.toggle("active-input")
    $(".icon input").val("")
    })



    document.querySelector(".fa-magnifying-glass").addEventListener("click",function () {
        document.querySelector(".icons input").classList.toggle("active-input")
        $(".icons input").val("")
        })



    // $(".pages").on("mouseover",function () {
    //     $(".page").show()
    //     })
    //     $("header").on("mouseover",function (){
    //         $(".page").hide()
    //     })



    $(".pages").on("mouseover",function () {
        $(".page").show()
        })
        $(".page").on("mouseleave",function (){
            $(".page").hide()
        })
        
        $(".fa-cart-shopping").click(function(){
            $(".navbar-collapse").hide()
            $(".box").show()
         })


         
    $(".icon1 i").click(function(){
        $(".box").hide()
    })

    
      $(".clear").click(function(){
          $(".big").text("")
          $(".number").text("0")
          $(".icon span").text(0)
      })


    $(".button").on("click",function (){
        $(".page").toggle()
        })


        $(".icons .search").keyup(function () { 
            $(".food").each(function () {
                $(this).hide()
                if ($(this).attr("cat").toLowerCase().includes($(".icons .search").val().toLowerCase())) {
                    // if ($(this).text().toLowerCase().includes($(".search").val().toLowerCase())) {
                    $(this).show()
                }
                // console.log($(this).attr("cat").toLowerCase());
                // $("#axtar").val("jggj")
            })   
        })
        
        
        
            
        $(".fa-magnifying-glass").click(function () {
            $(".icons input").toggleClass("active-input")
            $(".icons input").val("")
            })
        
        
            document.querySelector(".fa-magnifying-glass").addEventListener("click",function () {
                document.querySelector(".icons input").classList.toggle("actives-input")
                $(".icons input").val("")
                })