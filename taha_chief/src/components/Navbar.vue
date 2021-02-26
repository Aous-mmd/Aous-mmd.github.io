<template>
    <header>
        <nav
            class="navbar fixed-top navbar-expand-lg navbar-light scrolling-navbar"
        >
            <router-link class="navbar-brand" to="#">
                <img src="assets/images/icons/logo.jpg" alt="" />
            </router-link>
            <button
                class="navbar-toggler mr-auto"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse text-right" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <router-link to="/" class="nav-link">
                            الرئيسية
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/about" class="nav-link">
                            القائمة
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/about" class="nav-link">
                            الأفرع
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/about" class="nav-link">
                            حول
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/about" class="nav-link">
                            اتصل بنا
                        </router-link>
                    </li>
                </ul>
                <form class="form-inline FormInput">
                    <input
                        class="form-control mr-sm-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                    />
                </form>
            </div>
            <form class="form-inline formIcon">
                <div class="md-form my-0">
                    <input
                        class="form-control mr-sm-2"
                        type="text"
                        placeholder="Search"
                        aria-label="Search"
                    />
                </div>
            </form>
            <span class="nav-item d-none d-lg-block ml-3 search_icon">
                <vk-icon-link icon="search"></vk-icon-link>
            </span>
            <span class="nav-item d-none d-lg-block ml-5">
                <vk-offcanvas-content>
                    <a @click="push = true">
                        <vk-icon-link icon="menu"></vk-icon-link>
                    </a>
                    <vk-offcanvas mode="push" :show.sync="push">
                        <vk-offcanvas-close
                            @click="push = false"
                        ></vk-offcanvas-close>
                        <h3>Title</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                        </p>
                    </vk-offcanvas>
                </vk-offcanvas-content>
            </span>
        </nav>
    </header>
</template>

<script>
    export default {
        name: "Navbar",
        props: {
            push: false,
        },
    };
</script>