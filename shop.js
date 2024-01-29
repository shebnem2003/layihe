
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
        

let common=0
let deyer=0


function funk(i){
    console.log(i);
       document.querySelector(".big").innerHTML+=
        `
        <div class="small">
        <img src="${array[i].image}">
        <h3>${array[i].name}</h3>
        <p>${array[i].number}</p>
        <i class="fa-solid fa-trash"></i>
        </div>
        `

        common += Number(array[i].number)
        document.querySelector(".number").innerText="$" + common

        deyer++
        $(".icon span").text(deyer)
        $(".icons span").text(deyer)
        // $(this).parents(".cart").childre().eq(0).text()
        $(".cart p").eq(i).text("Cart Added")
        $(".cart .fa-face-smile").eq(i).show()
    }



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
        // $(".button").on("click",function (){
        //     $(".page").hide()
        // })
        




    $("body").on('click',".fa-trash",function(){
        $(this).parent().remove()
        common -= Number($(this).parent().children().eq(2).text())
        $(".number").text("$" + common)
    })


const categories=["Pizza","Burger","Dessert","Drink","Coffee"]
let array=[
    {image:"st-menu7-700x456.jpg",category:"Coffee",name:"Dark Coffee",text:"Add to cart",number:"4.00"},
    {image:"f73399bf34e3282bb8e194d608c2fe5b.jpg",category:"Coffee",name:"Espresso",text:"Add to cart",number:"4.00"},
    {image:"Cup-of-black-coffee-500-×-333px.jpg",category:"Coffee",name:"Americano",text:"Add to cart",number:"4.00"},
    {image:"GettyImages-1095162642-d8d34ec19cba4f878f26602ef2f85964.jpg",category:"Coffee",name:"Cappuccino",text:"Add to cart",number:"4.00"},
    {image:"blog-10.jpg",category:"Coffee",name:"Latte",text:"Latte",text:"Add to cart",number:"4.00"},
    {image:"macchiato-la-gi.jpg",category:"Coffee",name:"Macchiato",text:"Add to cart",number:"4.00"},
    {image:"8-1-360x360.jpg",category:"Pizza",name:"Margherita",text:"Add to cart",number:"10.00"},
    {image:"2-1-360x360.jpg",category:"Pizza",name:"Pizza",text:"Add to cart",number:"10.00"},
    {image:"1-1-360x360.jpg",category:"Pizza",name:"Grand Supreme",text:"Add to cart",number:"12.00"},
    {image:"5-1-360x360.jpg",category:"Pizza",name:"Tandooni Chicken",text:"Add to cart",number:"35.00"},
    {image:"13a65b34-bbb7-441a-8b3b-9f82348d2bcf.jpeg",category:"Burger",name:"Burger",text:"Add to cart",number:"35.00"},
    {image:"abff05b04d6a86a55c52f5fa10ce01fb.jpg",category:"Burger",name:"Burger",text:"Add to cart",number:"35.00"},
    {image:"d1047cd2a27faa899e65a2ebb8f12d8d.jpg",category:"Dessert",name:"Hazelnut Cake",text:"Add to cart",number:"8.00"},
    {image:"1a0a89530ef3c3ade341a5ca4f7f4b2f.jpg",category:"Dessert",name:"Cream Cake",text:"Add to cart",number:"13.00"},
    {image:"506459c236ed7d11fa384f0a9c5a7298.jpg",category:"Dessert",name:"Panacotta",text:"Add to cart",number:"13.00"},
    {image:"sm-02.jpg",category:"Burger",name:"Chicken Burger",text:"Add to cart",number:"13.00"},
    {image:"aa2431f499d2de3871396e14e828c6ab.jpg",category:"Drinks",name:"Green Tea",text:"Add to cart",number:"13.00"},
    {image:"119b1765e72a55234b8c6495f7dc3b30 - Köçür.jpg",category:"Drinks",name:"Milkshake",text:"Add to cart",number:"13.00"}
]


for (let i = 0; i < array.length; i++) {
    document.querySelector(".menu").innerHTML+=
    `
    <div class="food" cat="${array[i].category}">
    <div class="image" >
    <img src="${array[i].image}" alt="">
    <div class="hover">
    <h1>${array[i].name}</h1>
    <div class="text1">
    <p>${array[i].number}</p>
    <div class="cart">
    <p>${array[i].text}</p>
    <i class="fa-regular fa-face-smile"></i>
    <i onclick=funk(${i}) class="fa-solid fa-cart-shopping"></i>
    </div>
    </div>
    </div>
    </div>
    </div>
    `
}


document.querySelectorAll(".square button").forEach(x=>{
    x.addEventListener("click",function () {
        document.querySelectorAll(".menu .food").forEach(y=>{
            if (y.getAttribute("cat")==x.getAttribute("class") || x.getAttribute("class")=="All") {
                y.style.display="flex"
                $(".square button").each(function() {
                })  
            }
            else{
                y.style.display="none"
            }
        });
    })
});



$(".search").keyup(function () { 
    $(".food").each(function () {
        $(this).hide()
        if ($(this).attr("cat").toLowerCase().includes($(".search").val().toLowerCase())) {
            // if ($(this).text().toLowerCase().includes($(".search").val().toLowerCase())) {
            $(this).show()
        }
        // console.log($(this).attr("cat").toLowerCase());
        // $("#axtar").val("jggj")
    })   
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