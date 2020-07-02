import multiguard from "vue-router-multiguard";
import store from "./../store";
import moment from "moment";
import { Notify } from "quasar";

// cek auth apakah sudah login atau belum
const auth = function(to, from, next) {
  let isLoggedIn = store().getters["Auth/isLoggedIn"];
  if (isLoggedIn) {
    next();
  } else {
    next("/login");
  }
};

const routes = [
  {
    path: "/",
    beforeEnter: multiguard([auth]),
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/Home.vue")
      },
      {
        path: "/detail_reward",
        name: "detail_reward",
        component: () => import("pages/Detail_reward")
      },
      {
        path: "account",
        component: () => import("pages/Account.vue")
      },
      {
        path: "profile",
        component: () => import("pages/Profile.vue")
      },
      {
        path: "password",
        component: () => import("pages/Password.vue")
      },
      {
        path: "account_settings",
        component: () => import("pages/Account_settings.vue")
      },
      {
        path: "edit",
        component: () => import("pages/Edit.vue")
      }
    ]
  },
  {
    path: "/login",
    name: "login",
    component: () => import("pages/Login")
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "*",
    component: () => import("pages/Error404.vue")
  }
];

export default routes;
