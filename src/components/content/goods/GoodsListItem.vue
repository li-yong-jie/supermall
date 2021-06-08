<template>
  <div class="goods-list-item">
    <img :src="goodsItem.show.img" alt="" />
    <div class="item">
      <p>{{ goodsItem.title }}</p>
      <div class="pro">
        <span class="price">{{ goodsItem.price }}</span>
        <span class="collect">{{ goodsItem.cfav }}</span>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "GoodsListItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
  components: {},
};
</script>

<style scoped>
.goods-list-item {
  width: 48%;
   position: relative;
   padding-bottom: 10px;
}
.goods-list-item img {
  width: 100%;
  height: 267px;
}
.pro{
    text-align: center;
}
.item p {
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 1;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}
.price {
 color: var(--color-high-text);
 margin-right: 20px;
}
.collect{
     position: relative;
}
.collect::before{
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("../../../assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>
