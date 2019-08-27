<template>
  <div class="container">
    <div class="mui-indexed-list-search mui-input-row mui-search">
      <input type="search" class="mui-input-clear mui-indexed-list-search-input" placeholder="输点啥呗" />
    </div>
    <div class="scroll">
      <router-link tag="a" class="swiper-container" id="swiper1" to="/home/guanzhuinfo">关注</router-link>
      <router-link tag="a" class="swiper-container" id="swiper2" to="/home">推荐</router-link>
      <router-link tag="a" class="swiper-container" id="swiper3" to="/home/rebanginfo">热榜</router-link>
    </div>
    <div class="guanzhu">
        <h1>关注组件</h1>
    </div>
    <!-- <div class="swiperBox">
           <swiper :options="swiperOption" ref="mySwiper">
                   
                   <swiper-slide><div class="page">1</div></swiper-slide>
                   <swiper-slide><div class="page">2</div></swiper-slide>
                   <swiper-slide><div class="page">3</div></swiper-slide>
                   <swiper-slide><div class="page">4</div></swiper-slide>
                   <div class="swiper-pagination" slot="pagination"></div>
           </swiper>
     </div> -->
  </div>
</template>
<style>
.scroll {
  display: flex;
  justify-content: space-around;
  position: static;
}
.scroll a{
  color:black;
}
.active{
  color:#2e86de;
}
/* .guanzhu {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.guanzhu #hh {
  text-indent: 25%;
}
h5 {
  color: black;
  font-weight: bold;
} */
</style>
<script>

// var swiper1 = new Swiper('#swiper1');
// var swiper2 = new Swiper('#swiper2');
// var swiper3 = new Swiper('#swiper3');
export default {
  
}
</script>