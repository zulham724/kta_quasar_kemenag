<template>
  <div>
    <q-header>
      <q-toolbar class="bg-indigo-7">
        <img src="~assets/images/agpaii-logo-transparent.png" style="height:40px" />
        <q-toolbar-title>
          <div class="text-body1 text-white">Kementrian Agama</div>
        </q-toolbar-title>
        <q-btn icon="exit_to_app" color="white" dense flat @click="onLogout()" />
      </q-toolbar>
    </q-header>
    <q-page class="bg-indigo-7">
      <!-- content -->
      <div class>
        <!-- <q-carousel
          v-model="slide"
          swipeable
          animated
          padding
          height="300px"
          class="bg-purple text-white rounded-borders"
        >
          <q-carousel-slide name="style" class="column no-wrap flex-center">
            <q-icon name="style" size="56px" />
            <div class="q-mt-md text-center">{{ lorem }}</div>
          </q-carousel-slide>
          <q-carousel-slide name="tv" class="column no-wrap flex-center">
            <q-icon name="live_tv" size="56px" />
            <div class="q-mt-md text-center">{{ lorem }}</div>
          </q-carousel-slide>
          <q-carousel-slide name="layers" class="column no-wrap flex-center">
            <q-icon name="layers" size="56px" />
            <div class="q-mt-md text-center">{{ lorem }}</div>
          </q-carousel-slide>
          <q-carousel-slide name="map" class="column no-wrap flex-center">
            <q-icon name="terrain" size="56px" />
            <div class="q-mt-md text-center">{{ lorem }}</div>
          </q-carousel-slide>
        </q-carousel>-->
      </div>

      <q-intersection
        v-for="item in items"
        :key="item.id"
        :style="`min-height:25vh;width: 100vw`"
        transition="scale"
      >
        <q-card
          class="my-card text-white"
          v-bind:style="'margin-left:20vw;height:25vh;background-image:url('+item.img+');background-size:cover;'"
        >
          <div>
            <!--<q-img :src="item.img" /> -->

            <div
              v-bind:style="'height:25vh;background-image: linear-gradient(to bottom right,pink,'+item.color+',#4b5ec4,#7986cb);opacity:0.6;'"
            ></div>
            <q-card-section
              class="text-weight-medium text-white"
              style="position:absolute;font-size:5vh;
    top: 50%;
    transform: translate(0, -50%);"
              @click="$route.name == 'detail_reward' ? null : $router.push('/detail_reward')"
            >
              <!-- <q-card-section @click="showData"> -->
              <!--<div class="d-flex flex-no-wrap justify-space-between">-->

              <div style="absolute ;margin-left:-10vh">{{ item.name }}</div>
              <!-- <v-card-title
                  class="headline"
                  v-text="item.name"
                ></v-card-title>
              <v-card-subtitle v-text="item.username">
              </v-card-subtitle>
              <v-card-subtitle v-text="item.username">
              </v-card-subtitle>
              <v-avatar class="ma-3" size="125" tile>
                <v-img : src="item.img"></v-img>
              </v-avatar>
              </div>
              </v-card>-->
            </q-card-section>
          </div>
        </q-card>
      </q-intersection>
    </q-page>
  </div>
</template>

<script>
export default {
  // name: 'PageName',
  data() {
    return {
      navPos: "bottom",
      navigationPositions: [
        { value: "top", label: "top" },
        { value: "right", label: "right" },
        { value: "bottom", label: "bottom (default)" },
        { value: "left", label: "left" }
      ],
      lorem:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.",
      items: [
        {
          id: 1,
          name: "Guru Terbaik",
          img:
            "http://taufiqurokhman.com/wp-content/uploads/2018/09/Guru-Agama.jpg",
          color: "green",
          username: "blablabla",
          asal: "bandung"
        },
        {
          id: 2,
          name: "Guru Teraktif",
          color: "yellow",
          img:
            "https://www.femina.co.id/images/images/Indonesia%20Mengajar%202.jpg",
          username: "blablabla",
          asal: "bandung"
        },
        {
          id: 3,
          name: "Guru Terajin",
          color: "purple",
          img:
            "http://kankemenagacehtengah.com/wp-content/uploads/2019/08/3b30ac48-c7cc-413a-b33a-d5a4da88952d-640x403.jpg",
          username: "blablabla",
          asal: "bandung"
        },
        {
          id: 4,
          name: "Pengawas Teraktif",
          color: "orange",
          img:
            "https://cdn.akurat.co/images/uploads/images/akurat_20171129091936_tm18WC.jpg",
          username: "blablabla",
          asal: "bandung"
        },
        {
          id: 5,
          name: "Pengawas Terajin",
          color: " #d32f2f",
          img: "https://ntb.kemenag.go.id/upload/images/berita/img_iC6GHZ4.jpg",
          username: "blablabla",
          asal: "bandung"
        }
      ]
    };
  },
  methods: {
    onLogout() {
      this.$router.push("/login").then(() => {
        this.$store.dispatch("Auth/logout");
      });
    }
  }
};
</script>
