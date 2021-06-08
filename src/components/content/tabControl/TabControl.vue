<template>
  <div class="tab-control">
      <div v-for="(item,index) in titles" :key="index" 
      class="tab-control-item" :class="{active: index ===  currentIndex}"
      @click="itemClick(index)">
          <span>{{item}}</span>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
    name:"TabControl",
    props:{
        titles:{
            type:Array,
            default(){
                return []
            }
        }
    },
  data() {
    return {
        currentIndex:0
    }
  },
  components: {

  },
  methods:{
      itemClick(index){
            this.currentIndex=index;
            this.$emit('tabClick',index)
      }
  }
}
</script>

<style scoped>
.tab-control{
    display:flex;
    text-align: center;
    font-size: 16px;
    background-color: seashell;
}
.tab-control-item{
    flex: 1;
    line-height: 40px;
    height: 40px;
}
.active span{
    padding: 8px;
    border-bottom: 3px solid var(--color-tint);
}
.active{
    color: var(--color-high-text);
}
</style>
