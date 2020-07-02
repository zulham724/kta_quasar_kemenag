<template>
  <div>
    <q-header>
      <q-toolbar class="bg-white">
        <q-btn icon="chevron_left" color="indigo" dense flat @click="$router.back()" />
        <q-toolbar-title>
          <div class="text-body1 text-bold text-indigo">Pengaturan Akun</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-page padding>
      <q-form action>
        <q-input class="text-body1" style="text-align:right;" filled v-model="test" placeholder="blabla" :dense="dense">
        <template v-slot:prepend >
          <span class="text-body1" style="text-align: left;">
            Nama
          </span>
        </template>
      </q-input>
        
        <q-card class="text-body1 bg-grey-2 q-ma-sm">
          <q-card-section>
             <div class="text-h6 sq-mb-xs">Foto Profil</div>
            <div class="row">
            <span>
              <q-avatar size="100px">
                <img
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                />
              </q-avatar>
            </span>
            <span class="q-ml-md q-pt-xs q-mb-md">
              <div class="text-body1 text-grey-10">rosfiarani</div>
              <div class="text-body1 text-indigo">Ubah Foto Profil</div>
            </span>
          </div>
        </q-card-section >
         </q-card>
         <q-card  class="text-body1 bg-grey-2 q-ma-sm">
           <q-card-section>
<q-item-label class="text-h6 q-pa-xs q-mb-xs q-mt-md">Informasi Pribadi</q-item-label>
          <q-input v-model="status" label="status" stack-label class="q-ma-sm text-body1" />
          <q-input
      v-model="desc"
      label="Deskripsi"
      filled
      type="textarea" class="q-ma-sm text-body1"
    />
     <q-input class="q-ma-sm text-body1" v-model="birthdate" label="Tanggal Lahir" filled type="date"></q-input>
     <!-- <div>
       Jenis Kelamin
 <q-radio name="gender" v-model="gender" val="1" label="Wanita" />
      <q-radio name="gender" v-model="gender" val="0" label="Pria" />
     </div> -->
      
           </q-card-section>
           <q-card-actions>
               <q-btn label="Ubah" type="submit" color="indigo" />
          <q-btn label="Cancel" color="indigo" flat class="q-ml-sm" @click="$router.back()" />
            </q-card-actions>
         </q-card>
          <q-separated></q-separated>
          <q-card class="text-body1 bg-grey-2 q-ma-sm">
            <q-card-section>
              <q-item-label class="text-h6 q-pa-xs q-mb-xs q-mt-md">Informasi Unit Kerja</q-item-label>
              <q-select class="q-ma-xs" filled v-model="province" :options="optProv" label="Provinsi" stack-label :options-dense="true" />
              <q-select  class="q-ma-xs" filled v-model="city" :options="optCity" label="Kota" stack-label  :options-dense="true" />
              <q-select class="q-ma-xs" filled v-model="district" :options="optDis" label="Distrik" stack-label  :options-dense="true" />
              <q-select class="q-ma-xs" filled v-model="role" :options="optRole" label="Jabatan" stack-label :options-dense="true" />
            </q-card-section>
            <q-card-actions>
               <q-btn label="Ubah" type="submit" color="indigo" />
          <q-btn label="Cancel" color="indigo" flat class="q-ml-sm" @click="$router.back()" />
            </q-card-actions>
          </q-card>
          
          
     
        <div>

        </div>
      </q-form>
    </q-page>
  </div>
</template>

<script>
export default {
  // name: 'PageName',
  data(){
    return{
      file:null,
      province:null,
      city:null,
      district:null,
      role:null,
  status:'',
  desc:'',
  birthdate:'',
  optRole:[
    "kepala","wakil kepala","sekretaris" 
  ],
  optProv:[
    "Jawa Tengah","Jawa Barat","Jawa Timur" 
  ],
  optCity:[
    "Semarang","Bandung","Surabaya","Pekalongan" 
  ],
  optDis:[
    "Gunungpati","Tembalang" 
  ],
    }
  },

};
</script>
