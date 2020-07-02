<template>
  <div>
    <q-header>
      <q-toolbar class="bg-white">
        <q-btn icon="chevron_left" color="indigo" dense flat @click="$router.back()" />
        <q-toolbar-title>
          <div class="text-body1 text-bold text-indigo">Ubah Password</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-page padding>
      <div>
        <q-input
          v-model="passcur"
          filled
          color="indigo"
          :type="isPwdcur ? 'password' : 'text'"
          label="Password Saat Ini"
          class="q-mb-sm"
        >
          <template v-slot:append>
            <q-icon
              :name="isPwdcur ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isPwdcur = !isPwdcur"
            />
          </template>
        </q-input>
        <q-input
          v-model="passnew"
          filled
          color="indigo"
          :type="isPwdnew ? 'password' : 'text'"
          label="Password Baru"
          class="q-mb-sm"
        >
          <template v-slot:append>
            <q-icon
              :name="isPwdnew ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isPwdnew = !isPwdnew"
            />
          </template>
        </q-input>
        <q-input
          v-model="passconf"
          filled
          color="indigo"
          :type="isPwdconf ? 'password' : 'text'"
          label="Konfirmasi Password"
          class="q-mb-sm"
        >
          <template v-slot:append>
            <q-icon
              :name="isPwdconf ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isPwdconf = !isPwdconf"
            />
          </template>
        </q-input>

        <q-btn color="indigo" class="full-width q-my-sm">Simpan</q-btn>
        <q-btn color="grey-6" class="full-width" @click="$router.back()">Cancel</q-btn>
        <div class="q-my-sm text-center text-indigo-6">Lupa Password?</div>
      </div>
    </q-page>
  </div>
</template>

<script>
export default {
  data() {
    return {
      passcur: "",
      passnew: "",
      passconf: "",
      isPwdcur: true,
      isPwdnew: true,
      isPwdconf: true
    };
  }
  // name: 'PageName',
};
</script>
