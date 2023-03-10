
console.log('Задание 1');
class Сircle {
    constructor ( radius ){
        this.radius = radius
        this.page = this.page
    }
get getSquare(){
    return this.radius
}
set setdiameter(value){
    return this.radius = value
}
get getdiameter(){
    return Math.PI * (this.radius * this.radius)
}
square(){ 
    return Math.PI * (this.radius * this.radius)
}
length(){
    return (2 * Math.PI) * resultRadius.radius
}
}
let resultRadius = new  Сircle (2)
console.log(`get-свойство, возвращающее радиус окружности ${resultRadius.getSquare}`);
console.log(`set-свойство, устанавливающее радиус окружности; ${resultRadius.setdiameter = resultRadius.getdiameter.toFixed(2)}` );
console.log(`get-свойство, возвращающее диаметр окружности ${ resultRadius.getdiameter.toFixed(2)}`);
console.log(  `Площадь окружности при радиусе ${resultRadius.radius} : ${resultRadius.square().toFixed(2)}`);
console.log( `Длина окружности при радиусе ${resultRadius.radius} : ${resultRadius.length().toFixed(2)}`);


console.log('задание 2');

class HTML {
    constructor ( nameTag = ' ' , closeTag = true  , textMassage = '', atributsMassive = [], stileMassive = [ ], insertedTegMassive = [] ){
        this.nameTag = nameTag
        this.closeTag = closeTag
        this.textMassage = textMassage
        this.atributsMassive = atributsMassive
        this.stileMassive = stileMassive
        this.insertedTegMassive = insertedTegMassive
    }
     set setAtributs(atributs){             
        this.atributsMassive.push(atributs) 
     }
     set setStyle(style){
        this.stileMassive.push(style)
     }
     set setInsertedTegEnd (insert){
        this.insertedTegMassive.push(insert)
     }
     set setInsertedTegStart (insert){
        this.insertedTegMassive.shift(insert)
     }
      get getHTML (){ 
         if (this.closeTag){
            return `<${this.nameTag} ${this.atributsMassive.join(';')} style= "${this.stileMassive.join(';')}" >${this.textMassage} ${this.insertedTegMassive.map(item => item.getHTML).join('')}</${this.nameTag}>`} 
         else {
            `<${this.nameTag} ${this.atributsMassive.join(';')} style= "${this.stileMassive.join(';')}" >${this.textMassage} ${this.insertedTegMassive.map(item => item.getHTML).join('')}>`
         }
      }
}

const a = new HTML('a', true, 'More...', [ "href = https://www.radiorecord.ru/" , "target = _blank"] , [] , [] )
const p = new HTML ('p', true, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod facere vero cum consectetur. Maxime id consequatur culpa quidem? Temporibus atque totam qui cum nostrum quos necessitatibus repudiandae voluptatum quia hic?' , [ "text-align: justify;"] , [] , [a] )
const img = new HTML( 'img' , true , '', ['"width: 100%", src = "https://pngicon.ru/file/uploads/1_3.png", alt = "Lorem" ' ], [] , [])
const h3 = new HTML( 'h3' , true , 'What is Lorem Ipsum?' , [] , [] , [])
const divTwo = new HTML ('div' , true, '' , [ '"width: 300px", "margin: 10px" '] , [] , [h3, img, p]) 
const div = new HTML('div', true, '', ['id = "wrapper"'], ['display: flex'], [divTwo, divTwo])
document.write(div.getHTML)
console.log(div.getHTML);



console.log('Задание 3');
class CSS {
    constructor ( nameCSSstile , cssMasive = [ ]){
        this.nameCSSstile = nameCSSstile 
        this.cssMasive = cssMasive
    }
    set upCss(style){
        return this.cssMasive.push(style)  
    }
    set delCss(i){
         return   result.cssMasive.splice(i , 1)
    }  
    get string () {
      return `.${this.nameCSSstile} {\n${this.cssMasive.join(';\n')}\n }`
    }
}

let stringresult = new CSS ( 'wrap' , ['background: black' , 'color: red' , ' margin: auto' ])
let result = new CSS( 'wrap' , ['background: black' , 'color: red' , ' margin: auto' ])
result.upCss = 'border: 1px solid black'
console.log(result.string);


console.log("задание 4")
// 
class HTMLNew {
    constructor ( Tag = ' ' , closeTegs = true  , Massage = '', atributs = [], stile = [ ], insertedTeg = [] ){
        this.Tag = Tag
        this.closeTegs = closeTegs
        this.Massage = Massage
        this.atributs = atributs
        this.stile = stile
        this.insertedTeg = insertedTeg
    }
     set setAtributs(atributs){             
        this.atributs.push(atributs) 
     }
     set setStyle(style){
        this.stile.push(style)
     }
     set setInsertedTegEnd (insert){
        this.insertedTegMassive.push(insert)
     }
     set setInsertedTegStart (insert){
        this.insertedTegMassive.shift(insert)
     }
      get getHTML (){ 
         if (this.closeTegs){
            return `<${this.Tag}  ${this.atributs.join(';')}>${this.Massage} ${this.insertedTeg.map(item => item.getHTML).join('')}</${this.Tag}>`} 
         else {
           return `<${this.Tag} ${this.atributs.join(';')}>${this.Massage} ${this.insertedTeg.map(item => item.getHTML).join('')}`
         }
      }
}
const aNew = new HTMLNew('a', true, 'More...', [ "href = https://www.radiorecord.ru/" , "target = _blank"] , [] , [] )
const pNew = new HTMLNew ('p', true, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod facere vero cum consectetur. Maxime id consequatur culpa quidem? Temporibus atque totam qui cum nostrum quos necessitatibus repudiandae voluptatum quia hic?' , [ 'class = "text"'] , [] , [a] )
const imgNew = new HTMLNew( 'img' , false , '', [' src = "https://pngicon.ru/file/uploads/1_3.png" class = "img"  alt = "Lorem"' ], [ ] , [])
const h3New = new HTMLNew( 'h3' , true , 'What is Lorem Ipsum?' , [] , [] , [])
const divTwoNew = new HTMLNew ('div' , true, '' , [] , [ 'class = "block"'] , [h3, img, p]) 
const divNew = new HTMLNew('div', true, '', ['class = "wrap"'], [ ], [divTwo, divTwo])
document.write(div.HTMLNew)
class CSSNew {
    constructor ( nameCSSstile , cssMasive = [ ]){
        this.nameCSSstile = nameCSSstile 
        this.cssMasive = cssMasive
    }
    set upCss(style){
        return this.cssMasive.push(style)  
    }
    set delCss(i){
         return   result.cssMasive.splice(i , 1)
    }  
    get string () {
      return `.${this.nameCSSstile} {\n${this.cssMasive.join(';\n')}\n }`
    }
}

let stringresultNew = new CSSNew ( 'wrap' , ['background: black' , 'color: red' , ' margin: auto' ])
let resultNew = new CSSNew( 'wrap' , ['background: black' , 'color: red' , ' margin: auto' ])
result.upCss = 'border: 1px solid black'
// console.log(resultNew );
class HTMLBlock {
   constructor (textHTML, styleCSS = []){
    this.textHTML = textHTML
    this.styleCSS = styleCSS
   }
    getCode () {
    return `<style>\n${this.styleCSS.map(item => item.string).join(';\n')}\n</style>` + this.textHTML
    }
}
let resultFourExersise = []
const wrap = new CSSNew ( 'wrap' , [  'display: flex'])
const block = new CSSNew( 'block' , ['width: 300px', 'height: 10px'])
const img1 = new CSSNew ( 'img' , ["width: 300px"]  )
const text = new CSSNew ('text' , ['text-align: justify'])
resultFourExersise.push(wrap, block , img1 , text)
// console.log(resultFourExersise);
const userHTML = new HTMLBlock (div.getHTML, resultFourExersise)
console.log(userHTML.getCode());
document.write(userHTML.getCode())















