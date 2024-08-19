<template>
  <div class="h-[40px] bg-bgBlack flex items-center justify-center">
    <div class="w-[--w-xl] ">
        <span
            class="text-fGray hover:text-white inline-block mr-[15px] text-[12px] cursor-pointer"
            v-for="item in navs" :key="item.label"
            @click="toNav(item)"
        >
          {{item.label}}
        </span>
    </div>
  </div>
</template>
<script lang="ts" setup>
import {useRouter} from "vue-router";

const router = useRouter()

const navs = [{
  label: '小米官网',
  handler: '/home'
},{
  label: '小米商城',
  handler: {
    to: '/store'
  }
},{
  label: '小米汽车',
  handler: (item:any)=>{
    console.log('header.vue/26 >>>>>> ', item);
  }
},{
  label: '云服务',
  handler: '/home'
}]

const toNav = (navItem:any)=>{
  console.log('header.vue/26 >>>>>> ', navItem);
  const type = typeof navItem.handler
  switch(type){
    case 'string':
      router.push('/home')
      break;
      case 'function':
        navItem.handler(navItem);
        break;
        case 'object':
          router.push({
            path: navItem.handler.to
          })
          break;
  }
}
</script>
<style lang="scss" scoped></style>