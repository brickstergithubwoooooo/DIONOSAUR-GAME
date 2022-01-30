var trex, trex_correndo, bordas;
var thefloor, movefloormove

function preload(){
  
  movefloormove = loadImage("solo2.png")
  //fazer animação do T-Rex correndo
  trex_correndo = loadAnimation('trex1.png','trex3.png','trex4.png');
  
}

function setup(){
  thefloor = createSprite(300, 159, 1222, 50)
  thefloor.addImage(movefloormove);

  //cria a tela
  createCanvas(600,200);
  
  //cria sprite do T-Rex
  trex = createSprite(50,60,20,50);
  trex.scale = 0.5;
  trex.x = 50;
  
  //adiciona a animação de T-Rex correndo ao sprite
  trex.addAnimation('correndo', trex_correndo);
  
  //cria bordas
  bordas = createEdgeSprites();
  
  //aprendendo sobre console.log
  //escreve o nome do jogo no terminal
  console.log("T-Rex corredor");
  
}

function draw(){

  //fundo branco
  background("white");
  
   //Trex colide com a borda inferior
   trex.collide(thefloor);

  //desenha os sprites
  drawSprites();
  
  //T-Rex pula ao apertar espaço
  if(keyDown('space')){
      trex.velocityY = -10; 
    }
  
  thefloor.velocityX = -6

  if(thefloor.x <= 0){
    thefloor.x = thefloor.width / 2;
  }
  
  //gravidade
  trex.velocityY = trex.velocityY + 1;
  
  //Registra a posição Y do T-Rex no reminal
  console.log(trex.y);
}
