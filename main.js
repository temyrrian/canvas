/**
 * Created by temyrrian on 22.10.14.
 */
$('document').ready(function(){


  var casino_element_arr =  document.getElementsByClassName('casino_element');
  var canvas = new fabric.Canvas('canvas');
  var counter = 0;
    var img_1 = new fabric.Image(casino_element_arr[(Math.floor(Math.random() * 13))], {
        left: 250,
        top: 100,
        selectable: true
    });

    var img_2 = new fabric.Image(casino_element_arr[(Math.floor(Math.random() * 13))], {
        left: 250,
        top:  220,
        selectable: false
    });

    var img_3 = new fabric.Image(casino_element_arr[(Math.floor(Math.random() * 13))], {
        left: 250,
        top:  340,
        selectable: false
    });


     function doFinalAnimation(){
        img_1.left = 800;
        img_2.left = 750;
        img_3.left = 650;
        img_1._element = casino_element_arr[1];
        img_2._element = casino_element_arr[1];
        img_3._element = casino_element_arr[12];

        img_1.animate('left', 250,
            {onChange: canvas.renderAll.bind(canvas),
                duration: 1500,
                easing: fabric.util.ease.easeOutBack
            }
        );

           img_2.animate('left', 250,
                {onChange: canvas.renderAll.bind(canvas),
                    duration: 1500,
                    easing: fabric.util.ease.easeOutBack
                }
            );

        img_3.animate('left', 250,
            {onChange: canvas.renderAll.bind(canvas),
                duration: 1500,
                easing: fabric.util.ease.easeOutBack
            }
        );
    };


function mainAnimate(){
    img_1.animate('left', -300,
        {onChange: canvas.renderAll.bind(canvas),
            duration: 1000,
            easing: fabric.util.ease.easeInCubic
        }
    );

    img_2.animate('left', -300,
        {onChange: canvas.renderAll.bind(canvas),
            duration: 900,
            easing: fabric.util.ease.easeInCubic
        }

    );

    img_3.animate('left', -300,
        {onChange: canvas.renderAll.bind(canvas),
            duration: 800,
            easing: fabric.util.ease.easeInCubic
        }
    );

  var animate_intervavl =  setInterval(function(){
        img_1.left = 700;
        img_2.left = 650;
        img_3.left = 600;
        img_1._element = casino_element_arr[(Math.floor(Math.random() * 13))];
        img_2._element = casino_element_arr[(Math.floor(Math.random() * 13))];
        img_3._element = casino_element_arr[(Math.floor(Math.random() * 13))];

        img_1.animate('left', -800,
            {onChange: canvas.renderAll.bind(canvas),
                duration: 1000,
                easing: fabric.util.ease.easeInCubic
            }
        );

        img_2.animate('left', -800,
            {onChange: canvas.renderAll.bind(canvas),
                duration: 1000,
                easing: fabric.util.ease.easeInCubic
            }
        );

        img_3.animate('left', -800,
            {onChange: canvas.renderAll.bind(canvas),
                duration: 1000,
                easing: fabric.util.ease.easeInCubic
            }
        );
counter++;
      if (counter === 4){
                clearInterval(animate_intervavl)
                        doFinalAnimation();
      }
    }, 1000)
    animate_intervavl;
}

    $('#button_start').show('slow').click(function(){
        setTimeout(function(){
                canvas.add( img_1, img_2, img_3)
                mainAnimate();
            },
            100);
    })

});

