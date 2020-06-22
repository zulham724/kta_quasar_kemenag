/* Module1.store.js */
import axios from "axios";
// State object
const state = {
    notifications: [{
        id: 1,
        senderId: 1,
        postId: 2974,
        text: "Mengomentari postingan anda: Assalamualaikum",
        created_at: "02-02-2020"
    }],
    key: "key=AAAAcdW98E8:APA91bHIIjcKN9ot-KeFyOEoYKU8jRWJpejav4e0ev-4TQhR_QXmR2zxUhyd08ysUxiVdJcWRS3T_0-1qIxUUlj3qhlhJW0jnJc9l_xJ5dJVfVIA3v8cALeAQ-bfYHcoDe3Ok32gxHR4"
};

// Mutations
const mutations = {
    add(state, payload) {
        state.notifications.push({
            id: 2,
            senderId: 1,
            postId: 2974,
            text: "Assalamualaikum",
            created_at: "02-02-2020"
        });
    }
};

// Actions
const actions = {
    init({ commit, dispatch }) {
        FCMPlugin.getToken(function(token) {
            console.log(token);
            dispatch("subscribeEvent");
            dispatch("subscribePost");
            dispatch('subscribeBook');
            dispatch("subscribeUserPostComment");
            dispatch("subscribeUserPostLike");
            dispatch("listen");
        });
    },
    subscribeEvent() {
        FCMPlugin.subscribeToTopic("events");
    },
    subscribePost() {
        FCMPlugin.subscribeToTopic("posts");
    },
    subscribeBook() {
        FCMPlugin.subscribeToTopic("books");
    },
    subscribeUserPostComment() {
        console.groupCollapsed("subscribe ke komentar post milik user ini");
        this.state.Auth.auth.posts.forEach(post => {
            const topic = `user_${this.state.Auth.auth.id}_post_${post.id}_comment`;
            FCMPlugin.subscribeToTopic(topic);
            console.log("listen to notif channel ", topic);
        });
        console.groupEnd();
    },
    subscribeUserPostLike() {
        console.groupCollapsed(
            "subscribe ke post-post yang di like milik user ini"
        );
        this.state.Auth.auth.posts.forEach(post => {
            const topic = `user_${this.state.Auth.auth.id}_post_${post.id}_like`;
            FCMPlugin.subscribeToTopic(topic);
            console.log("listen to notif channel ", topic);
        });
        console.groupEnd();
    },
    listen() {
        console.log("listen notification...");
        FCMPlugin.onNotification(function(data) {
            console.log(JSON.stringify(data));
        });
    },
    send({ commit }, payload) {
        return new Promise((resolve, reject) => {
            const access = {
                notification: {
                    title: payload.title,
                    body: payload.body,
                    // sound: "default",
                    click_action: "FCM_PLUGIN_ACTIVITY",
                    icon: "fcm_push_icon"
                },
                data: {
                    ...payload.params
                },
                to: payload.to,
                priority: "high",
                restricted_package_name: ""
            };
            const config = {
                Authorization: this.state.Notif.key
            };
            console.log(access, payload)
            axios
                .post(`https://fcm.googleapis.com/fcm/send`, access, {
                    headers: config
                })
                .then(res => {
                    resolve(res);
                })
                .catch(err => {
                    reject(err);
                });
        });
    },
};

// Getter functions
const getters = {};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
