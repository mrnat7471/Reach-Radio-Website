<template>
<!-- Christmas Snow -->
    <div class="snowflakes christmas" aria-hidden="true">
      <div class="snowflake">
      ❅
      </div>
      <div class="snowflake">
      ❆
      </div>
      <div class="snowflake">
      ❅
      </div>
      <div class="snowflake">
      ❆
      </div>
      <div class="snowflake">
      ❅
      </div>
      <div class="snowflake">
      ❆
      </div>
      <div class="snowflake">
        ❅
      </div>
      <div class="snowflake">
        ❆
      </div>
      <div class="snowflake">
        ❅
      </div>
      <div class="snowflake">
        ❆
      </div>
      <div class="snowflake">
        ❅
      </div>
      <div class="snowflake">
        ❆
      </div>
    </div>
</template>
<style>
/* 
CHRISTMAS CONTENT

Snowflaskes OMG */
/* customizable snowflake styling */

.snowflake {
    color: #fff;
    font-size: 1em;
    font-family: Arial, sans-serif;
    text-shadow: 0 0 5px #000;
}
  
  @-webkit-keyframes snowflakes-fall{0%{top:-10%}100%{top:100%}}@-webkit-keyframes snowflakes-shake{0%,100%{-webkit-transform:translateX(0);transform:translateX(0)}50%{-webkit-transform:translateX(80px);transform:translateX(80px)}}@keyframes snowflakes-fall{0%{top:-10%}100%{top:100%}}@keyframes snowflakes-shake{0%,100%{transform:translateX(0)}50%{transform:translateX(80px)}}.snowflake{position:fixed;top:-10%;z-index:9999;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default;-webkit-animation-name:snowflakes-fall,snowflakes-shake;-webkit-animation-duration:10s,3s;-webkit-animation-timing-function:linear,ease-in-out;-webkit-animation-iteration-count:infinite,infinite;-webkit-animation-play-state:running,running;animation-name:snowflakes-fall,snowflakes-shake;animation-duration:10s,3s;animation-timing-function:linear,ease-in-out;animation-iteration-count:infinite,infinite;animation-play-state:running,running}.snowflake:nth-of-type(0){left:1%;-webkit-animation-delay:0s,0s;animation-delay:0s,0s}.snowflake:nth-of-type(1){left:10%;-webkit-animation-delay:1s,1s;animation-delay:1s,1s}.snowflake:nth-of-type(2){left:20%;-webkit-animation-delay:6s,.5s;animation-delay:6s,.5s}.snowflake:nth-of-type(3){left:30%;-webkit-animation-delay:4s,2s;animation-delay:4s,2s}.snowflake:nth-of-type(4){left:40%;-webkit-animation-delay:2s,2s;animation-delay:2s,2s}.snowflake:nth-of-type(5){left:50%;-webkit-animation-delay:8s,3s;animation-delay:8s,3s}.snowflake:nth-of-type(6){left:60%;-webkit-animation-delay:6s,2s;animation-delay:6s,2s}.snowflake:nth-of-type(7){left:70%;-webkit-animation-delay:2.5s,1s;animation-delay:2.5s,1s}.snowflake:nth-of-type(8){left:80%;-webkit-animation-delay:1s,0s;animation-delay:1s,0s}.snowflake:nth-of-type(9){left:90%;-webkit-animation-delay:3s,1.5s;animation-delay:3s,1.5s}.snowflake:nth-of-type(10){left:25%;-webkit-animation-delay:2s,0s;animation-delay:2s,0s}.snowflake:nth-of-type(11){left:65%;-webkit-animation-delay:4s,2.5s;animation-delay:4s,2.5s}



.strand{
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    position: absolute;
    z-index: 1;
    margin: -15px 0 0 0;
    padding: 0;
    pointer-events: none;
    width: 100%;
}
.strand li{
    position: relative;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation-iteration-count: infinite;
    animation-interation-count: infinite;
    list-style: none;
    margin: 0;
    padding: 0;
    display: block;
    width: 12px;
    height: 28px;
    border-radius: 50%;
    margin: 20px;
    display: inline-block;
    background:#f02241;
    box-shadow: 0px 4.66667px 24px 3px #f02241;
    -webkit-animation-name: flash-1;
    animation-name: flash-1;
    -webkit-animation-duration: 2s;
    animation-duration: 2s;
}
.strand li:nth-child(2n+1){
    background: #42b261;
    box-shadow: 0px 4.66667px 24px 3px rgba(0, 255, 255, 0.5);
    -webkit-animation-name: flash-2;
    animation-name: flash-2;
    -webkit-animation-duration: 0.4s;
    animation-duration: 0.4s;
}
.strand li:nth-child(4n+2){
    background: #f9fbee;
    box-shadow: 0px 4.66667px 24px 3px #f9fbee;
    -webkit-animation-name: flash-3;
    animation-name: flash-3;
    -webkit-animation-duration: 1.1s;
    animation-duration: 1.1s;
}
.strand li:nth-child(odd){
    -webkit-animation-duration: 1.8s;
    animation-duration: 1.8s;
}
.strand li:nth-child(3n+1){
    -webkit-animation: 1.4s;
    animation-duration: 1.4s;
}
.strand li:before{
    content: "";
    position: absolute;
    background: #222;
    width: 10px;
    height: 9.33333px;
    border-radius: 3px;
    top: -4.66667px;
    left: 1px;
}
.strand li:after{
    content: "";
    top: -14px;
    left: 9px;
    position: absolute;
    width: 52px;
    height: 18.66667px;
    border-bottom: solid #222 2px;
    border-radius: 50%;
}
.strand li:last-child:after{
    content: none;
}
.strand li:first-child{
    margin-left: 40px;
}
@-webkit-keyframes flash-1{
    0%, 100%{
        background: #f02241;
        box-shadow: 0px 4.66667px 24px 3px #f02241;
    }
    50%{
        background: rgba(240, 34, 65, 0.4);
        box-shadow: 0px 4.66667px 24px 3px rgba(240, 35, 65, .02);
    }
}
@keyframes flash-1{
    0%,
  100% {
    background: #f02241;
    box-shadow: 0px 4.66667px 24px 3px #f02241;
  }
  50% {
    background: rgba(240, 34, 65, 0.4);
    box-shadow: 0px 4.66667px 24px 3px rgba(240, 35, 65, 0.2);
  }
}
@-webkit-keyframes flash-2{
    0,
    100%{
        background: #42b261;
        box-shadow: 0px 4.66667px 24px 3px #42b261;
    }
    50%{
        background: rgba(66, 178, 97, 0.4);
        box-shadow: 0px 4.6667px 24px 3px rgba(66, 178, 97, 0.2);
    }
}
@keyframes flash-2{
    0%,
  100% {
    background: #42b261;
    box-shadow: 0px 4.66667px 24px 3px #42b261;
  }
  50% {
    background: rgba(66, 178, 97, 0.4);
    box-shadow: 0px 4.66667px 24px 3px rgba(66, 178, 97, 0.2);
  }
}
@-webkit-keyframes flash-3{
    0%,
    100%{
        background: #f9fbee;
        box-shadow: 0px 4.6667px 24px 3px #f9fbee;
    }
    50%{
        background: rgba(249, 251, 238, .4);
        box-shadow: 0px 4.66667px 24px 3px rgba(249, 251, 238, .2);
    }
    
}
</style>