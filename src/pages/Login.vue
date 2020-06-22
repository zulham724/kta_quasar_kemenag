<template>
  <div
    style="height:100vh;background-image:linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url('https://images.unsplash.com/photo-1569929919600-59123640bc02?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=564&q=80');background-size:cover"
  >
    <div class="q-pa-md full-height">
      <div
        class="row justify-center align-center content-center full-height full-width"
      >
        <div class="col-12" style="margin-top:-25vh">
          <div class="row justify-center" style="text-align:center">
            <img src="~assets/images/agpaii-logo-transparent.png" style="height:15vh" />
            <div class="text-body2 q-pt-md text-white">Jika sudah mendaftar. Silahkan masuk dengan email dan password anda</div>
          </div>
        </div>
        <div class="col-12">
          <q-form @submit="onSubmit" ref="form" class="q-gutter-md">
            <q-input
              color="indigo"
              style="opacity:0.8"
              bg-color="white"
              rounded
              outlined
              label="Email anda"
              v-model="credential.username"
              lazy-rules
              :rules="[
                val => (val && val.length > 0) || 'Harus diisi'
              ]"
            />
            <q-input
              color="indigo"
              style="opacity:0.8"
              bg-color="white"
              rounded
              outlined
              label="Password"
              v-model="credential.password"
              type="password"
              lazy-rules
              :rules="[
                val => (val && val.length > 0) || 'Harus diisi'
              ]"
            />
          </q-form>
        </div>
        <div class="col-12" style="z-index:1">
          <div class="row justify-end">
            <q-btn
              label="Masuk"
              @click="onSubmit()"
              rounded
              color="indigo"
              type="submit"
              :loading="loading"
              :disable="loading"
            />
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  data(){
    return {
      credential:{},
      loading: false
    }
  },
  computed:{
    ...mapState(['Auth'])
  },
  methods: {
    onSubmit() {
      this.$refs.form.validate().then(success=>{
        if(success){
          this.loading = true
          this.$store.dispatch('Auth/login',this.credential).then(res=>{
              this.$router.push('/')
              window.history.pushState(null, null ,window.location.href)
          }).catch(err=>{
            this.$q.notify('Email atau Password salah')
          }).finally(()=>{
              this.loading = false
          })
        }
      })
    },
    forgotPassword(){
      cordova.InAppBrowser.open(
        "https://agpaiidigital.org/password/reset",
        "_blank",
        "location=no"
      )
    }
  }
};
</script>

<style></style>
