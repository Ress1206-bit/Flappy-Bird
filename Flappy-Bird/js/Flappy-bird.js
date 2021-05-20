// Around line 300 testing to see if score can be added by only position.
let gameState = {
  score: 0
}

  class StartScene extends Phaser.Scene {
    constructor(){
      super({key: 'StartScene'})
    } 
    preload(){
this.load.spritesheet('firstBird', 'assets/bird_spritesheet.png', {frameWidth: 18.333, frameHeight: 12})
this.load.image('GameName', 'assets/GameName.png');
this.load.image('frontSky', 'assets/frontSky.jpg');
this.load.image('frontBird', 'assets/frontBird.png');
this.load.image('pole', 'assets/pole.png');
this.load.image('PlayButton', 'assets/PlayButton.png')
    }
    create(){

gameState.name = this.add.image(245, 100, 'GameName').setScale(.4)
gameState.cursors = this.input.keyboard.createCursorKeys();
gameState.frontSky = this.add.image(0, 0, 'frontSky').setOrigin(0).setDepth(-2)
gameState.frontBird = this.add.image(config.width / 2, 350, 'frontBird').setScale(.5);
gameState.frontBird.angle = -20;
gameState.frontPole = this.add.image(650, 750, 'pole').setDepth(-1)
gameState.frontPole = this.add.image(650, -85, 'pole').setDepth(-1);
gameState.playButton = this.add.image(config.width / 2, 625, 'PlayButton').setScale(.43)
gameState.playButton.setInteractive();
gameState.playButton.on('pointerup', () => {
  this.scene.stop('StartScene');
  this.scene.start('GameScene');
})

    }
  }

  class GameScene extends Phaser.Scene {
    constructor() {
      super({key: 'GameScene'})
    }
     preload(){
      this.load.image('player', 'assets/bird.png');
      this.load.image('background', 'assets/background1.png')
      this.load.image('background1', 'assets/background.jpg')
      this.load.image('pole', 'assets/pole.png');
      this.load.image('invisibleWall', 'assets/invisible.png')
      this.load.spritesheet('bird', 'assets/bird_spritesheet.png', {frameWidth: 18.33, frameHeight: 12});
      this.load.image('skyline', 'assets/skyline.png')
      this.load.image('restart', 'assets/restart.png')
        }
        
        create() {
          const tinyRandomNumber = Math.random()*.06
         

          gameState.skyline = this.add.image(0, 392,'skyline').setOrigin(0).setScrollFactor(.1)
          gameState.sky = this.add.image(0, 0,'background1').setOrigin(0).setScrollFactor(tinyRandomNumber).setDepth(-.5)
          gameState.resceneText = this.add.text(70, config.height / 2, '', {fontSize: 70});
           gameState.resceneText1 = this.add.text(60, config.height / 2 +100, '', {fontSize: 70});
           gameState.letBirdFly = true;

          gameState.bird = this.physics.add.sprite(100, 345, 'bird').setScale(3.7);
          this.anims.create({
            key: 'fly',
            frames:
          this.anims.generateFrameNumbers('bird', {start: 0, end: 3}),
          frameRate: 12,
          repeat: -1,
          });
       //gameState.player = this.physics.add.sprite(100, 645, 'player').setScale(.4)
        this.cameras.main.setBounds(0, 0, 8276, 750);
        this.cameras.main.startFollow(gameState.bird);
        gameState.cursors = this.input.keyboard.createCursorKeys();
        this.physics.world.setBounds(0, 0 , 8276, 750)
        gameState.bird.setCollideWorldBounds(false)
        gameState.background = this.add.sprite(0, 0, 'background').setScale(11.944, 2.86).setOrigin(0, 0).setDepth(-1);
        gameState.scoreText = this.add.text(20, 20, `Score: ${Math.round(gameState.score)}`, {fontSize: 25});
        gameState.scoreText.setScrollFactor(0).setDepth(1);
       
      //This had problem because could not find random for top block. At this point the problem has been fixed
        /*for (let x = 375; x < 1820; x += 350){
          const randomLength = Math.random()*1.65
          gameState.poleBottom = this.physics.add.sprite(x, 665, 'pole').setGravityY(-450).setGravityX(0);
          gameState.poleBottom.setScale(.2, randomLength)
          gameState.poleTop = this.physics.add.sprite(x, 0, 'pole').setGravityY(-450).setGravityX(0);
          gameState.poleTop.setScale(.2, randomLength-50)
    
      }*/
      let poleDistance = 1.6
      
      const randomLength = {
        Bottom1: (Math.random()*1.35) + 0.3, //ZEROED
        Bottom2: (Math.random()*1.35) + 0.3,
        Bottom3: (Math.random()*1.35) + 0.3,
        Bottom4: (Math.random()*1.35) + 0.3,
        Bottom5: (Math.random()*1.35) + 0.3,
        Bottom6: (Math.random()*1.35) + 0.3,
        Bottom7: (Math.random()*1.35) + 0.3,
        Bottom8: (Math.random()*1.35) + 0.3,
        Bottom9: (Math.random()*1.35) + 0.3,
        Bottom10: (Math.random()*1.35) + 0.3,
        Bottom11: (Math.random()*1.35) + 0.3,
        Bottom12: (Math.random()*1.35) + 0.3,
        Bottom13: (Math.random()*1.35) + 0.3,
        Bottom14: (Math.random()*1.35) + 0.3,
        Bottom15: (Math.random()*1.35) + 0.3,
        Bottom16: (Math.random()*1.35) + 0.3,
        Bottom17: (Math.random()*1.35) + 0.3,
        Bottom18: (Math.random()*1.35) + 0.3,
        Bottom19: (Math.random()*1.35) + 0.3,
        Bottom20: (Math.random()*1.35) + 0.3,
        Bottom21: (Math.random()*1.35) + 0.3,
        Bottom22: (Math.random()*1.35) + 0.3,
        Bottom23: (Math.random()*1.35) + 0.3,
        Bottom24: (Math.random()*1.35) + 0.3,
        Bottom25: (Math.random()*1.35) + 0.3,
      }
      
      const mul = 275

      //Bottom Blocks
      gameState.Bottom1 = this.physics.add.sprite(375, 665, 'pole').setGravityY(-450).setGravityX(0);
      gameState.Bottom1.setScale(.2, randomLength.Bottom1);
      gameState.Bottom2 = this.physics.add.sprite(375 + mul, 665, 'pole').setGravityY(-450).setGravityX(0);
      gameState.Bottom2.setScale(.2, randomLength.Bottom2);
      gameState.Bottom3 = this.physics.add.sprite(375 + 2*mul, 665, 'pole').setGravityY(-450).setGravityX(0);
      gameState.Bottom3.setScale(.2, randomLength.Bottom3);
      gameState.Bottom4 = this.physics.add.sprite(375 + 3*mul, 665, 'pole').setGravityY(-450).setGravityX(0);
      gameState.Bottom4.setScale(.2, randomLength.Bottom4);
      gameState.Bottom5 = this.physics.add.sprite(375 + 4*mul, 665, 'pole').setGravityY(-450).setGravityX(0);
      gameState.Bottom5.setScale(.2, randomLength.Bottom5);
      gameState.Bottom6 = this.physics.add.sprite(375 + 5*mul, 665, 'pole').setGravityY(-450).setGravityX(0);
      gameState.Bottom6.setScale(.2, randomLength.Bottom6);

      gameState.Bottom7 = this.physics.add.sprite(375 + 6*mul, 665, 'pole').setGravityY(-450).setGravityX(0);
      gameState.Bottom7.setScale(.2, randomLength.Bottom7);
      gameState.Bottom8 = this.physics.add.sprite(375 + 7*mul, 665, 'pole').setGravityY(-450).setGravityX(0);
      gameState.Bottom8.setScale(.2, randomLength.Bottom8);
      gameState.Bottom9 = this.physics.add.sprite(375 + 8*mul, 665, 'pole').setGravityY(-450).setGravityX(0);
      gameState.Bottom9.setScale(.2, randomLength.Bottom9);
      gameState.Bottom10 = this.physics.add.sprite(375 + 9*mul, 665, 'pole').setGravityY(-450).setGravityX(0);
      gameState.Bottom10.setScale(.2, randomLength.Bottom10);
      gameState.Bottom11 = this.physics.add.sprite(375 + 10*mul, 665, 'pole').setGravityY(-450).setGravityX(0);
      gameState.Bottom11.setScale(.2, randomLength.Bottom11);
      gameState.Bottom12 = this.physics.add.sprite(375 + 11*mul, 665, 'pole').setGravityY(-450).setGravityX(0);
      gameState.Bottom12.setScale(.2, randomLength.Bottom12);
      gameState.Bottom13 = this.physics.add.sprite(375 + 12*mul, 665, 'pole').setGravityY(-450).setGravityX(0);
      gameState.Bottom13.setScale(.2, randomLength.Bottom13);
      gameState.Bottom14 = this.physics.add.sprite(375 + 13*mul, 665, 'pole').setGravityY(-450).setGravityX(0);
      gameState.Bottom14.setScale(.2, randomLength.Bottom14);
      gameState.Bottom15 = this.physics.add.sprite(375 + 14*mul, 665, 'pole').setGravityY(-450).setGravityX(0);
      gameState.Bottom15.setScale(.2, randomLength.Bottom15);
      gameState.Bottom16 = this.physics.add.sprite(375 + 15*mul, 665, 'pole').setGravityY(-450).setGravityX(0);
      gameState.Bottom16.setScale(.2, randomLength.Bottom16);
      gameState.Bottom17 = this.physics.add.sprite(375 + 16*mul, 665, 'pole').setGravityY(-450).setGravityX(0);
      gameState.Bottom17.setScale(.2, randomLength.Bottom17);
      gameState.Bottom18 = this.physics.add.sprite(375 + 17*mul, 665, 'pole').setGravityY(-450).setGravityX(0);
      gameState.Bottom18.setScale(.2, randomLength.Bottom18);
      gameState.Bottom19 = this.physics.add.sprite(375 + 18*mul, 665, 'pole').setGravityY(-450).setGravityX(0);
      gameState.Bottom19.setScale(.2, randomLength.Bottom19);
      gameState.Bottom20 = this.physics.add.sprite(375 + 19*mul, 665, 'pole').setGravityY(-450).setGravityX(0);
      gameState.Bottom20.setScale(.2, randomLength.Bottom20);
      gameState.Bottom21 = this.physics.add.sprite(375 + 20*mul, 665, 'pole').setGravityY(-450).setGravityX(0);
      gameState.Bottom21.setScale(.2, randomLength.Bottom21);
      gameState.Bottom22 = this.physics.add.sprite(375 + 21*mul, 665, 'pole').setGravityY(-450).setGravityX(0);
      gameState.Bottom22.setScale(.2, randomLength.Bottom22);
      gameState.Bottom23 = this.physics.add.sprite(375 + 22*mul, 665, 'pole').setGravityY(-450).setGravityX(0);
      gameState.Bottom23.setScale(.2, randomLength.Bottom23);
      gameState.Bottom24 = this.physics.add.sprite(375 + 23*mul, 665, 'pole').setGravityY(-450).setGravityX(0);
      gameState.Bottom24.setScale(.2, randomLength.Bottom24);
      gameState.Bottom25 = this.physics.add.sprite(375 + 24*mul, 665, 'pole').setGravityY(-450).setGravityX(0);
      gameState.Bottom25.setScale(.2, randomLength.Bottom25);
      /*gameState.teleporter = this.physics.add.sprite(1775, 665, 'invisibleWall').setGravityY(-450).setGravityX(0);
      gameState.teleporter.setScale(.1, 2.23);*/
      
      //Top blocks
      gameState.Top1 = this.physics.add.sprite(375, 0, 'pole').setGravityY(-450).setGravityX(0);
      gameState.Top1.setScale(.2, poleDistance - randomLength.Bottom1);
      gameState.Top2 = this.physics.add.sprite(650, 0, 'pole').setGravityY(-450).setGravityX(0);
      gameState.Top2.setScale(.2, poleDistance - randomLength.Bottom2);
      gameState.Top3 = this.physics.add.sprite(925, 0, 'pole').setGravityY(-450).setGravityX(0);
      gameState.Top3.setScale(.2, poleDistance - randomLength.Bottom3);
      gameState.Top4 = this.physics.add.sprite(1200, 0, 'pole').setGravityY(-450).setGravityX(0);
      gameState.Top4.setScale(.2, poleDistance - randomLength.Bottom4);
      gameState.Top5 = this.physics.add.sprite(1475, 0, 'pole').setGravityY(-450).setGravityX(0);
      gameState.Top5.setScale(.2, poleDistance - randomLength.Bottom5);
      gameState.Top6 = this.physics.add.sprite(1750, 0, 'pole').setGravityY(-450).setGravityX(0);
      gameState.Top6.setScale(.2, poleDistance - randomLength.Bottom6);
     
      gameState.Top7 = this.physics.add.sprite(1750+ 275, 0, 'pole').setGravityY(-450).setGravityX(0);
      gameState.Top7.setScale(.2, poleDistance - randomLength.Bottom7);
      gameState.Top8 = this.physics.add.sprite(1750+550, 0, 'pole').setGravityY(-450).setGravityX(0);
      gameState.Top8.setScale(.2, poleDistance - randomLength.Bottom8);
      gameState.Top9 = this.physics.add.sprite(1750+825, 0, 'pole').setGravityY(-450).setGravityX(0);
      gameState.Top9.setScale(.2, poleDistance - randomLength.Bottom9);
      gameState.Top10 = this.physics.add.sprite(1750+1100, 0, 'pole').setGravityY(-450).setGravityX(0);
      gameState.Top10.setScale(.2, poleDistance - randomLength.Bottom10);
      gameState.Top11 = this.physics.add.sprite(1750+1375, 0, 'pole').setGravityY(-450).setGravityX(0);
      gameState.Top11.setScale(.2, poleDistance - randomLength.Bottom11);
      gameState.Top12 = this.physics.add.sprite(1750+1650, 0, 'pole').setGravityY(-450).setGravityX(0);
      gameState.Top12.setScale(.2, poleDistance - randomLength.Bottom12);
     
      gameState.Top13 = this.physics.add.sprite(1750+1650+275, 0, 'pole').setGravityY(-450).setGravityX(0);
      gameState.Top13.setScale(.2, poleDistance - randomLength.Bottom13);
      gameState.Top14 = this.physics.add.sprite(1750+1650+550, 0, 'pole').setGravityY(-450).setGravityX(0);
      gameState.Top14.setScale(.2, poleDistance - randomLength.Bottom14);
      gameState.Top15 = this.physics.add.sprite(1750+1650+825, 0, 'pole').setGravityY(-450).setGravityX(0);
      gameState.Top15.setScale(.2, poleDistance - randomLength.Bottom15);
      gameState.Top16 = this.physics.add.sprite(1750+1650+1100, 0, 'pole').setGravityY(-450).setGravityX(0);
      gameState.Top16.setScale(.2, poleDistance - randomLength.Bottom16);
      gameState.Top17 = this.physics.add.sprite(1750+1650+1375, 0, 'pole').setGravityY(-450).setGravityX(0);
      gameState.Top17.setScale(.2, poleDistance - randomLength.Bottom17);
      gameState.Top18 = this.physics.add.sprite(1750+1650+1650, 0, 'pole').setGravityY(-450).setGravityX(0);
      gameState.Top18.setScale(.2, poleDistance - randomLength.Bottom18);
     
      gameState.Top19 = this.physics.add.sprite(1750+1650+1650+275, 0, 'pole').setGravityY(-450).setGravityX(0);
      gameState.Top19.setScale(.2, poleDistance - randomLength.Bottom19);
      gameState.Top20 = this.physics.add.sprite(1750+1650+1650+550, 0, 'pole').setGravityY(-450).setGravityX(0);
      gameState.Top20.setScale(.2, poleDistance - randomLength.Bottom20);
      gameState.Top21 = this.physics.add.sprite(1750+1650+1650+825, 0, 'pole').setGravityY(-450).setGravityX(0);
      gameState.Top21.setScale(.2, poleDistance - randomLength.Bottom21);
      gameState.Top22 = this.physics.add.sprite(1750+1650+1650+1100, 0, 'pole').setGravityY(-450).setGravityX(0);
      gameState.Top22.setScale(.2, poleDistance - randomLength.Bottom22);
      gameState.Top23 = this.physics.add.sprite(1750+1650+1650+1375, 0, 'pole').setGravityY(-450).setGravityX(0);
      gameState.Top23.setScale(.2, poleDistance - randomLength.Bottom23);
      gameState.Top24 = this.physics.add.sprite(1750+1650+1650+1650, 0, 'pole').setGravityY(-450).setGravityX(0);
      gameState.Top24.setScale(.2, poleDistance - randomLength.Bottom24);
      gameState.Top25 = this.physics.add.sprite(1750+1650+1650+1650+275, 0, 'pole').setGravityY(-450).setGravityX(0);
      gameState.Top25.setScale(.2, poleDistance - randomLength.Bottom25);

     /* this.physics.add.collider(gameState.bird, gameState.teleporter, () => {
        this.scene.stop('GameScene');
        this.scene.start('GameScene');
      })*/
      
      this.physics.add.collider(gameState.bird, gameState.Bottom1, () => {
        
        
        gameState.Bottom1.setVelocityX(0);
        gameState.bird.setVelocityX(-20)
        this.cameras.main.startFollow(gameState.restart);
        gameState.letBirdFly = false
        gameState.restart.setX(320).setY(320)
        gameState.finalScore.setX(150).setY(150).setScale(5)
        
      })
      this.physics.add.collider(gameState.bird, gameState.Bottom2, () => {
        
        
        gameState.Bottom2.setVelocityX(0);
        gameState.bird.setVelocityX(-20)
        this.cameras.main.startFollow(gameState.restart);
        gameState.letBirdFly = false
        gameState.restart.setX(320).setY(320)
        gameState.finalScore.setX(150).setY(150).setScale(5)
        
      })
      this.physics.add.collider(gameState.bird, gameState.Bottom3, () => {
        
        
        gameState.Bottom3.setVelocityX(0);
        gameState.bird.setVelocityX(-20)
        this.cameras.main.startFollow(gameState.restart);
        gameState.letBirdFly = false
        gameState.restart.setX(320).setY(320)
        gameState.finalScore.setX(150).setY(150).setScale(5)
       
      })
      this.physics.add.collider(gameState.bird, gameState.Bottom4, () => {
        
        
        gameState.Bottom4.setVelocityX(0);
        gameState.bird.setVelocityX(-20)
        this.cameras.main.startFollow(gameState.restart);
        gameState.letBirdFly = false
        gameState.restart.setX(320).setY(320)
        gameState.finalScore.setX(150).setY(150).setScale(5)
        
      })
      this.physics.add.collider(gameState.bird, gameState.Bottom5, () => {
        
        
        gameState.Bottom5.setVelocityX(0);
        gameState.bird.setVelocityX(-20)
        this.cameras.main.startFollow(gameState.restart);
        gameState.letBirdFly = false
        gameState.restart.setX(320).setY(320)
        gameState.finalScore.setX(150).setY(150).setScale(5)
        
      })
      this.physics.add.collider(gameState.bird, gameState.Bottom6, () => {
        
        
        gameState.Bottom6.setVelocityX(0);
        gameState.bird.setVelocityX(-20)
        this.cameras.main.startFollow(gameState.restart);
        gameState.letBirdFly = false
        gameState.restart.setX(320).setY(320)
        gameState.finalScore.setX(150).setY(150).setScale(5)
        
      })
      this.physics.add.collider(gameState.bird, gameState.Bottom7, () => {
        
        
        gameState.Bottom7.setVelocityX(0);
        gameState.bird.setVelocityX(-20)
        this.cameras.main.startFollow(gameState.restart);
        gameState.letBirdFly = false
        gameState.restart.setX(320).setY(320)
        gameState.finalScore.setX(150).setY(150).setScale(5)
        
      })
      this.physics.add.collider(gameState.bird, gameState.Bottom8, () => {
        
        
        gameState.Bottom8.setVelocityX(0);
        gameState.bird.setVelocityX(-20)
        this.cameras.main.startFollow(gameState.restart);
        gameState.letBirdFly = false
        gameState.restart.setX(320).setY(320)
        gameState.finalScore.setX(150).setY(150).setScale(5)
        
      })
      this.physics.add.collider(gameState.bird, gameState.Bottom9, () => {
        
        
        gameState.Bottom9.setVelocityX(0);
        gameState.bird.setVelocityX(-20)
        this.cameras.main.startFollow(gameState.restart);
        gameState.letBirdFly = false
        gameState.restart.setX(320).setY(320)
        gameState.finalScore.setX(150).setY(150).setScale(5)
        
      })
      this.physics.add.collider(gameState.bird, gameState.Bottom10, () => {
        
        
        gameState.Bottom10.setVelocityX(0);
        gameState.bird.setVelocityX(-20)
        this.cameras.main.startFollow(gameState.restart);
        gameState.letBirdFly = false
        gameState.restart.setX(320).setY(320)
        gameState.finalScore.setX(150).setY(150).setScale(5)
        
      })
      this.physics.add.collider(gameState.bird, gameState.Bottom11, () => {
        
        
        gameState.Bottom.setVelocityX(0);
        gameState.bird.setVelocityX(-20)
        this.cameras.main.startFollow(gameState.restart);
        gameState.letBirdFly = false
        gameState.restart.setX(320).setY(320)
        gameState.finalScore.setX(150).setY(150).setScale(5)
        
      })
      this.physics.add.collider(gameState.bird, gameState.Bottom12, () => {
        
        
        gameState.Bottom12.setVelocityX(0);
        gameState.bird.setVelocityX(-20)
        this.cameras.main.startFollow(gameState.restart);
        gameState.letBirdFly = false
        gameState.restart.setX(320).setY(320)
        gameState.finalScore.setX(150).setY(150).setScale(5)
        
      })
      this.physics.add.collider(gameState.bird, gameState.Bottom13, () => {
        
        
        gameState.Bottom13.setVelocityX(0);
        gameState.bird.setVelocityX(-20)
        this.cameras.main.startFollow(gameState.restart);
        gameState.letBirdFly = false
        gameState.restart.setX(320).setY(320)
        gameState.finalScore.setX(150).setY(150).setScale(5)
        
      })
      this.physics.add.collider(gameState.bird, gameState.Bottom14, () => {
        
        
        gameState.Bottom14.setVelocityX(0);
        gameState.bird.setVelocityX(-20)
        this.cameras.main.startFollow(gameState.restart);
        gameState.letBirdFly = false
        gameState.restart.setX(320).setY(320)
        gameState.finalScore.setX(150).setY(150).setScale(5)
        
      })
      this.physics.add.collider(gameState.bird, gameState.Bottom15, () => {
        
        
        gameState.Bottom15.setVelocityX(0);
        gameState.bird.setVelocityX(-20)
        this.cameras.main.startFollow(gameState.restart);
        gameState.letBirdFly = false
        gameState.restart.setX(320).setY(320)
        gameState.finalScore.setX(150).setY(150).setScale(5)
        
      })
      this.physics.add.collider(gameState.bird, gameState.Bottom16, () => {
        
        
        gameState.Bottom16.setVelocityX(0);
        gameState.bird.setVelocityX(-20)
        this.cameras.main.startFollow(gameState.restart);
        gameState.letBirdFly = false
        gameState.restart.setX(320).setY(320)
        gameState.finalScore.setX(150).setY(150).setScale(5)
        
      })
      this.physics.add.collider(gameState.bird, gameState.Bottom17, () => {
        
        
        gameState.Bottom17.setVelocityX(0);
        gameState.bird.setVelocityX(-20)
        this.cameras.main.startFollow(gameState.restart);
        gameState.letBirdFly = false
        gameState.restart.setX(320).setY(320)
        gameState.finalScore.setX(150).setY(150).setScale(5)
        
      })
      this.physics.add.collider(gameState.bird, gameState.Bottom18, () => {
        
        
        gameState.Bottom18.setVelocityX(0);
        gameState.bird.setVelocityX(-20)
        this.cameras.main.startFollow(gameState.restart);
        gameState.letBirdFly = false
        gameState.restart.setX(320).setY(320)
        gameState.finalScore.setX(150).setY(150).setScale(5)
        
      })
      this.physics.add.collider(gameState.bird, gameState.Bottom19, () => {
        
        
        gameState.Bottom19.setVelocityX(0);
        gameState.bird.setVelocityX(-20)
        this.cameras.main.startFollow(gameState.restart);
        gameState.letBirdFly = false
        gameState.restart.setX(320).setY(320)
        gameState.finalScore.setX(150).setY(150).setScale(5)
        
      })
      this.physics.add.collider(gameState.bird, gameState.Bottom20, () => {
        
        
        gameState.Bottom20.setVelocityX(0);
        gameState.bird.setVelocityX(-20)
        this.cameras.main.startFollow(gameState.restart);
        gameState.letBirdFly = false
        gameState.restart.setX(320).setY(320)
        gameState.finalScore.setX(150).setY(150).setScale(5)
        
      })
      this.physics.add.collider(gameState.bird, gameState.Bottom21, () => {
        
        
        gameState.Bottom21.setVelocityX(0);
        gameState.bird.setVelocityX(-20)
        this.cameras.main.startFollow(gameState.restart);
        gameState.letBirdFly = false
        gameState.restart.setX(320).setY(320)
        gameState.finalScore.setX(150).setY(150).setScale(5)
        
      })
      this.physics.add.collider(gameState.bird, gameState.Bottom22, () => {
        
        
        gameState.Bottom22.setVelocityX(0);
        gameState.bird.setVelocityX(-20)
        this.cameras.main.startFollow(gameState.restart);
        gameState.letBirdFly = false
        gameState.restart.setX(320).setY(320)
        gameState.finalScore.setX(150).setY(150).setScale(5)
        
      })
      this.physics.add.collider(gameState.bird, gameState.Bottom23, () => {
        
        
        gameState.Bottom23.setVelocityX(0);
        gameState.bird.setVelocityX(-20)
        this.cameras.main.startFollow(gameState.restart);
        gameState.letBirdFly = false
        gameState.restart.setX(320).setY(320)
        gameState.finalScore.setX(150).setY(150).setScale(5)
        
      })
      this.physics.add.collider(gameState.bird, gameState.Bottom24, () => {
        
        
        gameState.Bottom24.setVelocityX(0);
        gameState.bird.setVelocityX(-20)
        this.cameras.main.startFollow(gameState.restart);
        gameState.letBirdFly = false
        gameState.restart.setX(320).setY(320)
        gameState.finalScore.setX(150).setY(150).setScale(5)
        
      })
      this.physics.add.collider(gameState.bird, gameState.Bottom25, () => {
        
        
        gameState.Bottom25.setVelocityX(0);
        gameState.bird.setVelocityX(-20)
        this.cameras.main.startFollow(gameState.restart);
        gameState.letBirdFly = false
        gameState.restart.setX(320).setY(320)
        gameState.finalScore.setX(150).setY(150).setScale(5)
        
      })
    
      this.physics.add.collider(gameState.bird, gameState.Top1, () => {
        
        
        gameState.Top1.setVelocityX(0);
        gameState.bird.setVelocityX(-20)
        this.cameras.main.startFollow(gameState.restart);
        gameState.letBirdFly = false
        gameState.restart.setX(320).setY(320)
        gameState.finalScore.setX(150).setY(150).setScale(5)
        
      })
      this.physics.add.collider(gameState.bird, gameState.Top2, () => {
        
        
        gameState.Top2.setVelocityX(0);
        gameState.bird.setVelocityX(-20)
        this.cameras.main.startFollow(gameState.restart);
        gameState.letBirdFly = false
        gameState.restart.setX(320).setY(320)
        gameState.finalScore.setX(150).setY(150).setScale(5)
        
      })
      this.physics.add.collider(gameState.bird, gameState.Top3, () => {
        
        
        gameState.Top3.setVelocityX(0);
        gameState.bird.setVelocityX(-20)
        this.cameras.main.startFollow(gameState.restart);
        gameState.letBirdFly = false
        gameState.restart.setX(320).setY(320)
        gameState.finalScore.setX(150).setY(150).setScale(5)
        
      })
      this.physics.add.collider(gameState.bird, gameState.Top4, () => {
        
        
        gameState.Top4.setVelocityX(0);
        gameState.bird.setVelocityX(-20)
        this.cameras.main.startFollow(gameState.restart);
        gameState.letBirdFly = false
        gameState.restart.setX(320).setY(320)
        gameState.finalScore.setX(150).setY(150).setScale(5)
        
      })
      this.physics.add.collider(gameState.bird, gameState.Top5, () => {
        
        
        gameState.Top5.setVelocityX(0);
        gameState.bird.setVelocityX(-20)
        this.cameras.main.startFollow(gameState.restart);
        gameState.letBirdFly = false
        gameState.restart.setX(320).setY(320)
        gameState.finalScore.setX(150).setY(150).setScale(5)
        
      })
      this.physics.add.collider(gameState.bird, gameState.Top6, () => {
        
        
        gameState.Top6.setVelocityX(0);
        gameState.bird.setVelocityX(-20)
        this.cameras.main.startFollow(gameState.restart);
        gameState.letBirdFly = false
        gameState.restart.setX(320).setY(320)
        gameState.finalScore.setX(150).setY(150).setScale(5)
        
      })
      this.physics.add.collider(gameState.bird, gameState.Top7, () => {
        
        
        gameState.Top7.setVelocityX(0);
        gameState.bird.setVelocityX(-20)
        this.cameras.main.startFollow(gameState.restart);
        gameState.letBirdFly = false
        gameState.restart.setX(320).setY(320)
        gameState.finalScore.setX(150).setY(150).setScale(5)
        
      })
      this.physics.add.collider(gameState.bird, gameState.Top8, () => {
        
        
        gameState.Top8.setVelocityX(0);
        gameState.bird.setVelocityX(-20)
        this.cameras.main.startFollow(gameState.restart);
        gameState.letBirdFly = false
        gameState.restart.setX(320).setY(320)
        gameState.finalScore.setX(150).setY(150).setScale(5)
        
      })
      this.physics.add.collider(gameState.bird, gameState.Top9, () => {
        
        
        gameState.Top9.setVelocityX(0);
        gameState.bird.setVelocityX(-20)
        this.cameras.main.startFollow(gameState.restart);
        gameState.letBirdFly = false
        gameState.restart.setX(320).setY(320)
        gameState.finalScore.setX(150).setY(150).setScale(5)
        
      })
      this.physics.add.collider(gameState.bird, gameState.Top10, () => {
        
        
        gameState.Top10.setVelocityX(0);
        gameState.bird.setVelocityX(-20)
        this.cameras.main.startFollow(gameState.restart);
        gameState.letBirdFly = false
        gameState.restart.setX(320).setY(320)
        gameState.finalScore.setX(150).setY(150).setScale(5)
        
      })
      this.physics.add.collider(gameState.bird, gameState.Top11, () => {
        
        
        gameState.Top11.setVelocityX(0);
        gameState.bird.setVelocityX(-20)
        this.cameras.main.startFollow(gameState.restart);
        gameState.letBirdFly = false
        gameState.restart.setX(320).setY(320)
        gameState.finalScore.setX(150).setY(150).setScale(5)
        
      })
      this.physics.add.collider(gameState.bird, gameState.Top12, () => {
        
        
        gameState.Top12.setVelocityX(0);
        gameState.bird.setVelocityX(-20)
        this.cameras.main.startFollow(gameState.restart);
        gameState.letBirdFly = false
        gameState.restart.setX(320).setY(320)
        gameState.finalScore.setX(150).setY(150).setScale(5)
        
      })
      this.physics.add.collider(gameState.bird, gameState.Top13, () => {
        
        
        gameState.Top13.setVelocityX(0);
        gameState.bird.setVelocityX(-20)
        this.cameras.main.startFollow(gameState.restart);
        gameState.letBirdFly = false
        gameState.restart.setX(320).setY(320)
        gameState.finalScore.setX(150).setY(150).setScale(5)
        
      })
      this.physics.add.collider(gameState.bird, gameState.Top14, () => {
        
        
        gameState.Top14.setVelocityX(0);
        gameState.bird.setVelocityX(-20)
        this.cameras.main.startFollow(gameState.restart);
        gameState.letBirdFly = false
        gameState.restart.setX(320).setY(320)
        gameState.finalScore.setX(150).setY(150).setScale(5)
        
      })
      this.physics.add.collider(gameState.bird, gameState.Top15, () => {
        
        
        gameState.Top15.setVelocityX(0);
        gameState.bird.setVelocityX(-20)
        this.cameras.main.startFollow(gameState.restart);
        gameState.letBirdFly = false
        gameState.restart.setX(320).setY(320)
        gameState.finalScore.setX(150).setY(150).setScale(5)
        
      })
      this.physics.add.collider(gameState.bird, gameState.Top16, () => {
        
        
        gameState.Top16.setVelocityX(0);
        gameState.bird.setVelocityX(-20)
        this.cameras.main.startFollow(gameState.restart);
        gameState.letBirdFly = false
        gameState.restart.setX(320).setY(320)
        gameState.finalScore.setX(150).setY(150).setScale(5)
        
      })
      this.physics.add.collider(gameState.bird, gameState.Top17, () => {
        
        
        gameState.Top17.setVelocityX(0);
        gameState.bird.setVelocityX(-20)
        this.cameras.main.startFollow(gameState.restart);
        gameState.letBirdFly = false
        gameState.restart.setX(320).setY(320)
        gameState.finalScore.setX(150).setY(150).setScale(5)
        
      })
      this.physics.add.collider(gameState.bird, gameState.Top18, () => {
        
        
        gameState.Top18.setVelocityX(0);
        gameState.bird.setVelocityX(-20)
        this.cameras.main.startFollow(gameState.restart);
        gameState.letBirdFly = false
        gameState.restart.setX(320).setY(320)
        gameState.finalScore.setX(150).setY(150).setScale(5)
        
      })
      this.physics.add.collider(gameState.bird, gameState.Top19, () => {
        
        
        gameState.Top19.setVelocityX(0);
        gameState.bird.setVelocityX(-20)
        this.cameras.main.startFollow(gameState.restart);
        gameState.letBirdFly = false
        gameState.restart.setX(320).setY(320)
        gameState.finalScore.setX(150).setY(150).setScale(5)
        
      })
      this.physics.add.collider(gameState.bird, gameState.Top20, () => {
        
        
        gameState.Top20.setVelocityX(0);
        gameState.bird.setVelocityX(-20)
        this.cameras.main.startFollow(gameState.restart);
        gameState.letBirdFly = false
        gameState.restart.setX(320).setY(320)
        gameState.finalScore.setX(150).setY(150).setScale(5)
        
      })
      this.physics.add.collider(gameState.bird, gameState.Top21, () => {
        
        
        gameState.Top21.setVelocityX(0);
        gameState.bird.setVelocityX(-20)
        this.cameras.main.startFollow(gameState.restart);
        gameState.letBirdFly = false
        gameState.restart.setX(320).setY(320)
        gameState.finalScore.setX(150).setY(150).setScale(5)
        
      })
      this.physics.add.collider(gameState.bird, gameState.Top22, () => {
        
        
        gameState.Top22.setVelocityX(0);
        gameState.bird.setVelocityX(-20)
        this.cameras.main.startFollow(gameState.restart);
        gameState.letBirdFly = false
        gameState.restart.setX(320).setY(320)
        gameState.finalScore.setX(150).setY(150).setScale(5)
        
      })
      this.physics.add.collider(gameState.bird, gameState.Top23, () => {
        
        
        gameState.Top23.setVelocityX(0);
        gameState.bird.setVelocityX(-20)
        this.cameras.main.startFollow(gameState.restart);
        gameState.letBirdFly = false
        gameState.restart.setX(320).setY(320)
        gameState.finalScore.setX(150).setY(150).setScale(5)
        
      })
      this.physics.add.collider(gameState.bird, gameState.Top24, () => {
        
        
        gameState.Top24.setVelocityX(0);
        gameState.bird.setVelocityX(-20)
        this.cameras.main.startFollow(gameState.restart);
        gameState.letBirdFly = false
        gameState.restart.setX(320).setY(320)
        gameState.finalScore.setX(150).setY(150).setScale(5)
        
      })
      this.physics.add.collider(gameState.bird, gameState.Top25, () => {
        
        
        gameState.Top25.setVelocityX(0);
        gameState.bird.setVelocityX(-20)
        this.cameras.main.startFollow(gameState.restart);
        gameState.letBirdFly = false
        gameState.restart.setX(320).setY(320)
        gameState.finalScore.setX(150).setY(150).setScale(5)
        
      })





      gameState.restart = this.add.image(-320, -320, 'restart')
      gameState.finalScore = this.add.text(-200, -200, `${gameState.score} SCORE`).setDepth(10)
      gameState.restart.setInteractive()
      gameState.restart.on('pointerup', () => {
        gameState.score = 0;
        this.scene.stop('GameScene');
        this.scene.start('GameScene');
      
      })
      gameState.restart = this.add.image(-320, -320, 'restart').setDepth(10)
      gameState.restart.setInteractive()
      gameState.restart.on('pointerup', () => {
        gameState.score = 0;
        this.scene.stop('GameScene');
        this.scene.start('GameScene');
      })
   
      
      /*this.physics.add.collider(gameState.bird, gameState.Bottom1, () => {
        gameState.bird.destroy();
      })*/
      const adjectives = ['EPIC', 'WOW', 'GREAT', 'COOL', 'NICE']
      gameState.OtherScoreText = this.add.text(7250, config.height / 2 - 100, `${adjectives[Math.floor(Math.random()*4)]}`, {fontSize: 80, color: '#00008b'})
      gameState.OtherScoreText1 = this.add.text(7325, config.height / 2, ` ${Math.round(gameState.score)}`, {fontSize: 80, color: '#00008b'})
      gameState.OtherScoreText2 = this.add.text(7250, config.height / 2 + 120, `SCORE`, {fontSize: 80, color: '#00008b'});
      gameState.shift = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SHIFT);
    
      
        }
        
        update() {
           gameState.birdSpeed = 100
          let randomColor =  '0x'+Math.floor(Math.random()*16777215).toString(16);
          if (Phaser.Input.Keyboard.JustDown(gameState.shift)){
            gameState.bird.setTint(randomColor);
          }
          if(gameState.letBirdFly === false && gameState.cursors.space.isDown){
            this.scene.stop('GameScene');
            this.scene.start('GameScene');
          }
          if(gameState.bird.y < 0 || gameState.bird.y > 750){
            gameState.Top15.setVelocityX(0);
            gameState.bird.setVelocityX(-20)
            this.cameras.main.startFollow(gameState.restart);
            gameState.letBirdFly = false
            gameState.restart.setX(320).setY(320)
            gameState.finalScore.setX(150).setY(150).setScale(5)
          }
          if(gameState.letBirdFly === false){
            gameState.bird.angle -= 15
            gameState.scoreText.destroy();
            gameState.sky.setDepth(8)
            gameState.skyline.setDepth(9)
            gameState.bird.setX(-2000)
            
          }
          if(gameState.score > 5 && gameState.score < 21){
             gameState.birdSpeed = 110;
          }
          if(gameState.score > 20 && gameState.score < 51){
            gameState.birdSpeed = 115
          }
          if(gameState.score > 50){
            gameState.birdSpeed = 120
          }
          if(gameState.letBirdFly === true){
            gameState.finalScore.setText(`${Math.round(gameState.score)} SCORE`)
          }
          if (gameState.score > 23){
            gameState.resceneText.setText('KEEP')
            gameState.resceneText1.setText('GOING')
          }
          if (gameState.cursors.up.isUp){
            gameState.bird.anims.play('fly');
            gameState.bird.angle += .37
            
          } // -180 y velocity 60 x
          if (gameState.bird.angle > 30){
            gameState.bird.angle = 30
          }
          if (gameState.bird.angle > 20){
            gameState.bird.angle += 1.5
          }
          if (gameState.bird.angle > 50){
            gameState.bird.angle = 90
          }
          if(gameState.letBirdFly === true){
          if (gameState.cursors.up.isDown){
            gameState.bird.setVelocityY(-235).setVelocityX(gameState.birdSpeed); //x is normally 110 y is -235
            gameState.bird.angle = -10
          }
          
        }
          if (gameState.bird.angle < -35){
            gameState.bird.angle = -35
          }
          if (gameState.angle < -20){
            gameState.angle -= 10
          }
          if(gameState.cursors.up.isDown && gameState.bird.angle === 30){
              gameState.bird.angle = 0
          }
          






          //gameState.bird.x >= 405 && gameState.bird.x <=407 || gameState.bird.x >= 680 && gameState.bird.x <=682 || gameState.bird.x >= 680+275 && gameState.bird.x <=682+275 || gameState.bird.x >= 680+2*275 && gameState.bird.x <=682+2*275 || gameState.bird.x >= 680+3*275 && gameState.bird.x <=682+3*275 || gameState.bird.x >= 680+4*275 && gameState.bird.x <=682+4*275 || gameState.bird.x >= 680+5*275 && gameState.bird.x <=682+5*275 || gameState.bird.x >= 680+6*275 && gameState.bird.x <=682+6*275 || gameState.bird.x >= 680+7*275 && gameState.bird.x <=682+7*275 || gameState.bird.x >= 680+8*275 && gameState.bird.x <=682+8*275 || gameState.bird.x >= 680+9*275 && gameState.bird.x <=682+9*275 || gameState.bird.x >= 680+10*275 && gameState.bird.x <=682+10*275 || gameState.bird.x >= 680+11*275 && gameState.bird.x <=682+11*275 || gameState.bird.x >= 680+12*275 && gameState.bird.x <=682+12*275 || gameState.bird.x >= 680+13*275 && gameState.bird.x <=682+13*275 || gameState.bird.x >= 680+14*275 && gameState.bird.x <=682+14*275 || gameState.bird.x >= 680+15*275 && gameState.bird.x <=682+15*275 || gameState.bird.x >= 680+16*275 && gameState.bird.x <=682+16*275 || gameState.bird.x >= 680+17*275 && gameState.bird.x <=682+17*275 || gameState.bird.x >= 680+18*275 && gameState.bird.x <=682+18*275 || gameState.bird.x >= 680+19*275 && gameState.bird.x <=682+19*275 || gameState.bird.x >= 680+20*275 && gameState.bird.x <=682+20*275 ||gameState.bird.x >= 680+21*275 && gameState.bird.x <=682+21*275 || gameState.bird.x >= 680+22*275 && gameState.bird.x <=682+22*275 || gameState.bird.x >= 680+23*275 && gameState.bird.x <=682+23*275
   
       if (gameState.bird.x >= 405 && gameState.bird.x <=410){
        gameState.score += 1/3
         gameState.scoreText.setText(`Score: ${Math.round(gameState.score)}`)
       } 
       if(gameState.bird.x >= 430 )
 

        if (gameState.bird.x >= 680 && gameState.bird.x <=685){
         gameState.score += 1/3  
          gameState.scoreText.setText(`Score: ${Math.round(gameState.score)}`)
        } 
   
        if (gameState.bird.x >= 955 && gameState.bird.x <=960){
         gameState.score += 1/3
          gameState.scoreText.setText(`Score: ${Math.round(gameState.score)}`)
        }
    
        if (gameState.bird.x >= 1230 && gameState.bird.x <=1235){
         gameState.score += 1/3
          gameState.scoreText.setText(`Score: ${Math.round(gameState.score)}`)
        } 
      
        if (gameState.bird.x >= 1505 && gameState.bird.x <= 1510){
         gameState.score += 1/3  
          gameState.scoreText.setText(`Score: ${Math.round(gameState.score)}`)
        } 

       
        if (gameState.bird.x >= 1780 && gameState.bird.x <= 1785){  // 405 680 955 1230 1505 1780 2055 
         gameState.score += 1/3  
          gameState.scoreText.setText(`Score: ${Math.round(gameState.score)}`)
        } 
       
        if (gameState.bird.x >= 2055 && gameState.bird.x <= 2060){ 
         gameState.score += 1/3
          gameState.scoreText.setText(`Score: ${Math.round(gameState.score)}`)
        } 
     
        if (gameState.bird.x >= 2055+275 && gameState.bird.x <= 2060+275){ 
         gameState.score += 1/3 
          gameState.scoreText.setText(`Score: ${Math.round(gameState.score)}`)
        } 

       
        if (gameState.bird.x >= 2055+2*275 && gameState.bird.x <= 2060+2*275){ 
         gameState.score += 1/3
          gameState.scoreText.setText(`Score: ${Math.round(gameState.score)}`)
        } 

       
        if (gameState.bird.x >= 2055+3*275 && gameState.bird.x <= 2060+3*275){ 
         gameState.score += 1/3  
          gameState.scoreText.setText(`Score: ${Math.round(gameState.score)}`)
        } 
  
      
        if (gameState.bird.x >= 2055+4*275 && gameState.bird.x <= 2060+4*275){ 
         gameState.score += 1/3  
          gameState.scoreText.setText(`Score: ${Math.round(gameState.score)}`)
        } 
       
      
        if (gameState.bird.x >= 2055+5*275 && gameState.bird.x <= 2060+5*275){ 
         gameState.score += 1/3  
          gameState.scoreText.setText(`Score: ${Math.round(gameState.score)}`)
        } 
       
      
        if (gameState.bird.x >= 2055+6*275 && gameState.bird.x <= 2060+6*275){ 
         gameState.score += 1/3  
          gameState.scoreText.setText(`Score: ${Math.round(gameState.score)}`)
        } 
       
      
        if (gameState.bird.x >= 2055+7*275 && gameState.bird.x <= 2060+7*275){ 
         gameState.score += 1/3  
          gameState.scoreText.setText(`Score: ${Math.round(gameState.score)}`)
        } 
       
       
        if (gameState.bird.x >= 2055+8*275 && gameState.bird.x <= 2060+8*275){ 
         gameState.score += 1/3  
          gameState.scoreText.setText(`Score: ${Math.round(gameState.score)}`)
        } 
       
       
        if (gameState.bird.x >= 2055+9*275 && gameState.bird.x <= 2060+9*275){ 
         gameState.score += 1/3  
          gameState.scoreText.setText(`Score: ${Math.round(gameState.score)}`)
        } 
       
       
        if (gameState.bird.x >= 2055+10*275 && gameState.bird.x <= 2060+10*275){ 
         gameState.score += 1/3  
          gameState.scoreText.setText(`Score: ${Math.round(gameState.score)}`)
        } 
       
       
        if (gameState.bird.x >= 2055+11*275 && gameState.bird.x <= 2060+11*275){ 
         gameState.score += 1/3  
          gameState.scoreText.setText(`Score: ${Math.round(gameState.score)}`)
        } 
       
       
        if (gameState.bird.x >= 2055+12*275 && gameState.bird.x <= 2060+12*275){ 
         gameState.score += 1/3  
          gameState.scoreText.setText(`Score: ${Math.round(gameState.score)}`)
        } 
       
      
        if (gameState.bird.x >= 2055+13*275 && gameState.bird.x <= 2060+13*275){ 
         gameState.score += 1/3  
          gameState.scoreText.setText(`Score: ${Math.round(gameState.score)}`)
        }
       
      
        if (gameState.bird.x >= 2055+14*275 && gameState.bird.x <= 2060+14*275){ 
         gameState.score += 1/3  
          gameState.scoreText.setText(`Score: ${Math.round(gameState.score)}`)
        } 
       
       
        if (gameState.bird.x >= 2055+15*275 && gameState.bird.x <= 2060+15*275){ 
         gameState.score += 1/3  
          gameState.scoreText.setText(`Score: ${Math.round(gameState.score)}`)
        } 
       
       
        if (gameState.bird.x >= 2055+16*275 && gameState.bird.x <= 2060+16*275){ 
         gameState.score += 1/3  
          gameState.scoreText.setText(`Score: ${Math.round(gameState.score)}`)
        } 
       
      
        if (gameState.bird.x >= 2055+17*275 && gameState.bird.x <= 2060+17*275){ 
         gameState.score += 1/3  
          gameState.scoreText.setText(`Score: ${Math.round(gameState.score)}`)
        } 
       
      
        if (gameState.bird.x >= 2055+18*275 && gameState.bird.x <= 2060+18*275){ 
         gameState.score += 1/3  
          gameState.scoreText.setText(`Score: ${Math.round(gameState.score)}`)
        } 
       
       
       if (gameState.bird.x >= 2055+19*275 && gameState.bird.x <= 2060+19*275){ 
        gameState.score += 1/3  
        gameState.scoreText.setText(`Score: ${Math.round(gameState.score)}`)
       } 
       









  if (gameState.bird.x > 7225){
    this.scene.stop('GameScene');
    this.scene.start('GameScene')
  }
  /*if(gameState.bird.y > 727.8){
    gameState.bird.setVelocityX(0)
  }*/ // stops bird when hits ground
  if (gameState.bird.x > 0){
    gameState.OtherScoreText1.setText(gameState.score)
  }
   
  }
  }
  const config = {
    width: 500,
    height: 750,
    backgroundColor: 0x2196F3,
    physics: {
      default: 'arcade',
      arcade: {
        gravity: { y: 450 },
        debug: false
      }
    },
    scene: [StartScene, GameScene]
  }
    
  const game = new Phaser.Game(config)