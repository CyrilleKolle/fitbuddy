<template>
  <div class="reg">
    <RegComp></RegComp>
  </div>
</template>

<script>
// @ is an alias to /src
import RegComp from '@/components/RegComp.vue'

export default {
  name: 'Home',
  components: {
    RegComp
  }
}
</script>