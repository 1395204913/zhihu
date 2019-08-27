<template>
  <div id="rebang">
    <div class="mui-indexed-list-search mui-input-row mui-search">
      <input type="search" class="mui-input-clear mui-indexed-list-search-input" placeholder="输点啥呗" />
    </div>
    <div class="scroll">
      <router-link tag="a" to="/home/guanzhuinfo">关注</router-link>
      <router-link tag="a" to="/home">推荐</router-link>
      <router-link tag="a" to="/home/rebanginfo">热榜</router-link>
    </div>
    <div class="btn">
      <button>全部</button>
      <!-- <router-link tag="button" to="/home/rebanginfo/kexue">科学</router-link> -->
      <button>体育</button>
      <button>影视</button>
      <button>数码</button>
    </div>

    <div class="rebanglist" v-for="(item, index) in rebangList" :key="index">
      <div id="left">
        <h3 :class="(index<3)?'red-class':'putong'">{{index+1}}</h3>
      </div>
      <div id="middle">
        <h4>{{item.title}}</h4>
        <p>{{item.redu}} 万热度</p>
      </div>
      <div id="right">
        <img :src="item.imgurl" width="70px" height="70px" />
      </div>
    </div>
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
#rebang .rebanglist {
  margin: 15px;
  padding-bottom: 20px;
  border-bottom: 1px solid black;
  display: flex;
  align-items: center;
  /* justify-content:flex-start; */
}
#rebang .btn {
  margin-top: 10px;
  display: flex;
  justify-content: space-around;
}
#rebang .rebanglist h3 {
  display: inline-block;
}
#rebang .rebanglist div {
  height: 70px;
}
#rebang .putong {
  color: #e67e22;
}
#rebang #left {
  margin-right: 10px;
}
#rebang .red-class {
  color: red;
}
#rebang #right {
  padding-left: 10px;
}
#rebang #middle p {
  margin-top: 8px;
  font-size: 17px;
}
</style>
<script>
export default {
  data() {
    return {
      rebangList: []
    };
  },
  created() {
    this.getrebang();
  },
  methods: {
    getrebang() {
      this.$axios
        .get("http://localhost:8080/static/Rebang.json")
        .then(result => {
          this.rebangList = result.data;
        });
    }
  }
};
</script>