'use strict' ;

// トランプカードのデータ
const cards = [
  ["card_club_01.png","card_club_02.png", "card_club_03.png", "card_club_04.png" , "card_club_05.png", "card_club_06.png", "card_club_07.png", "card_club_08.png", "card_club_09.png", "card_club_10.png", "card_club_11.png", "card_club_12.png", "card_club_13.png"],
  ["card_heart_01.png","card_heart_02.png", "card_heart_03.png","card_heart_04.png","card_heart_05.png","card_heart_06.png","card_heart_07.png","card_heart_08.png","card_heart_09.png","card_heart_10.png","card_heart_11.png","card_heart_12.png" ,"card_heart_13.png"],
  ["card_diamond_01.png","card_diamond_02.png", "card_diamond_03.png","card_diamond_04.png","card_diamond_05.png","card_diamond_06.png","card_diamond_07.png","card_diamond_08.png","card_diamond_09.png","card_diamond_10.png","card_diamond_11.png","card_diamond_12.png" ,"card_diamond_13.png"],
  ["card_spade_01.png","card_spade_02.png","card_spade_03.png","card_spade_04.png","card_spade_05.png","card_spade_06.png","card_spade_07.png","card_spade_08.png","card_spade_09.png","card_spade_10.png","card_spade_11.png","card_spade_12.png" ,"card_spade_13.png"],
];



// HTML要素
const startButton = document.getElementById('startButton');
const highButton = document.getElementById('highButton');
const lowButton = document.getElementById('lowButton');
const cardLeft = document.getElementById('cardLeft');
const cardRight = document.getElementById('cardRight');
const result = document.getElementById('result');
const retryButton = document.getElementById('retryButton');
const correct = document.getElementById('correct');
const incorrect = document.getElementById('incorrect');


startButton.addEventListener('click', () => {
  // 左側のカードをランダムに表示
  const randSuit = Math.floor( Math.random() *4) ;  // Suitはトランプの柄
  const randNumber = Math.floor( Math.random() *13) ;
  const randCard = cards[randSuit][randNumber] ;
  const leftCard = document.getElementById("LeftCard");
  leftCard.src = "card/"+randCard
  //　ハイボタンとローボタンを表示
  highButton.classList.remove('hide');
  lowButton.classList.remove('hide');
  //　開始ボタンを非表示
  startButton.classList.add('hide')
})
  
highButton.addEventListener('click', () => {
  // 右側のカードをランダムに表示
  const randSuit = Math.floor( Math.random() *4) ;  // Suitはトランプの柄
  const randNumber = Math.floor( Math.random() *13) ;
  const randCard = cards[randSuit][randNumber] ;
  const rightCard = document.getElementById("RightCard");
  rightCard.src = "card/"+randCard
  highButton.classList.add('hide')
  lowButton.classList.add('hide')

  correct.classList.remove('hide')
  incorrect.classList.remove('hide')
  retryButton.classList.remove('hide')




 })

 lowButton.addEventListener('click', () => {
    // 右側のカードをランダムに表示
    const randSuit = Math.floor( Math.random() *4) ;  // Suitはトランプの柄
    const randNumber = Math.floor( Math.random() *13) ;
    const randCard = cards[randSuit][randNumber] ;
    const rightCard = document.getElementById("RightCard");
    rightCard.src = "card/"+randCard
    highButton.classList.add('hide')
    lowButton.classList.add('hide')
    correct.classList.remove('hide')
    incorrect.classList.remove('hide')
    retryButton.classList.remove('hide')
 })

 retryButton.addEventListener('click' ,function(){
  location.reload();



 });