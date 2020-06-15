<template >
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
          <!-- <div>this.time</div> -->

          <div id="title-post">{{post.title}}</div>
          <div class="right-post">{{post.city}}</div>
          <hr />
          <div id="des-post">{{post.description}}</div>

          <div class="right-post">posted: {{post.timestamp}}</div>
          <div class="right-post">duration: {{post.duration}} h</div>
          <div id="activity-post">{{post.activity}}</div>
          <div id="other-post">{{post.other}}</div>
          <hr />
          <!-- <div>{{post.postId}}</div> -->
          <!-- <div class="box-1">
            <div class="btn btn-one">
              <button
                @click="increaseAttend(post.postId)"
                :disabled=" localCounter === post.attendies"
              >attend</button>
            </div>
          </div>-->

          <p href="#" class="btn-flip" data-back="attend" data-front="Interested?">
            <button
              @click="increaseAttend(post.postId)"
              :disabled=" localCounter === post.attendies"
            >
              here
              <i class="fas fa-check 5x"></i>
            </button>
          </p>

          <hr />
          <span style="border: 1px solid black">{{post.counter}}/{{post.attendies}}</span>

          <div class="box-3" v-if="hideDelete">
            <div class="btn btn-three">
              <button @click="deletePost(postId)">
                cancel
                <i class="far f a-trash-alt"></i>
              </button>
            </div>
          </div>
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
// this.webSocket = new WebSocket('ws://localhost:3002')

// this.webSocket.addEventListener('message', (event) => {

//   this.time = JSON.parse(event.data).time
// })

// this.webSocket.addEventListener('open', () => {
//   this.webSocket.send('Hi, there!')
// })

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
          this.here = "yes";
          this.hideDelete = true;
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

    clickCallback(pageNum) {
      console.log(pageNum);
    },
    deletePost(postId) {
      // for (let i = 0; i < this.allPosts.length; i++) {
      //    this.allPosts.splice(this.allPosts.indexOf(e), 1)

      // }

      fetch("/api/attends", {
        method: "delete",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          counter: this.localCounter,
          postId: postId
        })
      });

      // fetch(`/api/remove/${postId}`)
      // .then(response => response.json())
      // .then(result => {
      //   console.log(result)
      // })
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
    basketball() {
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
      activityFiltered: [],
      time: null,
      webSocket: null,
      hideDelete: false,
      here: "here"
    };
  },
  created() {
    fetch("/api/posts")
      .then(response => response.json())
      .then(result => {
        this.allPosts = result;
        this.uniqueId = result[0].postId;
        this.participants = result[0].attendies;

        console.log(result[0].city);
        // this.counting = result[0].counter;
        // console.log(this.uniqueId);
        // console.log(result[0].attendies);
        // console.log(this.participants);
        // console.log(this.counting);
      });
  }
};
</script>
<style lang="scss">
$speed: 1s;

.btn-flip {
  opacity: 1;
  outline: 0;
  color: #fff;
  line-height: 40px;
  position: relative;
  text-align: center;
  letter-spacing: 1px;
  display: inline-block;
  text-decoration: none;
  font-family: "Open Sans";
  text-transform: uppercase;

  &:hover {
    &:after {
      opacity: 1;
      transform: translateY(0) rotateX(0);
    }

    &:before {
      opacity: 0;
      transform: translateY(50%) rotateX(90deg);
    }
  }

  &:after {
    top: 0;
    left: 0;
    opacity: 0;
    width: 100%;
    color: #323237;
    display: block;
    transition: $speed;
    position: absolute;
    background: #adadaf;
    content: attr(data-back);
    transform: translateY(-50%) rotateX(90deg);
  }

  &:before {
    top: 0;
    left: 0;
    opacity: 1;
    color: #adadaf;
    display: block;
    padding: 0 30px;
    line-height: 40px;
    transition: $speed;
    position: relative;
    background: #323237;
    content: attr(data-front);
    transform: translateY(0) rotateX(0);
  }
}
</style>
<style>
#title-post {
  position: absolute;
}
.right-post {
  margin: 0;
  display: flex;
  position: relative;
  justify-content: right;
  align-items: right;
}

div[class*="box"] {
  height: 33.33%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.btn-three {
  color: #fff;
  transition: all 0.5s;
  position: relative;
}
.btn-three::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: rgba(136, 12, 12, 0.5);
  transition: all 0.3s;
}
.btn-three:hover::before {
  opacity: 0;
  transform: scale(0.5, 0.5);
}
.btn-three::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: 0;
  transition: all 0.3s;
  border: 1px solid rgba(136, 12, 12, 0.5);
  transform: scale(1.2, 1.2);
}
.btn-three:hover::after {
  opacity: 1;
  transform: scale(1, 1);
}

.p-1 {
  padding: 1em;
}
#interest {
  columns: auto;
}
#attend-button {
  background-color: rgba(255, 255, 255, 0.1);
  border-width: 0 5px 0 5px;
}
.contact-form-container {
  background-color: rgb(226, 225, 225);
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
#feedId {
  border-top: 1px solid #eee;
  margin-left: auto;
  margin-right: auto;
  max-width: 1280px;
  padding-bottom: 30px;
  padding-top: 40px;
  text-align: center;
}
</style>

