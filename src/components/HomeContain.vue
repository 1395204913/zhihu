<template>
  <div>
    <div class="mui-indexed-list-search mui-input-row mui-search">
     <input type="search" class="mui-input-clear mui-indexed-list-search-input" placeholder="输点啥呗" />
    </div>
    <div id="slider" class="mui-slider">
      <div
        id="sliderSegmentedControl"
        class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
      >
        <div class="mui-scroll">
          <a class="mui-control-item">关注</a>
          <a class="mui-control-item mui-active">推荐</a>
          <a class="mui-control-item">热榜</a>
        </div>
      </div>
    </div>
    <div class="content">
      <ul>
        <router-link  tag="li" v-for="item in question" :key="item.qid" :to="'/home/pageinfo/'+item.qid+item.msg[0].id">
          <strong>{{item.title}}</strong>
          <br />
          <img src="http://localhost:8080/static/img.ico" />
          <p id="author">{{item.msg[0].author}}</p>
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
import mui from "../lib/mui/js/mui";

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
.mui-scroll {
  display: flex;
  justify-content: space-around;
  position: static;
}
* {
  touch-action: pan-y;
}
ul {
  margin-left: 0;
  padding-left: 0;
}
li {
  list-style: none;
  /* margin-left: -38px; */
  padding-left: 8px;
  margin-bottom: 20px;
  border-bottom: black 1px solid;
}
li p {
  display: inline-block;
  /* vertical-align: middle; */
  margin-top: 10px;
}
#author {
  color: black;
}
span {
  display: block;
  width: 100%;
  height: 60px;
  overflow: hidden;
}
#more{
  float: right;
}

</style>