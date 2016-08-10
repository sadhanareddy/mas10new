var imageindex;
var frameindex;
var step_no = 0;
var frameimages = ["simulation_images/frames/2.png", "simulation_images/frames/3.png", "simulation_images/frames/4.png", "simulation_images/frames/5.png", 
"simulation_images/frames/6.png", "simulation_images/frames/7.png", "simulation_images/frames/8.png", "simulation_images/frames/9.png",
"simulation_images/frames/10.png", "simulation_images/frames/11.png", "simulation_images/frames/12.png", "simulation_images/frames/13.png",  
"simulation_images/frames/14.png", "simulation_images/frames/15.png", "simulation_images/frames/16.png", "simulation_images/frames/17.png", 
"simulation_images/frames/18.png", "simulation_images/frames/19.png", "simulation_images/frames/20.png", "simulation_images/frames/21.png", 
"simulation_images/frames/22.png", "simulation_images/frames/23.png", "simulation_images/frames/24.png", "simulation_images/frames/25.png", 
"simulation_images/frames/26.png", "simulation_images/frames/27.png", "simulation_images/frames/28.png", "simulation_images/frames/29.png",
"simulation_images/frames/30.png", "simulation_images/frames/31.png", "simulation_images/frames/32.png", "simulation_images/frames/33.png", 
"simulation_images/frames/34.png", "simulation_images/frames/35.png", "simulation_images/frames/36.png", "simulation_images/frames/37.png",
"simulation_images/frames/38.png"  ];

var frameimages1 = ["simulation_images/frames/200.png", "simulation_images/frames/201.png", 
"simulation_images/frames/202.png", "simulation_images/frames/203.png", "simulation_images/frames/204.png",
"simulation_images/frames/205.png","simulation_images/frames/206.png", "simulation_images/frames/207.png", 
"simulation_images/frames/208.png", 
"simulation_images/frames/209.png", "simulation_images/frames/210.png", "simulation_images/frames/211.png",
"simulation_images/frames/212.png", "simulation_images/frames/213.png", "simulation_images/frames/214.png",
"simulation_images/frames/215.png", "simulation_images/frames/216.png", "simulation_images/frames/217.png",
"simulation_images/frames/218.png", "simulation_images/frames/219.png", "simulation_images/frames/220.png",
"simulation_images/frames/221.png", "simulation_images/frames/222.png", "simulation_images/frames/223.png",
"simulation_images/frames/224.png", "simulation_images/frames/225.png", "simulation_images/frames/226.png",
"simulation_images/frames/227.png", "simulation_images/frames/228.png", "simulation_images/frames/229.png",
"simulation_images/frames/230.png", "simulation_images/frames/231.png", "simulation_images/frames/232.png",
"simulation_images/frames/233.png", "simulation_images/frames/234.png", "simulation_images/frames/235.png",
"simulation_images/frames/236.png", "simulation_images/frames/237.png", "simulation_images/frames/238.png",
"simulation_images/frames/239.png", "simulation_images/frames/240.png", "simulation_images/frames/241.png",
"simulation_images/frames/242.png", "simulation_images/frames/243.png", "simulation_images/frames/244.png", 
"simulation_images/frames/245.png", "simulation_images/frames/246.png", "simulation_images/frames/247.png",
"simulation_images/frames/248.png", "simulation_images/frames/249.png", "simulation_images/frames/250.png",
"simulation_images/frames/251.png", "simulation_images/frames/252.png", "simulation_images/frames/253.png",
"simulation_images/frames/254.png", "simulation_images/frames/255.png", "simulation_images/frames/256.png", 
"simulation_images/frames/257.png", "simulation_images/frames/258.png", "simulation_images/frames/259.png",
"simulation_images/frames/260.png", "simulation_images/frames/261.png", "simulation_images/frames/262.png",
"simulation_images/frames/263.png", "simulation_images/frames/264.png",  "simulation_images/frames/265.png",
"simulation_images/frames/267.png", "simulation_images/frames/frame.png"];

function changeImage(){
    if(step_no == 0){
        for(imageindex = 0; imageindex<frameimages.length; imageindex++ )
        {
        // setTimeout(function(){
        //  document.getElementById("mainframe").src = frameimages[imageindex];
        // }, 1000);
        document.getElementById("mainframe").src = frameimages[imageindex];
        }
        setTimeout("slideCube()", 2500);
        step_no++;
    }
}

function slideCube() {
    var elem = document.getElementById("cube");   
    elem.style.visibility = "visible";
    var pos = 0;
    var id = setInterval(frame, 5);
    function frame() {
        if (pos == 152) {
            clearInterval(id);
        } else {
            pos++; 
            elem.style.top = pos + 'px'; 
            elem.style.bottom = pos + 'px'; 
        }
    }
  showInstruction();
}

function showInstruction() {
    document.getElementById("instrctnbox").style.visibility = "visible";
    $("#instrctnbox").animate({marginTop:'-=80px'});
    setInterval(function(){
        $("#arrow").fadeIn("fast").fadeOut("fast");
    }, 100);
    setTimeout("showClock()", 1500);
}

function showClock(){
    var context=document.getElementById('clockscreen');
    var hand =document.getElementById('clockhand');
    context.style.visibility='visible';
    hand.style.visibility="visible";
    var angle = 0;

    setInterval(function(){
        angle+=3;
        $('#clockhand').rotate(angle);
    },100);

    setTimeout(function() {
        $('#clock, #instrctnbox, #cube').remove();
        document.getElementById('mainframe').style.visibility = 'hidden';
        changeFrames();
    }, 6000);
    // setTimeout("disposeElements()",6000);   
}

// // function disposeElements()
// // {
// //     document.getElementById('clockscreen').style.visibility='hidden';
// //     document.getElementById('clockhand').style.visibility='hidden';
// //     document.getElementById('cube').style.visibility = 'hidden';
// //     document.getElementById('instrctnbox').style.visibility = 'hidden';
// //     document.getElementById('mainframe').style.visibility = 'hidden';
// //     changeFrames();

// // }

var frameindex;
function changeFrames(){
    $("#mainframe").replaceWith('<img id ="demo">');
    $("#demo").attr('usemap','#demo');
    for(frameindex = 0; frameindex<frameimages1.length; frameindex++ )
    {   
        // setTimeout(function(){
        //  document.getElementById("mainframe").src = frameimages1[frameindex];
        // }, 1000);
        document.getElementById('demo').src = frameimages1[frameindex];
    }
}
    
function showClock1(){
    if(step_no == 1){
      // var clock = document.createElement('div');
      var context1 = document.createElement('img');
      var hand1= document.createElement('img');
      // clock.setAttribute("id", "clock");
      context1.setAttribute("id", "clockscreen1");
      hand1.setAttribute("id","clockhand1");
      context1.setAttribute("src","simulation_images/clockwithbkgd.png");
      hand1.setAttribute("src", "simulation_images/hand.png");
      context1.style.visibility='visible';
      hand1.style.visibility="visible";
      // clock.appendChild(context1);
      // clock.appendChild(hand1);
      // console.log(clock);
      // $("#clock").before("button");
      // document.body.appendChild(clock);
      document.body.appendChild(context1);
      document.body.appendChild(hand1);
      var angle = 0;
      setInterval(function(){
        angle+=3;
        $('#clockhand1').rotate(angle);
        // $('#demo').attr("style", "opacity:0.5");
       },100);
       setTimeout(function() {
          // $('#clock').remove();
          // document.getElementById("demo").style.removeProperty('opacity');
          $('#clockscreen1').remove();
          $('#clockhand1').remove();
          $("#demo").attr("src", "simulation_images/frames/lid.png");
          // $("#demo").removeAttr("style");
        }, 6000);
       step_no++;
    }
}


function openLid(){
  if(step_no == 2){
    $("#demo").attr("src", "simulation_images/frames/openlid.png");
    step_no++;
  }
}

function moveCurvette() {
  var curvette = document.getElementById("curvette");   
  curvette.style.visibility = "visible";
    var pos = 800;
    var id = setInterval(frame, 5);
    function frame() {
        if (pos == 150) {
            clearInterval(id);
        } else {
            pos++; 
            curvette.style.bottom = pos + 'px'; 
            curvette.style.left = pos + 'px'; 
        }
    }
}


// var imageindex=0;

// function changeImage() {
    
//     if (imageindex < frameimages.length) {
//         setTimeout(function(){
//             document.getElementById("mainframe").src= frameimages[imageindex];
//         }, 1000);
//         imageindex = imageindex + 1;
//     }

// }


