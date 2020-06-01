<template>
  <div>
    <Test></Test>
    <ProfileComp></ProfileComp>
  </div>
</template>

<script>
// @ is an alias to /src
import ProfileComp from "@/components/ProfileComp.vue";
import Test from "@/components/test.vue";

export default {
  components: {
    ProfileComp,
    Test
  }
};
</script>

