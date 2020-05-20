<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <HelloWorld id="main-title" msg="FitBuddy" />
    <div id="feedId">
      <div v-for="event in events" :key="event.id" id="post">
        <span id="event-name">{{event.name}}</span>
        <br />
        <span id="event-des">{{event.description}}</span>
        <br />
        <span id="event-time">{{event.time}}</span>
        <br />
        <span id="event-date">{{event.date}}</span>

        <p id="more-info">...more</p>

        <input type="button" @click="increment(1)" value="join" />

        <div>
          <p>{{$store.state.counter}}</p>/
          <p>{{$store.state.participants}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  },
  computed: {
    events() {
      console.log("join pressed");
      return this.$store.state.events;
    }
  },
  methods: {
    increment(amount) {
      return this.$store.commit("joinMutation", amount);
    }
  },
  data() {
    return {};
  }
};
</script>
