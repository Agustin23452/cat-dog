img = ""
objects = []
status = ""

function preload()
{
    img = loadImage("dog_cat.jpg");
}

function draw()
{
     image(img, 0,0,640,420 );
     if(status != "")
     {for(var i = 0; i < objects.length;i ++)
        {   
            fill(0,255,0)
            percent = floor(objects[i].confidence * 100)
            text(objects[i].label + " " + percent + "%", objects[i].x, objects[i].y +15 +15)
            noFill()
            stroke(243,123,0)
            rect( objects [i].x, objects [i].y, objects [i].width, objects [i].height) 
        }
     }
}

function setup()
{
   canvas = createCanvas(640,420);
   canvas.center();
   objectDetector = ml5.objectDetector ("cocossd", modeloaded);
   document.getElementById("status").innerHTML = "status: cargando objetos";
   document.getElementById("status").innerHTML = "status: objetos detectados";
}

function modeloaded()
{
   console.log ("Modelo cargado");
   objectDetector.detect(img, gotresult);
   status = true;

}

function gotresult(error, result)
{
    if(error)
    {
        console.log("error");
    }
    console.log(result);

    objects = result 
}