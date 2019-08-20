<template>
  <div class="page">
      <div class="header">
          <router-link  tag="span" class="mui-icon-extra mui-icon-extra-arrowleftcricle" to="/home" id="back"></router-link>
          <a><img src="http://localhost:8080/static/img/search.png" class="search"></a>&nbsp;&nbsp;&nbsp;
          <a><img src="http://localhost:8080/static/img/more.png" class="search"></a>
      </div>
      <br>
    <h3>{{info.title}}</h3>
    <p id="huida">查看全部 {{(info.msg).length}} 个回答 ></p>
    <div class="btn">
      <!--mui提供的类有问题，有时会有延时 -->
      <button>
        <!-- <span class="mui-icon-extra mui-icon-extra-addpeople"></span>  -->
        
        邀请回答
      </button>
      <button>
        <!--  <span class="mui-icon mui-icon-compose"></span>  -->
        写回答
      </button>
    </div>

    <div class="author">
      <img src="http://localhost:8080/static/img.ico" id="authorimg"/>&nbsp;
      <p id="author">{{info.msg[id].author}}</p>
      <button id="guanzhu">+ 关注</button>
    </div>

    <div class="content-page">{{info.msg[id].content}}</div>
    <div class="next">
      <!-- <router-link tag="button" class="mui-icon mui-icon-arrowthindown" :to="'/home/pageinfo/'+qid+Number(id+2)"></router-link> -->
      <button class="mui-icon mui-icon-arrowthindown" @click="next"></button>
    </div>
    <div class="footer"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      qid: this.$route.params.id.slice(0, 1),
      id: this.$route.params.id.slice(1, 2) - 1,
      info: []
    };
  },
  created() {
    this.getInfo();
  },
  methods: {
    getInfo() {
      //获取详情
      this.$axios
        .get("http://localhost:8080/static/Recommendation.json")
        .then(result => {
          switch (Number(this.qid)) {
            case 1:
              this.info = result.data.data_1;
              break;
            case 2:
              this.info = result.data.data_2;
              break;
            case 3:
              this.info = result.data.data_3;
              break;
            case 4:
              this.info = result.data.data_4;
              break;
            case 5:
              this.info = result.data.data_5;
              break;
            case 6:
              this.info = result.data.data_6;
              break;
          }
        });
    },
    next(){
        this.id++;
    }
  }
};
</script>
<style>
* {
  touch-action: pan-y;
  
}
/* title、总回答数、img往右移动10px */
h3,#huida{
    text-indent: 10px;
}
#authorimg{
    margin-left: 10px;
}
.search{
  height: 24px;
  width: 24px;
}
/* 回答数 */
.page p {
  margin-top: 20px;
  font-size: 17px;
}
/* 头部三个图标 */
.header{
    display: flex;
    padding-top: 10px;
}
#back{
    color: #2f3542;
    font-weight: 900;
    margin-right: auto;
    height: 24px;
}
.mui-icon-search,.mui-icon-more-filled{
    font-weight: 900;
}
/* 邀请回答和些回答 父容器采用display：flex使两button间无缝隙 */
.btn {
  display: flex;
}
/* 邀请回答和些回答样式 */
.btn button {
  color: #2e86de;
  border-top: 1px solid gray;
  background-color: inherit;
  font-size: 15px;
  font-weight: bold;
  width: 50%;
}
.author {
  display: flex;
}
#author {
  display: inline-block;
  color: black;
}
#guanzhu {
  margin-top: 15px;
  width: 80px;
  margin-left: auto;
  color: #2e86de;
  font-weight: bold;
  font-size: 15px;
  margin-right:10px;
  background-color: #F6F6F6;
}
.content-page {
  margin: 10px;
  padding-bottom: 15px;
  letter-spacing: 3px;
  line-height: 30px;
}
/* 翻页按钮 有点瑕疵 */
.next {
  position: fixed;
  right: 5%;
  top: 70%;
}
.next button {
  border-radius: 70%;
  position: relative;
  line-height: 38px;
  
}
 
.footer {
  display: flex;
}
</style>