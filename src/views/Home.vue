<template>
  <div class="p-wrap">
    <h2>欢迎使用Vue项目</h2>
    <h3 style="color:red;">store1: {{ $store.getters.tip }}</h3>
    <h3 style="color:blue;">store2: {{ $store.getters["demo/moduleTip"] }}</h3>
    <el-button type="primary">饿了吗Button组件</el-button>
  </div>
</template>
<script>
import * as API from 'api/demo';

export default {
  mounted() {
    $('.p-wrap').click(function() {
      alert('Jquery安装成功');
    });
  },
  methods: {
    get() {
      API.get()
        .then(res => {})
        .catch(err => {});
    },
    get2() {
      let data = new URLSearchParams();
      data.append('param', 1);
      API.get2(data)
        .then(res => {})
        .catch(err => {});
    },
    post() {
      let data = new URLSearchParams();
      data.append('param', 1);
      API.post(data)
        .then(res => {})
        .catch(err => {});
    }
  },
  created() {
    console.log('this.$store.getters :>> ', this.$store.getters);
    console.log('this.$store.getters.tip :>> ', this.$store.getters.tip);
    console.log('this.$store.getters["demo/moduleTip"] :>> ', this.$store.getters["demo/moduleTip"]);
  }
};
</script>
