<template>
  <div class="app-container">
    <div class="mui-indexed-list-search mui-input-row mui-search">
      <input type="search" class="mui-input-clear mui-indexed-list-search-input" placeholder="输点啥呗" />
    </div>
    
    <div class="scroll">
          <router-link  tag="a" to="/home/guanzhuinfo">关注</router-link>
          <router-link  tag="a" to="/home">推荐</router-link>
          <router-link  tag="a" to="/home/rebanginfo">热榜</router-link>
    </div>
    <!-- 中间 -->
    
    <transition>
      <router-view></router-view>
    </transition>
    <!-- 底部 -->
    <nav class="mui-bar mui-bar-tab">
      <router-link id="defaultTab" class="mui-tab-item-wk" to="/home">
        <span class="mui-icon mui-icon-extra mui-icon-extra-dictionary"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item-wk" to="/vip">
        <span class="mui-icon mui-icon-flag">
          <!-- <span class="mui-badge">9</span> -->
        </span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <a class="mui-tab-item-wk" href="#">
        <span class="mui-icon mui-icon-plusempty" id="jia"></span>
        <!-- <span class="mui-tab-label">+</span> -->
      </a>
      <router-link class="mui-tab-item-wk" to="/notice">
        <span class="mui-icon mui-icon-extra mui-icon-extra-notice"></span>
        <span class="mui-tab-label">通知</span>
      </router-link>
      <router-link class="mui-tab-item-wk" to="/user">
        <span class="mui-icon mui-icon-person-filled"></span>
        <span class="mui-tab-label">我的</span>
      </router-link>
    </nav>
  </div>
</template>

<script>

export default {
  data() {
    return {};
  },
  methods:{
  }
};
</script>

<style>
* {
  touch-action: pan-y;
}
body {
  background-color: white;
  overflow-x: hidden;
}
.app-container {
  padding-bottom: 40px;
  overflow-x: hidden;
}

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
.mui-icon-plusempty {
  background: #4169e1;
  color: white;
}
.mui-icon-plusempty:before {
  font-size: 25px;
}
#jia {
  position: absolute;
  top: 14%;
  left: 45%;
  height: 45px;
  width: 35px;
  line-height: 50px;
  border-radius: 15%;
}
.mui-tab-item-wk {
  padding-top: 10px;
}
.mui-tab-label{
 height: 20px;
 
}
/* 重写样式 */

.mui-bar-tab .mui-tab-item-wk {
  display: table-cell;
  overflow: hidden;
  width: 1%;
  height: 50px;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #929292;
}
.mui-bar-tab .mui-tab-item-wk.mui-active {
  color: #007aff;
}
.mui-bar-tab .mui-tab-item-wk .mui-icon {
  top: 3px;
  width: 24px;
  height: 24px;
  padding-top: 0;
  padding-bottom: 0;
}
.mui-bar-tab .mui-tab-item-wk .mui-icon ~ .mui-tab-label {
  font-size: 11px;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
}

.v-enter {
  opacity: 0;
  transform: translateX(100%);
  /* position: absolute; */
}
.v-leave-to {
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}
.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}

</style>
