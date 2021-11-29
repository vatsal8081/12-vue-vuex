<template>
  <!-- 3 -->
  <!-- just like router because we register that package in use method we have $router object automatically avalable in allover the app also in store we register it with use method we will get $store property in every place of our app which will contain all things relate to our store  -->

  <p> counter {{ $store.state.basicCount }} </p>
  <!-- we can get state property in $store object to get state data in any place of our app without getting props or inject of anything else just directly-->

  <button @click="increseCount">  Incress </button>
</template>

<script>
export default {

    methods: {
        // 4
        // now we can also change any state of our store by just updating it like this 
        increseCount(){
            this.$store.state.basicCount++
        }

        // now hear you will not see much advantage of state because we are using and altering state property in just one component
        // but imagine you are passing this count from hear to 4 deep component and showing ther also on incress btn click on that component you are emiting some event which travel through all 4 components come hear and you chnage it hear just imagine how huch work it will be
        // and with state you just have to wright showing logic in any deep component where you want to show it and altering logic in any other component no need of props, emits, probide, inject also no need to involve inbetween component unnessacery and thats the beauty of state. 
    }

}
</script>

<style>

</style>