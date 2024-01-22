$("#first").mouseover(function(){
    $("p").css("background-color", "yellow");
  });
  var elementVar = document.getElementById("aree");
  //elementVar.setAttribute("value", add);
  
  
  var x = 0;

  function add() {
      console.log(x);
      return x += 1;
  }
  
  $(document).ready(function () {
      $(".arf").on("click", function () {
          x = add();
          elementVar.setAttribute("value", x);
          
          // Update the cart value in the URL
          $("#cart1").attr("href", "proj1.html?cartValue=" + x);
      });
  });
  
  function redirectToPage(pageURL) {
      window.location.href = pageURL;
  }
  