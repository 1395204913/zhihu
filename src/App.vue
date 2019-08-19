<template>
  <div class="app-container">
    <!-- 头部 -->
    <!-- <div class="mui-indexed-list-search mui-input-row mui-search">
      <input type="search" class="mui-input-clear mui-indexed-list-search-input" />
      <span class="mui-icon mui-icon-clear mui-hidden"></span>
      <span class="mui-placeholder">
        <span class="mui-icon mui-icon-search"></span>
        <span>输点啥呗~~~</span>
      </span>
    </div>-->
    
    <!-- 中间 -->
    <transition>
      <router-view></router-view>
    </transition>
    <!-- 底部 -->
    <nav class="mui-bar mui-bar-tab">
      <router-link id="defaultTab" class="mui-tab-item" to="/home">
        <span class="mui-icon mui-icon-extra mui-icon-extra-dictionary"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item" to="/vip">
        <span class="mui-icon mui-icon-flag">
          <!-- <span class="mui-badge">9</span> -->
        </span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <a class="mui-tab-item" href="#">
        <span class="mui-icon mui-icon-plusempty" id="jia"></span>
        <!-- <span class="mui-tab-label">+</span> -->
      </a>
      <router-link class="mui-tab-item" to="/notice">
        <span class="mui-icon mui-icon-extra mui-icon-extra-notice"></span>
        <span class="mui-tab-label">通知</span>
      </router-link>
      <router-link class="mui-tab-item" to="/user">
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
  created() {}
};
</script>

<style>
* { touch-action: pan-y; } 
body{
  background-color: white;
}
.app-container{
  padding-bottom: 40px;
  overflow-x: hidden;
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
.mui-tab-item{
  padding-top: 10px;
}
/* 重写样式 */
/* .mui-bar-tab .mui-tab-item1 {
  display: table-cell;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #929292;
}
.mui-bar-tab .mui-tab-item1.mui-active {
    color: #007aff;
}
.mui-bar-tab .mui-tab-item1 .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;

}
.mui-bar-tab .mui-tab-item1 .mui-icon~.mui-tab-label {
    font-size: 11px;
    display: block;
    text-overflow: ellipsis;
} 
*/


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
