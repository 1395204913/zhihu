<template>
  <div class="user_page">
    <div class="page1">
      <div class="user_search">
        <input type="search" placeholder="搜索知乎内容" id="user_search" />
        <img src="http://localhost:8080/static/user_img/saoyisao.png" height="40px" />
        <img src="http://localhost:8080/static/user_img/setting.png" height="40px" />
      </div>
      <div class="header">
        <div class="userinfo">
          <img
            src="http://localhost:8080/static/user_img/timg.jpeg"
            width="80px"
            height="80px"
            id="author"
          />
          <h3>user_W</h3>
          <p>个人主页></p>
        </div>
        <div class="chuangzuo">
          <span>
            <p>10</p>
            <br />
            <a>我的创作</a>
          </span>
          <span>
            <p>12</p>
            <br />
            <a>关注</a>
          </span>
          <span>
            <p>10</p>
            <br />
            <a>收藏夹</a>
          </span>
          <span>
            <p>1k</p>
            <br />
            <a>最近游览</a>
          </span>
        </div>
      </div>
    </div>
    <div class="gongneng_1">
      <div class="box">
        <img src="http://localhost:8080/static/user_img/study.png" />
        <p>学习记录</p>
      </div>
      <div class="box">
        <img src="http://localhost:8080/static/user_img/已购数量.png" alt />
        <p>已购</p>
      </div>
      <div class="box">
        <img src="http://localhost:8080/static/user_img/icon_优惠卷.png" alt />
        <p>余额礼卷</p>
      </div>
      <div class="box">
        <img src="http://localhost:8080/static/user_img/读书.png" alt />
        <p>读书会</p>
      </div>
      <div class="box">
        <img src="http://localhost:8080/static/user_img/书.png" alt />
        <p>我的书架</p>
      </div>
      <div class="box">
        <img src="http://localhost:8080/static/user_img/下载.png" alt />
        <p>下载中心</p>
      </div>
      <div class="box">
        <img src="http://localhost:8080/static/user_img/付费.png" alt />
        <p>付费咨询</p>
      </div>
      <div class="box">
        <img src="http://localhost:8080/static/user_img/活动.png" alt />
        <p>活动广场</p>
      </div>
    </div>
    <div class="gongneng_2">
      <div class="box">
        <img src="http://localhost:8080/static/user_img/叶菜.png" alt />
        <p>社区建设</p>
      </div>
      <div class="box">
        <img src="http://localhost:8080/static/user_img/旗子.png" alt />
        <p>反馈与帮助</p>
      </div>
      <div class="box">
        <img src="http://localhost:8080/static/user_img/多评仲裁.png" alt />
        <p>仲裁议事厅</p>
      </div>
      <div class="box">
        <img src="http://localhost:8080/static/user_img/夜间模式.png" alt />
        <p>夜间模式</p>
      </div>
    </div>
  </div>
</template>
<script>
</script>
<style>
body {
  background-color: #f6f6f6;
  margin: 0px;
  padding: 0px;
}
.user_page .header {
  box-shadow: 4px 4px 4px #888888;
  margin: 1rem;
  background-color: #ffffff;
}
.page1 {
  /* background-color: #0084ff; */
  background-image:linear-gradient(to bottom,#0084ff,skyblue)
}
.user_search {
  display: flex;
}
.user_search input {
  background-color: #0084ff;
}
input::-webkit-input-placeholder {
  color: #f6f6f6;
}

.user_page .userinfo {
  padding-top: 10px;
  display: flex;
}

.user_page .userinfo img {
  border-radius: 50%;
  border: 1px solid gray;
}

.user_page .userinfo p,
.user_page .userinfo h3 {
  display: inline;
}

.user_page .userinfo h3 {
  margin-left: 10px;
}

.user_page .userinfo p {
  margin-left: auto;
  margin-right: 10px;
  color: gray;
  padding-top: 10px;
}
.user_page a {
  color: black;
}
.user_page .chuangzuo {
  display: flex;
  justify-content: space-around;
}

.user_page .chuangzuo p {
  display: inline;
  font-weight: bold;
}

.user_page .chuangzuo span {
  text-align: center;
  padding: 5px 10px;
}

.user_page .gongneng_1,
.user_page .gongneng_2 {
  margin: 10px;
  display: flex;
  flex-wrap: wrap;
  background-color: #ffffff;
}
.user_page .box {
  width: 25%;
  text-align: center;
}
.user_page .box img {
  /* width: 4rem;
            height: 3rem;
            padding: 2rem; */
  width: 25px;
  margin: 15px;
}

.user_page .box p {
  text-align: center;
  margin: 0;
}

/* .chuangzuo span:nth-child(-n+3){
            border-right: 1px ;
        } */
</style>