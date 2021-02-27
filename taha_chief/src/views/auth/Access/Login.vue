<template>
    <div class="Menu"></div>
</template>

<script>
    // export default {
        // name: "Login",
        // data() {
    //         return {
    //             email: "",
    //             password: "",
    //             errorMsg: "",
    //         };
    //     },
    //     methods: {
    //         login: function () {
    //             this.preloader(true);
    //             let email = this.email.toLowerCase();
    //             let password = this.password;
    //             this.$store
    //                 .dispatch("login", {
    //                     email,
    //                     password,
    //                 })
    //                 .then((resp) => {
    //                     this.preloader(false);
    //                     this.showAlert(resp.data[0].msg);
    //                     this.$router.push({
    //                         name: "Home",
    //                     });
    //                 })
    //                 .catch((err) => {
    //                     this.preloader(false);
    //                     this.errorMsg = err.data;
    //                     this.showErrors(this.errorMsg);
    //                     if (err.data[0].id) {
    //                         this.$store.commit("confirmationId", err.data[0].id);
    //                         this.$router.push({
    //                             name: "Confirm",
    //                         });
    //                     }
    //                 });
    //         },
    //     },
    // };
</script>
