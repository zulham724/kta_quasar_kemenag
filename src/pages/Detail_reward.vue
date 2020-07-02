<template>
  <div>
    <q-header>
      <q-toolbar class="bg-white">
        <q-btn icon="chevron_left" color="indigo" dense flat @click="$router.back()" />
        <q-toolbar-title>
          <div class="text-body1 text-bold text-indigo">Kementrian Agama</div>
        </q-toolbar-title>
        <q-btn icon="exit_to_app" color="indigo" dense flat @click="onLogout()" />
      </q-toolbar>
    </q-header>
    <q-page>
      <div class="column bg-grey">
        <q-carousel
          v-model="slide"
          keep-alive
          swipeable
          animated
          height="1000px"
          class="bg-indigo-1"
          infinite
        >
          <q-carousel-slide v-for="i in rewards" :key="i.title" :name="i.title" class="no-padding">
            <div
              class="col text-white text-center text-h6"
              v-bind:style="'background-size:cover;border-radius:0% 0% 10% 10%;height:80vh;border-radius:0% 0% 10% 10%;background-image:url('+i.img+');position:relative;'"
            >
              <!-- absolute-full -->
              <!--  background-image: linear-gradient(to bottom, rgb(61,52,162), rgb(121, 134, 203))background-image: linear-gradient(to bottom, rgba(255,0,0,0), rgba(255,0,0,1)); -->
              <!-- style="background-image:url('https://i.dlpng.com/static/png/6523296_preview.png');background-size:cover; border-radius: 0px 0px 50px 50px"
              >-->

              <!--<img
                :src="i.img"
                style="position:absolute;background-size:cover;transform:translate(-50%,0%);z-index:1;object-fit:cover;height:48vh;border-radius:0% 0% 30% 30%;"
              />-->
              <div
                class="full-width full-height absolute"
                v-bind:style="'background-image: linear-gradient(to right, #4b5ec4,#7986cb,'+i.color+';opacity:0.75;background-size:cover;border-radius:0% 0% 10% 10%;'"
              ></div>

              <!--<div
                    style="background-image: linear-gradient(to bottom right, #4b5ec4,#7986cb, yellow,pink);opacity:0.6; height:500px ; width:100%;position:absolute;"
              ></div>-->

              <div class="absolute-top q-mx-auto" style="z-index:9;width:80%;">
                <div class="text-h4 text-bold text-white q-mx-auto q-py-lg">
                  {{ i.title }}
                  <q-separator inset color="yellow" size="2px"></q-separator>
                </div>

                <q-card class="text-black q-pa-sm" style="width:100%;">
                  <div class="text-h6">Mei 2020</div>
                  <div>
                    <!-- :style="{width:100%;background-size:cover;background-image:url(${require('@/assets/bg-login.png')}) }" -->
                    <!-- <img src="~assets/images/bg-card-reward.png" style="width:95%;z-index:2;"/>
                    -->
                    <q-avatar size="120px" style="z-index:3">
                      <img :src="imgsrc" />
                    </q-avatar>
                  </div>

                  <div class="text-subtitle1 text-bold q-mx-auto q-mt-xs">
                    <span>Bambang Jaya</span>
                    <q-btn rounded color="green" style="height:25px;">
                      <img
                        src="https://img.icons8.com/fluent/48/000000/crown.png"
                        style="height:20px;margin-top:-10px;"
                      />
                      <span style="margin-top:-10px">10</span>
                    </q-btn>
                  </div>
                  <div class="text-body2 q-mx-auto">KTA Gunungpati Semarang</div>
                  <div></div>
                  <div class="q-my-sm" style="display:inline-flex">
                    <div
                      class="col text-subtitle2 text-white bg-red-7 q-px-sm q-py-xs q-mx-xs"
                      style="width:80px;border-radius:25px"
                    >
                      <span class="material-icons">comment</span>30
                    </div>
                    <div
                      class="col text-subtitle2 text-white bg-red-7 q-px-sm q-py-xs q-mx-xs"
                      style="width:80px;border-radius:25px"
                    >
                      <span class="material-icons">thumb_up</span>30
                    </div>
                    <div
                      class="col text-subtitle2 text-white bg-red-7 q-px-sm q-py-xs q-mx-xs"
                      style="width:80px;border-radius:25px"
                    >
                      <span class="material-icons">insert_drive_file</span>10
                    </div>
                  </div>
                  <div>
                    <q-btn
                      rounded
                      color="indigo"
                      @click="$route.name == 'profile' ? null : $router.push('/profile')"
                    >
                      <div class="vertical-middle q-mx-xs">Lihat Profil</div>
                    </q-btn>
                  </div>
                </q-card>
              </div>
            </div>
            <div
              class="col bg-indigo-1"
              style="border-radius:5% 5% 0% 0%;transform:translate(0,-15vh);"
            >
              <!-- filter -->
              <div class="q-pa-sm">
                <!-- <span class="material-icons">filter_alt</span> FilteRRRRRRRRR-->
                <q-btn-dropdown
                  color="indigo"
                  label="Filter"
                  style="display:flex;width: 100px; align-items:right"
                >
                  <div class="text-subtitle2">
                    Tahun
                    <div class="q-gutter-sm">
                      <q-checkbox label="2019" color="teal" />
                      <q-checkbox label="2020" color="teal" />
                    </div>
                  </div>
                  <div class="text-subtitle2">
                    Bulan
                    <q-select
                      filled
                      v-model="model"
                      use-input
                      use-chips
                      multiple
                      input-debounce="0"
                      @new-value="createValue"
                      :options="filterOptions"
                      @filter="filterFn"
                    ></q-select>
                  </div>
                </q-btn-dropdown>
              </div>
              <!-- content -->
              <div class="q-mx-sm">
                <q-intersection
                  v-for="item in i.user"
                  :key="item.id"
                  :style="`margin-bottom:5px;margin-top:5px`"
                  transition="scale"
                >
                  <q-item>
                    <q-item-section top avatar class="text-bold text-body1 text-grey-9">
                      <div>Juni</div>
                      <div>2020</div>
                    </q-item-section>
                    <q-item-section>
                      <q-card
                        class="my-card bg-white no-margin full-height text-black"
                        style="height:auto"
                      >
                        <q-card-section class="q-pa-xs">
                          <q-item>
                            <q-item-section top avatar class="identity q-mb-sm">
                              <q-avatar size="70px">
                                <img :src="item.img" />
                              </q-avatar>
                            </q-item-section>
                            <q-item-section>
                              <div
                                class="text-subtitle1 text-indigo text-weight-medium"
                              >{{ item.name }}</div>
                              <div class="text-body2">{{item.loc}}</div>
                              <div v-for="x in item.history" v-bind:key="x.index">
                                <span class="chip label text-body2">{{x.index}} {{x.value}}</span>
                              </div>
                            </q-item-section>
                          </q-item>
                        </q-card-section>
                      </q-card>
                    </q-item-section>
                  </q-item>
                </q-intersection>
              </div>
            </div>
          </q-carousel-slide>
        </q-carousel>
      </div>
    </q-page>
  </div>
</template>

<script>
const monthOptions = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "Mei",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Okt",
  "Nov",
  "Des"
];

export default {
  // name: 'PageName',
  data() {
    return {
      model: null,
      filterOptions: monthOptions,
      imgsrc:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      user: {
        username: "rosfiarani",
        name: "Rosfia Rachmanurrani",
        shortbio: "Hallo gais. Selamat datang di akun saya",
        img:
          "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      },
      navPos: "bottom",
      navigationPositions: [
        { value: "top", label: "top" },
        { value: "right", label: "right" },
        { value: "bottom", label: "bottom (default)" },
        { value: "left", label: "left" }
      ],
      slide: 1,
      rewards: [
        {
          title: "Guru Terbaik",
          img:
            "https://www.femina.co.id/images/images/Indonesia%20Mengajar%202.jpg",
          color: "green",
          user: [
            {
              id: 3,
              username: "Eaidi",
              name: "Dinda Putri Blablablaput",
              img:
                "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
              date: "Juni 2020",
              loc: "PAI Gunungpati Semarang",
              history: [
                {
                  index: "rate",
                  value: 9.5
                }
              ]
            },
            {
              id: 2,
              username: "Eaidi",
              name: "Edi Adi Idi",
              img:
                "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
              date: "Mei 2020",
              loc: "PAI Gunungpati Semarang",
              history: [
                {
                  index: "rate",
                  value: 9.5
                }
              ]
            },
            {
              id: 1,
              username: "Eaidi",
              name: "Edi Adi Idi",
              img:
                "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
              date: "April 2020",
              loc: "PAI Gunungpati Semarang",
              history: [
                {
                  index: "rate",
                  value: 9.5
                }
              ]
            }
          ]
        },
        {
          title: "Guru Teraktif",
          img:
            "https://cdn.akurat.co/images/uploads/images/akurat_20171129091936_tm18WC.jpg",
          color: "yellow",
          user: [
            {
              id: 3,
              username: "Eaidi",
              name: "Edi Adi Idi",
              img:
                "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
              date: "Juni 2020",
              history: [
                { index: "post", value: 100 },
                { index: "like", value: 20 },
                { index: "comment", value: 20 }
              ]
            },
            {
              id: 2,
              username: "Eaidi",
              name: "Edi Adi Idi",
              img:
                "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
              date: "Juni 2020",
              history: [
                { index: "post", value: 100 },
                { index: "like", value: 20 },
                { index: "comment", value: 20 }
              ]
            },
            {
              id: 1,
              username: "Eaidi",
              name: "Edi Adi Idi",
              img:
                "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
              date: "Juni 2020",
              history: [
                { index: "post", value: 100 },
                { index: "like", value: 20 },
                { index: "comment", value: 20 }
              ]
            }
          ]
        }
      ]
    };
  },
  methods: {
    createValue(val, done) {
      if (val.length > 0) {
        const model = (this.model || []).slice();

        val
          .split(/[,;|]+/)
          .map(v => v.trim())
          .filter(v => v.length > 0)
          .forEach(v => {
            if (stringOptions.includes(v) === false) {
              stringOptions.push(v);
            }
            if (model.includes(v) === false) {
              model.push(v);
            }
          });

        done(null);
        this.model = model;
      }
    },
    onLogout() {
      this.$router.push("/login").then(() => {
        this.$store.dispatch("Auth/logout");
      });
    },

    filterFn(val, update) {
      update(() => {
        if (val === "") {
          this.filterOptions = stringOptions;
        } else {
          const needle = val.toLowerCase();
          this.filterOptions = stringOptions.filter(
            v => v.toLowerCase().indexOf(needle) > -1
          );
        }
      });
    }
  }
};
</script>
