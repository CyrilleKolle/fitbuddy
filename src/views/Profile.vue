<template>
  <div>
    <ProfileComp></ProfileComp>
    <test></test>
  </div>
</template>

<script>
// @ is an alias to /src
import ProfileComp from "@/components/ProfileComp.vue";
import test from "@/components/test.vue";

export default {
  components: {
    ProfileComp,
    test
  }
};
</script>
