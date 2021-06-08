<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="conter">购物街</div></nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
    <feature-view></feature-view>
    <tab-control :titles="title" class="control"
    @tabClick="tabClick"></tab-control>
    <goods-list :goods="this.goods[orderType].list"></goods-list>
  </div>
</template>

<script type="text/ecmascript-6">
import NavBar from "../../components/common/navbar/NavBar";
import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";
import featureView from "./childComps/featureView";

import TabControl from "../../components/content/tabControl/TabControl";
import GoodsList from '../../components/content/goods/GoodsList';

import { getHomeMultidata, getHomeGoods } from "../../network/home";


export default {
  name: "Home",
  data() {
    return {
      banners: [],
      recommends: [],
      title: ["流行", "新款", "精选"],
      goods: {
        'pop': { page: 0, list:[]},
        'new': { page: 0, list:[]},
        'sell': { page: 0, list:[]} 
      },
      orderType:'pop'
    };
  },
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    featureView,
    TabControl,
    GoodsList
  },
  created() {
    this.getMultidata()
    //请求商品数据
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')  
  },
  methods: {
    tabClick(index){
       switch(index){
         case 0:
           this.orderType='pop'
           break 
        case 1:
          this.orderType='new'
          break
        case 2:
          this.orderType='sell'
          break
       }
    },
    getMultidata() {
      getHomeMultidata().then((res) => {
        // console.log(res.data.banner.list);
        this.banners = res.data.banner.list;
        //console.log(banners);
        this.recommends = res.data.recommend.list;
        //console.log(recommends);
      });
    },
    getHomeGoods(type) {
      const page =this.goods[type].page +1
      getHomeGoods(type, page).then((res) => {
       this.goods[type].list.push(...res.data.list)
       this.goods[type].page += 1
      });
    },
  },
};
</script>

<style scoped >
#home {
  padding-top: 44px;
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
}
.control {
  position: sticky;
  top: 44px;
  z-index: 9;
}
</style>
