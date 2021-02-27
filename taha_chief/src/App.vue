<template>
    <div id="app">
        <header>
            <Navbar />
            <transition>
                <router-view />
            </transition>
        </header>
    </div>
</template>


<script>

import Navbar from "./components/Header/Navbar";

export default {
  components: {
    Navbar
  }  
}
</script>



