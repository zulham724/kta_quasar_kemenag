<template>
  <div>
    <q-page class="bg-grey-3">
      <!-- content -->
      <div class="bg-image" style="position:relative">
        <img src="~assets/images/bg-acc.png" style="height:40vh;width:100%;background-size:cover" />
        <div class="absolute-top-left text-white text-body1 text-bold q-ma-md">Profil</div>
        <div class="absolute-top-right q-ma-sm">
          <!-- <q-btn color="indigo-4">
          <span class="material-icons q-mr-xs text-h6">settings</span>
          </q-btn>-->
          <q-btn icon="settings" color="white" dense flat @click="settings =true" />
        </div>
      </div>
      <div
        class="bg-grey-3 absolute"
        style="min-height:70%;transform:translate(0%,-10%);border-radius:10% 10% 0% 0%;"
      >
        <!-- <div class="bg-yellow-10" style="height:40vh;border-radius:0% 0% 50% 50%"></div>
        -->
        <div style="transform:translate(0%,-15%)">
          <div
            class="col text-black text-center bg-white q-px-md q-py-xs"
            style="width:85%;border-radius:30px 30px 30px 30px;margin-left:auto;margin-right:auto;"
          >
            <q-avatar size="120px" style="margin-top:-60px">
              <img :src="imgsrc" />
            </q-avatar>
            <div class="text-h6 text-bold">{{ Auth.auth.name }}</div>
            <!-- <div class="text-subtitle1 ">Kepala Divisi Operasional</div> -->
            <div class="text-body1">Saya halo hehe baba baba</div>

            <div class="q-mt-lg" />
            <!-- <q-btn color="grey-3" rounded @click="$route.name == 'edit' ? null : $router.push('/edit')">
          <span class="material-icons q-mr-xs text-h6 text-indigo">edit</span>
          <div class="vertical-middle q-mx-xs text-indigo">UBAH PROFIL</div>
          <img src />
        </q-btn>
            -->
          </div>
          <div class="text-body1 q-pa-md">
            <q-card>
              <q-card-section>
                <q-item-label class="text-subtitle1 text-bold text-grey-8 q-mb-sm">
                  <!-- <span class="material-icons">person</span> -->
                  Tentang Saya
                </q-item-label>
                <q-item-label
                  class="text-body2 q-ml-sm"
                >Saya merupakan bla fjkasfd as asfbjksadf ksjdagkj ds ksadfjkjasfk sjfdkjnkjsaf jaknfsakj fs jnkjn kjcbsafdnnvc ksajhdf vsan sdafjkhvn sadfhkf sdf kasfdnjk asbdsfajk sdafbjkbk safbk asfjksd ksa bksfd</q-item-label>
              </q-card-section>
            </q-card>

            <q-card class="q-mt-sm">
              <q-card-section>
                <q-item-label class="text-subtitle1 text-grey-8 text-bold">
                  <!-- <span class="material-icons">work</span> -->
                  Unit Kerja
                </q-item-label>
                <q-item-label class="text-body2 text-black">
                  <div class="row q-pa-xs">
                    <div class="col-3" align="left">Unit Kerja</div>
                    <div class="col-8" align="right">Kementrian Keagamaan</div>
                  </div>
                  <div class="row q-pa-xs">
                    <div class="col-3" align="left">Wilayah</div>
                    <div class="col-8" align="right">Gunungpati</div>
                  </div>
                  <div class="row q-pa-xs">
                    <div class="col-3" align="left">Daerah</div>
                    <div class="col-8" align="right">Semarang Jawa Tengah</div>
                  </div>
                </q-item-label>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </div>
      <div></div>
      <q-dialog v-model="settings" transition-show="scale" transition-hide="scale">
        <q-card class="q-pa-sm" style="width:60vw">
          <!-- <div class="text-body1 text-weight-medium q-mb-sm">PENGATURAN</div> -->
          <q-btn
            color="grey-6"
            class="full-width q-my-xs"
            @click="$route.name == 'edit' ? null : $router.push('/edit')"
          >
            <span class="material-icons q-mr-xs text-h6">edit</span>
            <span class="vertical-middle q-mx-xs">UBAH PROFIL</span>
          </q-btn>
          <q-btn
            color="grey-6"
            class="full-width q-my-xs"
            @click="$route.name == 'password' ? null : $router.push('/password')"
          >
            <span class="material-icons q-mr-xs text-h6">vpn_key</span>
            <span class="vertical-middle q-mx-xs">UBAH PASSWORD</span>
          </q-btn>
          <q-btn color="grey-6" class="full-width q-my-xs" @click="onLogout()">
            <span class="material-icons q-mr-xs text-h6">exit_to_app</span>
            <span class="vertical-middle q-mx-xs">KELUAR</span>
          </q-btn>
          <q-btn color="grey-6" class="full-width q-my-xs">
            <span class="vertical-middle q-mx-xs">CANCEL</span>
          </q-btn>
        </q-card>
      </q-dialog>
    </q-page>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  // name: 'PageName',
  data() {
    return {
      settings: false,
      id: "admin@admin.com",
      user: {
        username: "rosfiarani",
        name: "Rosfia Rachmanurrani",
        desc: "Hallo gais. Selamat datang di akun saya",
        img:
          "https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg"
      },
      users: {},
      posts: [
        {
          id: 1,
          status: "Selamat pagi semuanya",
          img:
            "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          date: "14 Juni 2020"
        },
        {
          id: 2,
          status:
            "Selamat pagi semuanya. sudah lama tak berjumpa. semangat semuanya",
          img:
            "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          date: "14 Juni 2020"
        },
        {
          id: 3,
          status:
            "Selamat pagi semuanya.sdfakl hwcasdfjbkjdsn jhsdkvldj hlashfdjvl H FVNJH LVAGHLVHGJ LLGJSHALL SJLGHLKAJV SJLVASSGAL JHSAHVJHL SF",
          date: "14 Juni 2020"
        }
      ],
      imgsrc:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    };
  },
  computed: {
    ...mapState(["Auth"])
  },
  methods: {
    onLogout() {
      this.$router.push("/login").then(() => {
        this.$store.dispatch("Auth/logout");
      });
    },
    getProfile() {}
  },
  mounted() {
    this.getProfile();
  }
};
</script>
