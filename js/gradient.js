var colors = new Array(
    [202,228,255],
    [198,255,188],
    [145,255,101],
    [197,217,255]);
  var images = ['back7.jpg','back4.jpg','back5.jpg','back2.jpg', 'back6.jpg', 'back8.jpg'];
  var texts = ['Desarrollamos soluciones tecnológicas para todos tu entornos', 'Buscamos que te sientas satisfecho con todos nuestros servicios', 'Estamos seguros que juntos haremos un gran equipo de trabajo', 'Con nuestros productos buscamos que obtengas buenos resultados', 'Esperamos que te sientas a gusto con todo nuestro equipo de trabajo', 'Nuestro mayor deseo es lograr materializar tus ideas'];
  var positionSlide = 0;
  var step = 0;
  //color table indices for: 
  // current color left
  // next color left
  // current color right
  // next color right
  var colorIndices = [0,1,2,3];
  
  //transition speed
  var gradientSpeed = 0.002;
  
  function updateGradient()
  {
    
    if ( $===undefined ) return;
    
  var c0_0 = colors[colorIndices[0]];
  var c0_1 = colors[colorIndices[1]];
  var c1_0 = colors[colorIndices[2]];
  var c1_1 = colors[colorIndices[3]];
  
  var istep = 1 - step;
  var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
  var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
  var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
  var color1 = "rgb("+r1+","+g1+","+b1+")";
  
  var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
  var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
  var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
  var color2 = "rgb("+r2+","+g2+","+b2+")";
   $('#patt').css({
     background: "-webkit-gradient(linear, left top, right top, from("+color1+"), to("+color2+"))"}).css({
      background: "-moz-linear-gradient(left, "+color1+" 0%, "+color2+" 100%)"});
    
    step += gradientSpeed;
    if ( step >= 1 )
    {
      step %= 1;
      colorIndices[0] = colorIndices[1];
      colorIndices[2] = colorIndices[3];
      
      //pick two new target color indices
      //do not pick the same as the current one
      colorIndices[1] = ( colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
      colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
      
    }
  }
  
  function slideText() {
      $("#header").css({'background': 'url(img/'+images[positionSlide]+')', 'background-size': 'cover'});
      $("#msjs").fadeOut(100, function(){
          $(this).text(texts[positionSlide])
      }).fadeIn(100);
      if(positionSlide < images.length - 1)
      {
          positionSlide += 1;
      }else{
          positionSlide = 0;
      }
  }
  
  setInterval(updateGradient,10);
  setInterval(slideText,5000);
  
  
  