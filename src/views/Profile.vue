<template>
  <div class="home">
    <ProfileComp></ProfileComp>
  </div>
</template>

<script>
// @ is an alias to /src
import ProfileComp from "@/components/ProfileComp.vue";

export default {
  name: "Profile",
  components: {
    ProfileComp
  }
};
</script>
