<template>
  <div class="m-products-list">
    <ul>
      <li
        v-for="item in nav"
        :key="item.key"
        :class="{ 's-nav-active': item.active }"
      >
        {{ item.name }}
      </li>
    </ul>
    <el-row>
      <item v-for="(item,index) in productList" :key="index" :meta="item"/>
    </el-row>
  </div>
</template>

<script>
import Item from './item.vue';
import api from '@/api/index.js';
export default {
  data() {
    return {
      nav: [],
      productList: [],
    };
  },
  created(){
    api.getProductsList().then(res=>{
      this.productList=res.data.data;
    })
  },
  components:{
    Item,
  }
};
</script>

<style>
</style>
