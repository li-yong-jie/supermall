<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="conter">购物街</div></nav-bar>
   <home-swiper :banners="banners"></home-swiper>
   <recommend-view :recommends="recommends"></recommend-view>
   <feature-view></feature-view>
   <div></div>
  </div>
</template>

<script type="text/ecmascript-6">
import NavBar from "../../components/common/navbar/NavBar";
import HomeSwiper from './childComps/HomeSwiper';
import { getHomeMultidata } from "../../network/home";
import RecommendView from './childComps/RecommendView';
import featureView from './childComps/featureView';

export default {
  name: "Home",
  data() {
    return {
      banners: [],
      recommends: []
    };
  },
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    featureView
  },
  created() {
    getHomeMultidata().then((res) => {
      // console.log(res.data.banner.list);
      this.banners = res.data.banner.list;
      //console.log(banners);
      this.recommends = res.data.recommend.list;
      //console.log(recommends);
    });
  },
};
</script>

<style scoped >
#home{
  padding-top: 44px;
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index:9;
}
</style>
