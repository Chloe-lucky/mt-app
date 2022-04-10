<template>
    <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>{{$store.state.position.name}}
          <!-- <span v-for="(item, index) in nearCity" :key="index">{{item.name}}
          </span> -->
          美团</el-breadcrumb-item>
        <el-breadcrumb-item>{{$store.state.position.name}}
          <!-- <span v-for="(item, index) in nearCity" :key="index">{{item.name}}</span> -->
          {{$route.params.name}}</el-breadcrumb-item>
    </el-breadcrumb>
</template>
<script>
import api from '@/api/index.js'
export default {
  // data(){
  //   return{
  //     nearCity: this.$store.state.position.nearCity,
  //   }
  // },
  // watch: {
  //   '$store.state.position': function () {
  //     this.nearCity = this.$store.state.position.nearCity
  //   }
  // },
  created () {
    api.getCurPosition().then((res) => {
      this.$store.dispatch('setPosition', res.data.data)
      this.nearCity = res.data.data.nearCity
    })
  }
}
</script>
