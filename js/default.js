var number=Math.floor(Math.random()*3);
var answer=parseInt(window.prompt('数あてゲーム 0～2の数字を入れてね'));

var message;
if(answer==number){
  message='あたり';
}else if(answer<number){
  message='もっと大きいよ';
}else if(answer>number){
  message='もっと小さいよ';
}else{
  message='ちゃんと入力してくれよ';
}

var answer=parseInt(window.prompt(message));
