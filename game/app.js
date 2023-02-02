const Application = PIXI.Application;

const app = new Application({
    width: 500,
    height: 500,
    transparent: false,
    antialias: true
});

app.renderer.background.color = 0x0D8FF;

app.renderer.resize(window.innerWidth,window.innerHeight);

app.renderer.view.style.position = `absolute`;

document.body.appendChild(app.view);

const Graphics = PIXI.Graphics;
const rectangle = new Graphics();
rectangle.beginFill(0XAA33BB)
rectangle.lineStyle(4,0xFFEA00,1)
rectangle.drawRect(200,200,100,100)
rectangle.endFill();

app.stage.addChild(rectangle);

const style = new PIXI.TextStyle({
    fontFamily: `Montserrat`,
    fontSize: 48,
    fill: `deepskyblue`,
    stroke: `#ffffff`,
    strokeThickness: 4,
    dropShadow: true,
    dropShadowDistance: 10,
    dropShadowBlur: 4,
    dropShadowColor: `#000000`,
});

const myText = new PIXI.Text(`Welcome To uhhhhhhhhhhhh....`,style);

app.stage.addChild(myText);

// const cloudtexture = PIXI.Texture.from(`./images/cloud.png`);
//const cloudsprite = new PIXI.TilingSprite(
//   cloudtexture,
//   app.screen.width,
//    app.screen.height
//)

//app.stage.addChild(cloudsprite);
// wip 