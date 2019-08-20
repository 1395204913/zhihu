<template>
  <div id="rebang">
    <div class="btn">
      <button>全部</button>
      <router-link tag="button" to="/home/rebanginfo/kexue">科学</router-link>
      <button>体育</button>
      <button>影视</button>
      <button>数码</button>
    </div>

    <div class="rebanglist" v-for="(item, index) in rebangList" :key="index">
      <div id="left">
        <h3>{{index+1}}</h3>
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
.rebanglist {
  margin: 15px;
  padding-bottom: 20px;
  border-bottom: 1px solid black;
  display: flex;
  align-items: center;
}
.btn{
    margin-top: 10px;
    display: flex;
    justify-content:space-around;
}
.rebanglist h3 {
  display: inline-block;
}
.rebanglist div {
  height: 70px;
}
#left {
  margin-right: 5px;
}
#right {
  padding-left: 10px;
}
#middle p {
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