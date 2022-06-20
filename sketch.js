var cavaleiro, cavaleiroi;
var inimigo, inimigoi;
var solo, terreno;
var vida
var vidai 
var vadao
var vital
var attack
var attacki
var botao
var espera = 0 
var ataque = 1
var perde,perdi
var ganhar, ganhei
var empat, em
//
var estadodejogo = espera
//
function preload(){
 cavaleiroi = loadAnimation("7.png","9.png","5.png");
  inimigoi = loadAnimation ("ed 1.png","p1.png","p2.png")
    terreno = loadImage ("solo.jpeg");
    attack = loadAnimation ("1.png","6.png","2.png");
      attacki = loadAnimation("ed.png","p.png","p0.png")
        perdi = loadImage("voce.png")
        ganhei = loadImage("ganhou.png")
        em = loadImage("emp.png")
}

function setup(){
  createCanvas(900,600);
  solo = createSprite(450,220,500,20);
  solo.addImage(terreno);
  solo.scale = 5.0;
  solo.depth = solo.depth 
  
  cavaleiro = createSprite(300,500,50,50);
     cavaleiro.addAnimation("espera",cavaleiroi);
     cavaleiro.scale = 0.5;
      cavaleiro.addAnimation("attack",attack)
     inimigo = createSprite(500,500,50,50);
      
      inimigo.addAnimation("esperar",inimigoi);
       inimigo.addAnimation("atack",attacki)
      inimigo.scale = 0.5;
        
      
      vidai = createSprite(250,350,150,10)
       vida = createSprite(250,350,110,5)
       
        vidal = createSprite(550,350,150,10)
          vidao = createSprite(550,350,110,5)

            perde = createSprite(410,200,20,20)
            perde.visible = false

            ganhar = createSprite(410,500,20,20)
            ganhar.visible = false

            empat = createSprite (410,200,20,20)
            empat.visible = false

          botao = createSprite(410,300,30,30)
          
}

function draw(){
  background(220);
  //console.log (estadodejogo)
  vida.shapeColor = "blue";
  vidao.shapeColor = "red";
  botao.shapeColor = "red";
  console.log(solo.depth)
  if (mousePressedOver (botao)){
    atacar()
    console.log("teste")
 }

  if (vida.width < 5){
    botao.destroy()
      perdeu()

  }

  if (vidao.width < 5){
botao.destroy()
  ga()

  }
  if (vida.width < 5 && vidao.width < 5){
    botao.destroy()
 empa()


  }
    if (estadodejogo === espera) {


      //
   
      

      // if (mousePressedOver (botao)){
      //    // atacar()
      //    console.log("teste")
      // }




    }
//     if(estadodejogo === ataque){
// //
//         botao.visible = false
//         cavaleiro.changeAnimation("attack",attack)
//           inimigo.changeAnimation("atack",attacki)


//       }

   drawSprites();
  }
//function vid (){








//}
  
 function atacar(){
// estadodejogo = ataque

        cavaleiro.changeAnimation("attack",attack)
          inimigo.changeAnimation("atack",attacki)
vida.width = vida.width - Math.round(random(5,10))
console.log (vida.width)
vidao.width = vidao.width - Math.round(random(5,10))
console.log (vidao.width)
 //
if (vida.width <= 10){
vida.width = 1

}

if (vidao.width <= 10){
vidao.width = 1

}

 }

 function perdeu(){
perde.addImage(perdi)

perde.visible = true


 }
 function ga(){

ganhar.addImage(ganhei)
ganhar.visible = true



 }
 function empa(){
   empat.addImage(em)
empat.visible = true
ganhar.visible = false
perde.visible = false
 }
   
 