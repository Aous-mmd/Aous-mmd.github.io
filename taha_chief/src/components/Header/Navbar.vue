<template>
    <nav class="navbar fixed-top navbar-expand-lg navbar-light">
        <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span class="navbar-toggler-icon"></span>
        </button>
        <router-link class="navbar-brand" to="/">
            <img src="assets/images/icons/logo.jpg" alt="Taha Chief Logo" />
        </router-link>
        <!-- <div class="q-pa-md">
            <div class="q-gutter-md row items-start">
                <q-card
                    flat
                    bordered
                    v-for="type in skeletonTypes"
                    :key="type"
                    style="width: 250px"
                >
                    <q-card-section>
                        <div class="text-caption">"{{ type }}"</div>
                    </q-card-section>

                    <q-separator />

                    <q-card-section>
                        <q-skeleton :type="type" />
                    </q-card-section>
                </q-card>
            </div>
        </div> -->
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav m-auto mt-2 mt-lg-0">
                <li class="nav-item" v-for="item in items" :key="item.link">
                    <router-link class="nav-link" :to="item.link" exact>
                        <q-skeleton width="50px" square>
                            <span v-if="loaded">{{ item.title }}</span>
                        </q-skeleton>
                    </router-link>
                </li>
            </ul>
            <form
                class="search-form searchbar"
                role="search"
                id="hiddenSearchBox"
                action=""
                method="get"
            >
                <div class="input-group">
                    <input type="hidden" name="id" value="63" />
                    <input
                        type="search"
                        name="keywords"
                        class="form-control"
                        placeholder="ابحث.."
                    />
                    <div class="input-group-btn">
                        <button
                            type="submit"
                            class="btn btn-default"
                            data-toggle="searchbar"
                            data-target="#hiddenSearchBox"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-search"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
                                />
                            </svg>
                            <span class="sr-only">Submit</span>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </nav>
</template>

<script>
    export default {
        name: "Navbar",
        methods: {},
        props: ['loaded'],
        beforeCreate: function () {
            this.$store.dispatch("Test").then((res) => {
                this.items = res.data.navs;
            });
        },
        // created: function () {

        // },
        // beforeMount() {

        // }
        mounted() {
            // this.props.loaded = true;
        },
        // beforeUpdate() {
        //     }
        // updated() {

        // }
        data() {
            return {
                items: [],
            };
        },
    };
</script>