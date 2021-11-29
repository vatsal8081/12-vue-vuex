<template>
  <!-- 5 -->
  <!-- as you can see in basic.vue we are getting and updating state of our staore but the way we do it there will work but not ideal -->
  <!-- as we discuss earlyear that we can manage and use central state with vuex and vuex has concrid stracture the way we use and alter our data. because we are allowed to use and update  data of our store from any place of our app it will be very error prone because any time we can update state from any place of our app and we will not able to find from which place we did it in our app-->
  <!-- it will be night mare to find that and also imagine if we want to update our state which was counter + 1 in every place to counter + 2 we have to do it in all places where we update state in entire app  -->

  <!-- so by rule each and  every property of state should update by one central function and also get by one central function so if we have to chnage logic in the way we update or get our state we just have to do it in one place and all othere parts of our app can use that functions -->

  <!-- to achive this we have mutation in our vue store which is just object containing methods and each method is responsible to change one property of our store  -->

  <!-- 11 -->
  <!-- we can get all our getters in store getters object and we don't have to call it just like computed properties it will call by vuex -->
  <p> count: {{ $store.getters.getBasicCount }} </p>

  <p> count with using other Getter: {{ $store.getters.getBasicCountWithString }} </p>
    <button @click="incressCount"> Incress </button>
  <button @click="incressCountByParam"> Incress 3 </button>
</template>

<script>
export default {

    methods: {
        incressCount(){
            // 7
            this.$store.commit('setBasicCount')
            // every store object has commit method which will be use to fire a mutation we wright in our store we have to pass just mutation name hear as string and vuex will fire it for us
        },
        incressCountByParam(){
            // 9
            this.$store.commit('setBasicCountByPayload', 3)
            // we can pass payload as seccond argument in our commit method like this
            // keep in mind we are aloud to pass just one argument as payload in commit method so if we pass 3 argument as other payload then it will be undefine in mutation function so if we want to pass multiple data we should wrap it in object and then pas as single argument in commit as seccond method.
        }
    }

}
</script>

<style>

</style>