<template>
  <div class="home">
    <div class="mui-indexed-list-search mui-input-row mui-search">
      <input type="search" class="mui-input-clear mui-indexed-list-search-input" placeholder="输点啥呗" />
    </div>
    <div class="scroll">
      <router-link tag="a" to="/home/guanzhuinfo">关注</router-link>
      <router-link tag="a" to="/home">推荐</router-link>
      <router-link tag="a" to="/home/rebanginfo">热榜</router-link>
    </div>
    <div class="content">
      <ul>
        <router-link
          tag="li"
          v-for="(item,index) in question"
          :key="index"
          :to="'/home/pageinfo/'+item.qid+item.msg[0].id"
        >
          <strong>{{item.title}}</strong>
          <br />
          <div class="author">
            <img src="http://localhost:8080/static/img.ico" /> &nbsp;
          <p id="author">{{item.msg[0].author}}</p>
          </div>
          
          <br />
          <span>{{item.msg[0].content}}</span>
          <p>{{item.msg[0].agree}}赞同</p>&nbsp;&nbsp;
          <p>{{item.msg[0].comment}}评论</p>
          <p class="mui-icon mui-icon-more-filled" id="more"></p>
        </router-link>
      </ul>
    </div>
  </div>
</template>
<script>
// import mui from "../lib/mui/js/mui";

export default {
  data() {
    return {
      question: []
    };
  },
  created() {
    this.getList();
  },
  mounted() {
    // 解决滑动问题
    // mui(".mui-scroll-wrapper").scroll({
    //   deceleration: 0.0005
    // });
  },
  methods: {
    getList() {
      this.$axios
        .get("http://localhost:8080/static/Recommendation.json")
        .then(result => {
          //alert(result.data.data_1.msg[0].author)
          this.question = result.data;
        });
    }
  }
};
</script>
<style>

* {
  touch-action: pan-y;
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
.home ul {
  margin-left: 0;
  padding-left: 0;
}
.home li {
  list-style: none;
  /* margin-left: -38px; */
  padding-left: 8px;
  margin-bottom: 20px;
  border-bottom: black 1px solid;
}
.home li p {
  display: inline-block;
  /* vertical-align: middle; */
  margin-top: 10px;
  font-size: 17px;
}
.home .author {
  display: flex;
}
.home #author {
  color: black;
}
.home span {
  display: block;
  width: 100%;
  height: 60px;
  overflow: hidden;
}
.home #more {
  float: right;
}

</style>