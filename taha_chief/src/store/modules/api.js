import axios from "axios";

const state = {
    status: "",
    token: localStorage.getItem("token") || "",
    user: {},
    id: null,
    success_msg: null,
    name: localStorage.getItem("name") || "",
    user_type: localStorage.getItem("user_type") || "",
    image_url: localStorage.getItem("image_url") || "",
};

const mutations = {
    // auth_request(state) {
    //     state.status = "loading";
    // },
    // auth_success(state, {
    //     token,
    //     email,
    //     name,
    //     user_type,
    //     image_url
    // }) {
    //     state.status = "success";
    //     state.token = token;
    //     state.email = email;
    //     state.user_type = user_type;
    //     state.name = name;
    //     state.image_url = image_url;
    // },
    // auth_error(state) {
    //     state.status = "error";
    //     state.token = "";
    //     localStorage.clear();
    // },
    // check(state, token) {
    //     state.status = "";
    //     state.token = token;
    // },
    // logout(state) {
    //     state.status = "";
    //     state.token = "";
    //     localStorage.clear();
    // },
    // confirmationId(state, id) {
    //     state.id = id;
    // }
};
const actions = {
    Test() {
        return new Promise((resolve, reject) => {
            axios({
                    url: "https://my-json-server.typicode.com/Aous-mmd/demo/db",
                    method: "GET"
                })
                .then(resp => {
                    resolve(resp);
                })
                // .catch(err => {
                //     commit("auth_error");
                //     reject(err.response);
                // });
        });
    },
    // login({
    //     commit
    // }, user) {
    //     return new Promise((resolve, reject) => {
    //         commit("auth_request");
    //         axios({
    //                 url: "api/login",
    //                 data: user,
    //                 method: "POST"
    //             })
    //             .then(resp => {
    //                 const token = resp.data[0].token;
    //                 const name = resp.data[0].name;
    //                 const email = resp.data[0].email;
    //                 const user_type = resp.data[0].user_type;
    //                 const image_url = resp.data[0].image_url;
    //                 this.state.authentication.success_msg = resp.data[0].msg;
    //                 localStorage.setItem("token", token);
    //                 localStorage.setItem("name", name);
    //                 localStorage.setItem("user_type", user_type);
    //                 localStorage.setItem("image_url", image_url);
    //                 axios.defaults.headers.common["Authorization"] = token;
    //                 commit("auth_success", {
    //                     token,
    //                     email,
    //                     name,
    //                     user_type,
    //                     image_url
    //                 });
    //                 resolve(resp);
    //             })
    //             .catch(err => {
    //                 commit("auth_error");
    //                 reject(err.response);
    //             });
    //     });
    // },
    // register({
    //     commit
    // }, user) {
    //     return new Promise((resolve, reject) => {
    //         axios({
    //                 url: "/api/register",
    //                 data: user,
    //                 method: "POST"
    //             })
    //             .then(resp => {
    //                 this.state.authentication.success_msg = resp.data[0].msg;
    //                 this.state.authentication.id = resp.data[0].id;
    //                 resolve(resp);
    //             })
    //             .catch(err => {
    //                 reject(err.response);
    //             });
    //     });
    // },
    // logout({
    //     commit
    // }) {
    //     return new Promise((resolve, reject) => {
    //         commit("logout");
    //         delete axios.defaults.headers.common["Authorization"];
    //         resolve();
    //     });
    // },
    // confirm({
    //     commit
    // }, user) {
    //     return new Promise((resolve, reject) => {
    //         axios({
    //                 url: "api/active",
    //                 data: user,
    //                 method: "POST"
    //             })
    //             .then(resp => {
    //                 this.state.authentication.success_msg = resp.data[0].msg;
    //                 this.state.authentication.id = null;
    //                 resolve(resp);
    //             })
    //             .catch(err => {
    //                 commit("logout");
    //                 delete axios.defaults.headers.common["Authorization"];
    //                 reject(err.response);
    //             });
    //     });
    // },
    // check({ commit }) {
    //     return new Promise((resolve, reject) => {
    //         axios({
    //             url: "/api/checkUser",
    //             headers: {
    //                 Authorization: `Bearer ${localStorage.getItem("token")}`
    //             },
    //             method: "GET"
    //         })
    //             .then(resp => {
    //                 this.state.authentication.success_msg = resp.data[0].msg;
    //                 this.state.authentication.image_url = resp.data[0].image_url;
    //                 resolve(resp);
    //             })
    //             .catch(err => {
    //                 commit("logout");
    //                 delete axios.defaults.headers.common["Authorization"];
    //                 reject(err.response);
    //             });
    //     });
    // },
    // sendPassMail({
    //     commit
    // }, user) {
    //     return new Promise((resolve, reject) => {
    //         axios({
    //                 url: "api/forgetpass",
    //                 data: user,
    //                 method: "POST"
    //             })
    //             .then(resp => {
    //                 resolve(resp);
    //             })
    //             .catch(err => {
    //                 reject(err.response);
    //             });
    //     });
    // },
    // reConfirm({
    //     commit
    // }, user) {
    //     return new Promise((resolve, reject) => {
    //         axios({
    //                 url: "api/confirmCode",
    //                 data: user,
    //                 method: "POST"
    //             })
    //             .then(resp => {
    //                 resolve(resp);
    //             })
    //             .catch(err => {
    //                 reject(err.response);
    //             });
    //     });
    // },
    // resetPassword({
    //     commit
    // }, user) {
    //     return new Promise((resolve, reject) => {
    //         axios({
    //                 url: "api/updatePassword",
    //                 data: user,
    //                 method: "POST"
    //             })
    //             .then(resp => {
    //                 resolve(resp);
    //             })
    //             .catch(err => {
    //                 reject(err.response);
    //             });
    //     });
    // }
};
const getters = {
    isLoggedIn: state => !!state.token,
    successMsg: state => state.success_msg,
    authStatus: state => state.status,
    UserName: state => state.name,
    ImageUrl: state => state.image_url,
    UserType: state => state.user_type
};

export default {
    state,
    getters,
    actions,
    mutations
};