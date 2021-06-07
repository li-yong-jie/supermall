<template>
  <div class="tab-bar-item" @click="itemClick">
     <div v-if="!isActive"><slot name="item-icon"></slot></div>
     <div v-else><slot name="item-icon-active"></slot></div>
     <div :style="activeStyle"><slot name="item-text"></slot></div> 
   
      <!-- <div class="tab-bar-item">
        <img src="../../assets/img/tabbar/home.png" alt="">
        <div> 首页</div>
        </div>
      <div class="tab-bar-item">
         <img src="../../assets/img/tabbar/home.png" alt="">
         <div>分类</div>
        </div>
      <div class="tab-bar-item">
        <img src="../../assets/img/tabbar/home.png" alt="">
        <div>购物车</div>
        </div>
      <div class="tab-bar-item">
        <img src="../../assets/img/tabbar/home.png" alt="">
        <div>我的</div>
        </div> -->
  </div>
</template>

<script>
export default {
  name:"TabbarItem",
  props:{
    path:String,
    activeColor:{
      type:String,
      default:'red'
    }
  },
    data(){
      return {
          // isActive:true
      }
    },
   methods:{
     itemClick(){ 
       this.$router.replace(this.path).catch(err => err)
     }
   },
   computed:{
     isActive(){
       return this.$route.path.indexOf(this.path) !== -1
     },
     activeStyle(){
       return this.isActive?{color:this.activeColor}:{}
     }
   }
}
</script>

<style >
.tab-bar-item{
   flex: 1;
   text-align: center;
   height: 49px;
   font-size: 14px;
 }
 .tab-bar-item img{
   width: 60px;
   height: 24px;
   margin-top: 3;
   vertical-align:middle;
   margin-bottom: 2px;
 }
</style>
