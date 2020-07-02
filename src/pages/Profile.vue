  <link
    rel="stylesheet"
    type="text/css"
    href="https://unpkg.com/quasar-framework@^0.17.0/dist/umd/quasar.mat.min.css"
  />
<template>
  <div>
    <q-header>
      <q-toolbar class="bg-white">
        <q-btn icon="chevron_left" color="indigo" dense flat @click="$router.back()" />
        <q-toolbar-title>
          <div class="text-body1 text-bold text-indigo">rosfiarani</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page padding>
      <!-- content -->
      <div class="column">
        <div class="col bg-white text-black text-center q-pb-sm">
          <q-avatar size="120px">
            <img :src="imgsrc" />
          </q-avatar>
          <div class="text-h6 q-mx-auto q-mt-sm">{{ user.name }}</div>

          <div class="text-body2 q-mx-auto q-mt-sm">{{ user.shortbio }}</div>
          <div class="text-body2 q-mx-auto">
            <span class="material-icons text-h6">room</span>
            <!--<img
            src="https://img.icons8.com/pastel-glyph/64/000000/place-marker.png"
            />-->
            KTA gunungpati Semarang
          </div>
          <q-btn rounded color="green" @click="rewardsModal =true">
            <img src="https://img.icons8.com/fluent/48/000000/crown.png" style="height:30px" />
            <div class="vertical-middle q-mx-xs">10 PENGHARGAAN</div>
            <img src />
          </q-btn>
          <div class="row q-my-xs">
            <div class="col-4 text-indigo">
              <div class="text-h6">10</div>
              <div class="text-subtitle2">Post</div>
            </div>
            <div class="col-4 text-indigo">
              <div class="text-h6">10</div>
              <div class="text-subtitle2">Media</div>
            </div>
            <div class="col-4 text-indigo">
              <div class="text-h6">10</div>
              <div class="text-subtitle2">Book</div>
            </div>
          </div>
        </div>
        <div class="col bg-indigo-2 q-px-md ">
          <q-dialog v-model="rewardsModal" transition-show="scale" transition-hide="scale">
            <div class="bg-indigo-4" name="rewardModal" :content-css="{minwidth:'80vh'}">
              <div
                header-style="min-height: 70px"
                content-class="{'bg-primary': isPrimary, 'some-class': someBoolean}"
              >
                <q-toolbar slot="header">
                  <img src="https://img.icons8.com/fluent/48/000000/crown.png" style="height:100%" />
                  <q-toolbar-title class="text-h6 text-bold text-black">Penghargaan</q-toolbar-title>
                  <q-btn icon="close" color="black" dense flat @click="rewardsModal=false" />
                </q-toolbar>
                <div slot="content" class="q-px-sm" >
                  <q-item
                    v-for="(reward) in rewards"
                    v-bind:key="reward.title"
                    class="bg-white q-my-xs"
                  >
                    <!-- <q-item-section top avatar>
                      <q-avatar>
                        <img src="~assets/images/best.png" />
                      </q-avatar>
                    </q-item-section>-->
                    <q-item-section>
                      <q-item-label class="text-bold">{{reward.title }}</q-item-label>
                      <q-separator dark horizontal />
                      <q-item-label v-for="i in reward.history" v-bind:key="i.index" class="column">
                        <span class="chip label">{{i.index}} {{i.value}}</span>
                      </q-item-label>
                    </q-item-section>
                    <q-item-section side top>
                      <q-badge color="indigo">{{reward.date}}</q-badge>
                    </q-item-section>
                  </q-item>
                </div>
              </div>
            </div>
          </q-dialog>
          <q-intersection
            v-for="item in posts"
            :key="item.id"
            :style="`margin-bottom:5px;margin-top:10px`"
            transition="scale"
          >
            <q-card class="my-card bg-white no-margin full-height text-black" style="height:100%">
              <q-card-section>
                <q-item>
                  <q-item-section avatar>
                    <q-avatar class="item-primary">
                      <img :src="user.img" style="width:100%" />
                    </q-avatar>
                  </q-item-section>
                  <q-item-section>
                    <div class="text-body1 text-weight-medium">{{ user.name }}</div>
                    <div class="text-subtitle2 text-weight-regular text-grey">{{ item.date }}</div>
                  </q-item-section>
                </q-item>
                <div class="card-content text-body1">{{ item.status }}</div>
                <div>
                  <q-img :src="item.img" />
                </div>
              </q-card-section>
            </q-card>
          </q-intersection>
        </div>
      </div>
    </q-page>
  </div>
</template>

<script>
export default {
  // name: 'PageName',
  data() {
    return {
      rewardsModal: false,
      showModal: () => {
        this.rewardModal = true;
      },
      types: [
        {
          label: "RewardModal",
          show: () => {
            this.rewardModal = true;
          }
        }
      ],
      user: {
        username: "rosfiarani",
        name: "Rosfia Rachmanurrani",
        shortbio: "Hallo gais. Selamat datang di akun saya",
        img:
          "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      },
      posts: [
        {
          id: 1,
          status: "Selamat pagi semuanya. HAHAH HEH eadjs afhsjksfavf fass",
          img:
            "https://upload.wikimedia.org/wikipedia/commons/3/35/Neckertal_20150527-6384.jpg",
          date: "14 Juni 2020 14:00"
        },
        {
          id: 2,
          status:
            "Selamat pagi semuanya. sudah lama tak berjumpa. semangat semuanya",
          img:
            "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          date: "14 Juni 2020 13:00"
        },
        {
          id: 3,
          status:
            "Selamat pagi semuanya.sdfakl hwcasdfjbkjdsn jhsdkvldj hlashfdjvl H FVNJH LVAGHLVHGJ LLGJSHALL SJLGHLKAJV SJLVASSGAL JHSAHVJHL SF",
          date: "14 Juni 2020 12:00"
        }
      ],
      rewards: [
        {
          title: "Guru Terbaik",

          date: "Januari 2020",
          history: [{ index: "rate", value: 9.5 }]
        },
        {
          title: "Guru Teraktif",
          date: "Maret 2020",
          history: [
            { index: "post", value: 10 },
            { index: "like", value: 100 },
            { index: "comment", value: 50 }
          ]
        },
        {
          title: "Guru Terbaik",
          date: "April 2020",
          history: [{ index: "rate", value: 9.5 }]
        }
      ],
      imgsrc:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    };
  }
};
</script>
