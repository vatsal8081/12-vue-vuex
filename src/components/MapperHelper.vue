<template>
  <!-- 17 -->
  <!-- when we are worning with multiple getters and actions it is not muct redable that we create computed properties and methods by ourself and then use $store to get getters and actions in it so to solve that and using getters and actions as ease vuex provides mapper functions which get getter or actions names as param  and make such computed and actions for us-->

  <p> count: {{ getBasicCount }} </p>
  <button @click="sendBasicCount(4)"> Incress </button>
  
</template>

<script>
import { mapGetters, mapActions, mapState, mapMutations } from 'vuex';

export default {

    created(){
        console.log('state Map', mapState(['basicCount']));
        console.log('mitation Map', mapMutations(['setBasicCount']));
        console.log('getter Map', mapGetters(['getBasicCount']));
        console.log('action Map', mapActions(['sendBasicCount']));
    },

    // 18 
    // we just have to import mapGetters from vuex and use it in computed properties because getters are just another kind of computed property only 
    computed: {

        // getBasicCount() {
        //     return this.$store.getters.getBasicCount
        // },
        // insted of doing this for every getters use bellow

        ...mapGetters(['getBasicCount']),
        // ...mapGetters({basicCount: 'getBasicCount'})

        // mapGetter takes array or object as argument where in array we define names of getters we want to use in this component and mapGetter will provide it to us in our computed property
        // when we pass object we have to pass key value pair where key will be name as we want to use any getter in this compoent and value will be actual getter name we define in store.
        // by object way we are able to give new name to use in this component to specific getter where in array we have to use same name as we define getter in our store hear as well 
        // a mapGetters will take names of getter functions as argument and will return array of object where each index will be one getter function so because it's array of object we can spread it hear in computed property and we will get all those getters as computed properties  

    },

    methods: {

        // just like map getter we also have mapActions which is totally same as mapGetter only diffrence is it use to get diffrent actions and because actions is just another type of methods we use mapActions in method object

        // sendBasicCount(){
        //     this.$state.dispatch('sendBasicCount')
        // }
        // insted of doing this for every actions do bellow

        ...mapActions(['sendBasicCount'])

        // ...mapActions({sendBasicCountAction :'sendBasicCount'})

    }

    // just like mapGetters and mapActions we also have mapState and mapMutation as well but in our component we 99.99 % just use mapGetters to get state value by getter and mapAction to then commit mutation and set value so we not really use mapState and mapMutation in component but still if you need to use them in some very special cases then you can define mapState in computed and mapMutation in methods.

}
</script>

<style>

</style>