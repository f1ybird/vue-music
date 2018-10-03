<template>
  <div class="home">
    <!--今日推荐-->
    <todayRecommend title="今日推荐" type="1" />
    <!--新歌速递-->
    <newsMusic/>
    <!--轮播图-->
    <swiperBanner/>
    <!--音乐榜单-->
    <musicListNav/>
    <!--缓存一下音乐榜单的网络请求-->
    <keep-alive>
      <router-view/>
    </keep-alive>
    <!--热门榜单-->
    <todayRecommend title="热门榜单" type="25"/>
  </div>
</template>

<script>

  import todayRecommend from '../components/Today_Recommend'
  import newsMusic from '../components/News_Music'
  import swiperBanner from '../components/Swiper_Banner'
  import musicListNav from '../components/musiclist/music_listnav'

  export default {
    name: "home",
    components: {
      todayRecommend,
      newsMusic,
      swiperBanner,
      musicListNav
    }
  }
</script>

<style scoped>

</style>
