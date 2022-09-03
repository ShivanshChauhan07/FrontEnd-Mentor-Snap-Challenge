$("h1").click(function(){
  $(this).css("color","red");
});
$(".parent li").on(
  {
  "click":function(){
  $(this).find("ul.child").slideToggle(200);
  }
});

$(".parent li").hover(function(){
  $(this).css("color","#FA9494");
},function(){
  $(this).css("color","black");
})

$("li.reg").hover(function(){
  $(this).css("background-color","Blue");
  $(this).css("color","white");
  $(this).css("cursor","pointer");
},function(){
  $(this).css("background","White");
  $(this).css("color","Black");

})
