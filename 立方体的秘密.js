var btns = document.getElementsByTagName('button');
for (var i = 0; i < btns.length; i++) {
  btns[i].onclick = function(){
    for (var i = 0; i< btns.length; i++){
      btns[i].style.backgroundColor = '';
    }
    this.style.backgroundColor = 'red';
  }
}
function xiao(){
  daxiao = "你是一个谦虚、关注他人的人，让人容易亲近，但同时你可能也有一点胆怯和自卑。"
}
function zhong(){
  daxiao = "你是一个较为平衡的人，不自负也不自卑，保有自己自尊的同时对他人十分热情。"
}
function da(){
  daxiao = "你是一个自信慷慨的人，有抱负，爱冒险，但是可能有一点利己，对于自己人生或周边事物的支配欲较强。"
}

function yuan(){
  juli = "你在行动之前会考虑，会自我观察，行为模式相对更加理性、克己，对未来有比较清晰的规划。同时，你会更喜欢独处的时光，喜欢独自一人去探索世界。"
}
function jin(){
  juli = "你是一个比较感性的人，比较容易受情绪影响，也更喜欢用情感去体验生活，永远活在当下。同时，你比较喜欢社交，喜欢同伴，有比较多的朋友。"
}


function wanquan(){
  touming = "你是一个直率，不隐藏的人，往往会即刻把自己的真实想法或情感表露出来。"
}
function ban(){
  touming = "你拥有迷人的神秘感，时而表露自我，时而保守隐私，忽近忽远，可能连你自己也捉摸不透。"
}
function bu(){
  touming = "你比较注重保护自己的隐私，比较慢的才能信任他人，表露自我。"
}

function mutou(){
  caizhi = "你的朋友或者同事大多都是暖心的，与你真诚相待，但是如果梯子摇摇晃晃或者出现破损，则表示你们的关系可能出现了问题或者正在疏远。"
}
function jinshu(){
  caizhi = "你的朋友或同事大多能力强大，可以给你提供你想要的帮助，十分可靠，但相反的你们的关系可能也会比较利益化，缺少情感交流。"
}
function shengzhi(){
  caizhi = "你的朋友比较灵活多变，你比较热衷于探索自己的生活，在不同的生活阶段拥有不同的朋友。"
}

function kaozhe(){
  weizhi = "你和你的朋友相互依靠，相互理解，关系紧密。"
}
function duli(){
  weizhi = "你在朋友相处中习惯保持一定的距离，不希望他们过多的介入自己的生活。"
}
function lianjie(){
  weizhi = "你的朋友们可以帮助你成长，或者在帮助你实现梦想。"
}
function daozhe(){
  weizhi = "你的朋友们可能多躺平，活在自己的舒适区当中。"
}
function limian(){
  weizhi = "你十分信赖你的朋友，你的朋友可能对你知根知底，但同时你对你朋友的忠诚度和占有欲较高。"
}

function bai(){
  yanse = "你比较重视伴侣的信任和忠诚，希望伴侣对自己忠贞不二。"
}
function hei(){
  yanse = "你希望你的伴侣成熟有魅力，且能够主导你们的关系。"
}
function zong(){
  yanse = "你希望你的伴侣对你温柔，相处舒适。"
}

function youan(){
  an = "你对你的伴侣掌控欲和占有欲比较强，希望对方为自己掌控。"
}
function meiyouan(){
  an = "你对伴侣的占有欲较小，希望双方都有自己的生活空间与自由。"
}

function mayuan(){
  maweizhi = "爱情在你的生活当中并不是那么重要，你的人生有其他更重要的事物需要你付出精力。"
}
function majin(){
  maweizhi = "爱情在你的生活当中很重要，你渴望通过爱情填满生活。"
}

function youhua(){
  hua = "你的爱情有结果，可能是孩子，也可能是共同的爱好或是宠物等等。"
}
function meiyouhua(){
  hua = "你对待爱情更加注重过程，没有那么在意爱情的结果。"
}

function ceshijieguo(){
  document.getElementById('lifangti').innerHTML = ("立方体象征着自我，" + daxiao + juli + touming)
  document.getElementById('tizi').innerHTML = ("梯子代表着你的朋友，" + caizhi + weizhi)
  document.getElementById('ma').innerHTML = ("马象征着伴侣，" + yanse + an + maweizhi + hua)
  document.getElementById('jinggao').innerHTML = ("本测试仅供娱乐~")
}
