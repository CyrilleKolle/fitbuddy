<template>
  <div class="fixedBox">
    <div class="home">
      <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
      <HelloWorld id="main-title" msg="FitBuddy" />
      <b-button @click="open = true" id="filter-button">
        <i class="fas fa-filter"></i>
      </b-button>

      <section>
        <b-sidebar
          type="is-light"
          :fullheight="fullheight"
          :fullwidth="fullwidth"
          :overlay="overlay"
          :right="right"
          :open.sync="open"
        >
          <div class="p-1">
            <!-- <img
          src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
          alt="Lightweight UI components for Vue.js based on Bulma"
            />-->
            <b-menu>
              <b-menu-list label="Filter">
                <!-- <b-menu-item icon="information-outline" label="Info"></b-menu-item> -->
                <b-menu-item icon="settings">
                  <template slot="label" slot-scope="props">
                    City
                    <b-icon
                      class="is-pulled-right"
                      :icon="props.expanded ? 'menu-down' : 'menu-up'"
                    ></b-icon>
                  </template>

                  <b-menu-item icon="account" label="Show all" @click="filterAll()"></b-menu-item>
                  <b-menu-item icon="account" label="Gothenburg" @click="filterGbg()"></b-menu-item>
                  <b-menu-item icon="cash-multiple" label="Stockholm" @click="filterSth()"></b-menu-item>
                  <b-menu-item icon="account" label="Malmo" @click="filterMal()"></b-menu-item>
                </b-menu-item>
                <b-menu-item icon="account" label="Activities">
                  <b-menu-item label="Football" @click="football()"></b-menu-item>
                  <b-menu-item label="Handball" @click="handball()"></b-menu-item>
                  <b-menu-item label="basketball" @click="basketball()"></b-menu-item>
                  <b-menu-item label="Pool" @click="pool()"></b-menu-item>
                  <b-menu-item label="Runing"></b-menu-item>
                </b-menu-item>
              </b-menu-list>
              <b-menu-list>
                <b-menu-item
                  label="Expo"
                  icon="link"
                  tag="router-link"
                  target="_blank"
                  to="/expo"
                  style="visibility: hidden"
                ></b-menu-item>
              </b-menu-list>
              <b-menu-list label="Actions">
                <b-menu-item label="Logout"></b-menu-item>
              </b-menu-list>
            </b-menu>
          </div>
        </b-sidebar>
        <div class="block" style="visibility: hidden">
          <b-field grouped group-multiline>
            <div class="control">
              <b-switch v-model="overlay">Overlay</b-switch>
            </div>
            <div class="control">
              <b-switch v-model="fullheight">Fullheight</b-switch>
            </div>
            <div class="control">
              <b-switch v-model="fullwidth">Fullwidth</b-switch>
            </div>
            <div class="control">
              <b-switch v-model="right">Right</b-switch>
            </div>
          </b-field>
        </div>
      </section>

      <div id="feedId">
        <div
          v-for="(post, index) in allPosts"
          :key="`${index}-${post.id}`"
          class="contact-form-container"
          :fixed-top="true"
        >
          <div>{{post.title}}</div>
          <div>{{post.description}}</div>
          <div>{{post.city}}</div>
          <div>{{post.timestamp}}</div>
          <div>{{post.duration}} Hours</div>
          <div>{{post.activity}}</div>
          <div>{{post.other}}</div>

          <div>{{post.postId}}</div>

          <button
            @click="increaseAttend(post.postId)"
            id="attend-button"
            :disabled=" localCounter === post.attendies"
          >attend</button>
          <span style="border: 1px solid black">{{post.counter}}/{{post.attendies}}</span>
        </div>
        <hr />
        <paginate
          id="pagination"
          :page-count="20"
          :page-range="3"
          :margin-pages="2"
          :click-handler="clickCallback"
          :prev-text="'Prev'"
          :next-text="'Next'"
          :container-class="'pagination'"
          :page-class="'page-item'"
        ></paginate>
      </div>
      <hr />
      <div id="app">
        <VueElevator :duration="duration"></VueElevator>
      </div>
    </div>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  },
  computed: {
    events() {
      console.log("join pressed");
      return this.$store.state.events.counter;
    }
  },
  methods: {
    increaseAttend(postId) {
      fetch(`/api/posts/${postId}`)
        .then(response => response.json())
        .then(result => {
          this.localCounter = result[0].counter;
          this.localCounter++;
          fetch("/api/attends", {
            method: "put",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              counter: this.localCounter,
              postId: postId
            })
          });
        });
    },
    // filterC(filterCity){
    //   fetch(`/api/posts/${}`)
    //   .then(response => response.json())
    //   .then(result => {
    //     this.city = result[0].city
    //      console.log("this is actual city " + this.city)
    //   });
    // },

    clickCallback(pageNum) {
      console.log(pageNum);
    },
    filterGbg() {
      for (let i = 0; i < this.allPosts.length; i++) {
        if (this.allPosts[i].city === this.gothenburg) {
          this.cityFiltered.push(this.allPosts[i]);
        }
      }
      console.log(this.cityFiltered);
      this.allPosts = this.cityFiltered;
      return this.cityFiltered;
    },
    filterSth() {
      this.allPosts = [];
      for (let i = 0; i < this.allPosts.length; i++) {
        if (this.allPosts[i].city === this.stockholm) {
          this.cityFiltered.push(this.allPosts[i]);
        }
      }
      console.log(this.cityFiltered);
      this.allPosts = this.cityFiltered;
      return this.cityFiltered;
    },

    filterMal() {
      for (let i = 0; i < this.allPosts.length; i++) {
        if (this.allPosts[i].city === this.malmo) {
          this.cityFiltered.push(this.allPosts[i]);
        }
      }
      console.log(this.cityFiltered);
      this.allPosts = this.cityFiltered;
      return this.cityFiltered;
    },
    filterAll() {
      this.cityFiltered = this.allPosts;
      console.log(this.cityFiltered);
      this.allPosts = this.cityFiltered;
      return this.cityFiltered;
    },
    football() {
      for (let i = 0; i < this.allPosts.length; i++) {
        if (this.allPosts[i].activity === this.foot) {
          this.activityFiltered.push(this.allPosts[i]);
        }
      }
      console.log(this.activityFiltered);
      this.allPosts = this.activityFiltered;
      return this.activityFiltered;
    },
    handball() {
      for (let i = 0; i < this.allPosts.length; i++) {
        if (this.allPosts[i].activity === this.hand) {
          this.activityFiltered.push(this.allPosts[i]);
        }
      }
      console.log(this.activityFiltered);
      this.allPosts = this.activityFiltered;
      return this.activityFiltered;
    },
        pool() {
      for (let i = 0; i < this.allPosts.length; i++) {
        if (this.allPosts[i].activity === this.pooll) {
          this.activityFiltered.push(this.allPosts[i]);
        }
      }
      console.log(this.activityFiltered);
      this.allPosts = this.activityFiltered;
      return this.activityFiltered;
    },
    basketball(){
      for (let i = 0; i < this.allPosts.length; i++) {
        if (this.allPosts[i].activity === this.basket) {
          this.activityFiltered.push(this.allPosts[i]);
        }
      }
      console.log(this.activityFiltered);
      this.allPosts = this.activityFiltered;
      return this.activityFiltered;
    }

  },
  mutations: {
    counta: {
      get() {
        return this.$store.state.counter;
      },
      set(counta) {
        this.$store.comit("countMutation", counta);
      }
    }
  },

  data() {
    return {
      open: false,
      isOpen: 0,
      fullheight: true,
      fullwidth: false,
      overlay: false,
      right: true,
      total: this.$store.state.events,
      pages: 10,
      duration: 4000,
      allPosts: null,
      postId: null,
      localCounter: null,
      participants: 0,
      counta: 0,
      uniqueId: null,
      city: null,
      gothenburg: "gothenburg",
      stockholm: "stockholm",
      malmo: "malmo",
      hand: "Handball",
      foot: "Football",
      pooll: "pool",
      basket: "Basketball",
      cityFiltered: [],
      activityFiltered: []
    };
  },
  created() {
    fetch("/api/posts")
      .then(response => response.json())
      .then(result => {
        this.allPosts = result;
        this.uniqueId = result[0].postId;
        this.participants = result[0].attendies;

        console.log(result[1].city);
        // this.counting = result[0].counter;
        // console.log(this.uniqueId);
        // console.log(result[0].attendies);
        // console.log(this.participants);
        // console.log(this.counting);
      });
  }
};
</script>
<style>
.p-1 {
  padding: 1em;
}
#interest {
  columns: auto;
}
#attend-button {
  background-color: rgb(166, 240, 166);
}
.contact-form-container {
  box-shadow: 1px 1px 30px 0 rgba(0, 0, 0, 0.7);
  width: 85%;
  max-width: 1000px;
  padding: 30px 40px;
  margin: 100px auto auto auto;
  box-sizing: border-box;

  color: black;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  border-radius: 10px;
  font-family: "Miller Ban It";
}
#filter-button {
  position: fixed;
  width: 20px;
}

.fixedBox {
  box-shadow: 1px 1px 30px 0 rgba(0, 0, 0, 0.7);
  width: 85%;
  left: 0;
  right: 0;
  max-width: 1000px;
  padding: 30px 40px;
  margin: 0 auto;
  position: fixed;
  align-content: center;
}
.home {
  overflow-y: auto;
  height: 100%;
  width: 100%;
  left: 0;
  right: 0;
  margin: 0 auto;
  scrollbar-width: none;
}
#pagination {
  margin-left: 10%;
  margin-right: 10%;
}
</style>

