canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
car1_width=120;
car1_height=70;
car1_x=10;
car1_y=10;
car1_image="Car 1.png";

car2_width=120;
car2_height=70;
car2_x=10;
car2_y=10;
car2_image="Car 2.png";

background_image="racing.jpg";

function add(){
    background_image_tag=new Image();
    background_image_tag.onload=uploadBackground;
    background_image_tag.src=background_image;
    
    car1_image_tag=new Image();
    car1_image_tag.onload=uploadcar1;
    car1_image_tag.src=rover_image;

    car2_image_tag=new Image();
    car2_image_tag.onload=uploadcar2;
    car2_image_tag.src=rover_image;
}

function uploadBackground(){
    ctx.drawImage(background_image_tag, 0, 0, canvas.width, canvas.height);
}

function uploadcar1(){
    ctx.drawImage(car1_image_tag, car1_x, car1_y, car1_width, car1_height);
}

function uploadcar2(){
    ctx.drawImage(car2_image_tag, car2_x, car2_y, car2_width, car2_height);
}


window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    keypressed=e.keyCode;
    console.log(keypressed);
}
