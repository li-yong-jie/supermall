<template>
  <div class="recommends">
      <div v-for="(item,index) in recommends" :key="index" class="recommmend-item">
          <a :href="item.link" >
              <img :src="item.image" alt="">
              <div>{{item.title}}</div>
          </a>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
    name:"RecommendView",
    props:{
        recommends:Array,
        default(){
            return[]
        }
    },
  data() {
    return {

    }
  },
  components: {

  }
}
</script>

<style scoped>
.recommends{
    display: flex;
    text-align: center;
    font-size: 14px;
    padding: 10px 0px 20px;
    border-bottom: 8px solid rgb(247, 241, 241);
}
.recommmend-item{
    flex: 1;
}
.recommmend-item img{
    width: 70px;
    height: 70px;
    margin-bottom: 10px;
}
</style>
