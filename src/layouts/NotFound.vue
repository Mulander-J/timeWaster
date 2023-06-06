<template lang="pug">
.font-bad.h-full.flex.items-center.justify-center: .wrap-404
  .label Error

  .numbers
    .number
      .four
    .number
      .zero
        span
    .number
      .four.last

  .text 
    p Looks like you got lost... Or we trying to confuse you... 
    p 
      | Let us bring you at 
      a(href="/") home
      | .

  .sleep-walker
    .man
      .head
      .torso
        .arm-a
        .arm-b
      .legs
        .leg-a
        .leg-b
</template>
<style lang="scss" scoped>
// Colors
$black: #000;
$white: #f2f2f2;

// Settings
$n-width: 30px;
$n-height: $n-width * 5;


// 404 STYLE
.wrap-404{
  overflow: hidden;
  padding: 2rem 1rem;
}

.label{
  text-align: center;
  font-size: .75em;
}

.numbers{
  padding: 2rem 0 0;
  text-align: center;
}
.number{
  position: relative;
  display: inline-block;
  width: $n-height;
  transform: translateX(60%);
}
.four{
  position: relative;
  width: $n-width;
  height: $n-height;
  border: 1px solid $black;
  &::before, &::after{
    content: '';
    position: absolute;
    border: 1px solid $black;
  }
  &::before{
    top: 50%;
    right: -1rem;
    width: $n-width * 4;
    height: $n-width;
  }
  &::after{
    top: 0;
    left: -$n-width * 2;
    width: $n-width;
    height: $n-height - $n-width;
  }
}
.zero{
  position: relative;
  width: $n-width;
  height: $n-height;
  border: 1px solid $black;
  span{
    position: absolute;
    top: 0;
    left: -$n-width * 2;
    width: $n-width;
    height: $n-height;
    border: 1px solid $black;
  }
  &::before, &::after{
    content: '';
    position: absolute;
    border: 1px solid $black;
  }
  &::before{
    top: 1rem;
    right: -1rem;
    width: $n-width * 4;
    height: $n-width;
  }
  &::after{
    bottom: 1rem;
    right: -1rem;
    width: $n-width * 4;
    height: $n-width;
  }
}

.text{
  position: relative;
  padding-top: 6rem;
  text-align: center;
  font-size: 1.125em;
  a{
    color: $black;
  }
  &::before{
    content: '';
    position: absolute;
    top: 4rem;
    left: 50%;
    transform: translateX(-50%);
    width: 6rem;
    height: 1px;
    background-image: repeating-linear-gradient(
      to left,
      rgba($black, .35) 0,
      rgba($black, .35) .5rem,
      transparent .5rem,
      transparent 1rem
    );
  }
}


// Walking Man
.sleep-walker{
  position: relative;
  height: 1px;
  margin: 5rem 0 3rem;
  background-image: repeating-linear-gradient(
    to left,
    transparent 0,
    transparent .12rem,
    rgba($black, .15) .125rem,
    rgba($black, .15) .25rem
  );
}
.man {
  position: absolute;
  top: -1.4rem;
  left: 0;
  width: 1px;
  height: 2rem;
  opacity: .6;
  transform: scale(.5);
  animation: walking 50s linear infinite;
  .head {
    position: relative;
    width: .5rem;
    height: .5rem;
    transform: translateX(-1px);  
    border: 1px solid $black;
    border-radius: 50%;
    &::before {
      content: '';
      position: absolute;
      top: .28rem;
      left: 0;
      width: 170%;
      height: 1px;
      background: $black; 
      transform-origin: 0% 0%;
      transform: rotate(-25deg);
    }
  }
  .torso {
    position: relative;
    width: 1px;
    height: 50%;
    margin: 0 auto;
    background: $black;
    .arm-a, .arm-b{
      position: absolute;
      top: 10%; left: 0;
      width: 100%;
      height: 85%;
      transform-origin: top center;
      background: $black;
      &::before {
        content: '';
        position: absolute;
        bottom: -.1rem;
        left: 0rem;
        width: .18rem;
        height: .18rem;
        border: 1px solid $black;
        border-radius: 50%;
      }
    }
    .arm-a{
      transform: rotate(-20deg);
      animation: walk1 1.3s linear alternate infinite;
    }
    .arm-b {
      transform: rotate(20deg);
      animation: walk2 1.3s linear alternate infinite;
    }
  }
  .legs {
    position: relative;
    width: 1px;
    height: 50%;
    margin: 0 auto;
    .leg-a, .leg-b{
      position: absolute;
      top: 0; left: 0;
      width: 100%;
      height: 100%;
      transform-origin: top center;
      background: $black;
      &::before{
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 4px;
        height: 1px;
        background: $black;
      }
    }
    .leg-a {
      transform: rotate(-20deg);
      animation: walk1 1.3s linear alternate infinite;
    }
    .leg-b {
      transform: rotate(20deg);
      animation: walk2 1.3s linear alternate infinite;
    }
  }
}

@keyframes walking {
  0%{
    left: 0;
    transform: scale(.5) rotateY(0deg);
  }
  49.9%{
    transform: scale(.5) rotateY(0deg);
  }
  50%{
    transform: scale(.5) rotateY(180deg);
    left: 100%;
  }
  100%{
    transform: scale(.5) rotateY(180deg);
    left: 0;
  }
}
@keyframes walk1 {
  0% {
    transform: rotate(-20deg);
  }
  50% {
    transform: rotate(20deg);
  }
}
@keyframes walk2 {
  0% {
    transform: rotate(20deg);
  }
  50% {
    transform: rotate(-20deg);
  }
}




// RESPONSIVE
@media all and (max-width: 768px) {
  header h1 { margin-bottom: 3rem; }
  .man {
    animation-duration: 30s;
  }
}
@media all and (max-width: 768px) {
  .numbers{
    display: flex;
    justify-content: center;
  }
  .number{
    width: 90px;
    transform: translateX(36%) scale(.5);
  }
}


</style>