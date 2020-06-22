<template>
  <div>
    <q-header elevated>
      <q-toolbar class="bg-indigo">
        <q-toolbar-title>
          <div class="text-body1">Kementrian Agama</div>
        </q-toolbar-title>
        <q-btn
          icon="exit_to_app"
          color="white"
          dense
          flat
          @click="onLogout()"
        />
      </q-toolbar>
    </q-header>
    <q-page padding class="bg-indigo-9">
      <!-- content -->
      <q-intersection
        v-for="item in items"
        :key="item.id"
        :style="`min-height: 30vh;width: 100vw`"
        transition="scale"
      >
        <q-card
          class="my-card bg-indigo-4 text-white"
          style="margin-left:20vw;height:25vh"
        >
          <q-card-section>
            <div class="text-body1">{{ item.name }}</div>
          </q-card-section>
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
      items: [
        {
          id: 1,
          name: "Guru terbaik"
        },
        {
          id: 2,
          name: "Guru teraktif"
        },
        {
          id: 3,
          name: "Pengawas teraktif"
        },
        {
          id: 4,
          name: "Pengawas terajin"
        }
      ]
    };
  },
  methods: {
    onLogout() {
      this.$router.push("/login").then(() => {
        this.$store.dispatch("Auth/logout");
      });
    },
  }
};
</script>
