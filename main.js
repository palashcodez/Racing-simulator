canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
car1_width=200;
car1_height=90;
car1_x=10;
car1_y=10;
car1_image="Car 1.png";

car2_width=200;
car2_height=90;
car2_x=10;
car2_y=90;
car2_image="Car 2.png";

background_image="racing.jpg";

function add(){
    background_image_tag=new Image();
    background_image_tag.onload=uploadBackground;
    background_image_tag.src=background_image;
    
    car1_image_tag=new Image();
    car1_image_tag.onload=uploadcar1;
    car1_image_tag.src=car1_image;

    car2_image_tag=new Image();
    car2_image_tag.onload=uploadcar2;
    car2_image_tag.src=car2_image;
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
     
    if(keypressed=='37'){
        left();
    }
    
    if(keypressed=='38'){
        up();
    }

    if(keypressed=='39'){
        right();
    }

    if(keypressed=='40'){
        down();
    }
    
    if(keypressed=='65'){
        a();
    }
    
    if(keypressed=='87'){
        w();
    }

    if(keypressed=='68'){
        d();
    }

    if(keypressed=='83'){
        s();
    }

}

function up(){
    if(car1_y>0){
        car1_y=car1_y-10;
        uploadBackground();
        uploadcar1();
    }
}
function down(){
    if(car1_y<500){
        car1_y=car1_y+10;
        uploadBackground();
        uploadcar1();
    }
}
function left(){
    if(car1_x>0){
        car1_x=car1_x-10;
        uploadBackground();
        uploadcar1();
    }
}
function right(){
    if(car1_x<500){
        car1_x=car1_x+10;
        uploadBackground();
        uploadcar1();
    }
    
}

function w(){
    if(car2_y>0){
        car2_y=car2_y-10;
        uploadBackground();
        uploadcar2();
    }
}
function s(){
    if(car2_y<500){
        car2_y=car2_y+10;
        uploadBackground();
        uploadcar2();
    }
}
function a(){
    if(car2_x>0){
        car2_x=car2_x-10;
        uploadBackground();
        uploadcar2();
    }
}
function d(){
    if(car2_x<500){
        car2_x=car2_x+10;
        uploadBackground();
        uploadcar2();
    }
}