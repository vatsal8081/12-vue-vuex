<template>
  <!-- 13 -->
  <!-- now we improve the way we get and change state in our app by getters and muattions but imagin if we want to do ascnchronous call then base on response we want to update our state what we will do? you can say that we can call asynchronous code in muattions but the thing is vuex will not allow asynchronous code in mutation by the thumb rule mutation alwase must be synchronous there is no any way to do asynchronous code in mutations -->
  <!-- because if we do asynchronous code in mutation then our data will change in future and it is possible that other musttion or getter relay on that state so they will get old value so our state will collaps so we never ever use asynchronous code in muattions -->
  <!-- for doing asynchronous code vuex provide actions which ment to be work with asynchronous code and on resolve of promis we can fire muattion derectly from the action and that will update our state -->
  <!-- also it is very good practic to never fire mutation directlly from component we should fire action from component which will commit mutation in it. even if we don't do asynchronous code we just want to fire mutation we should fire action from component and that action should commit mutation because this way we will enshoure that no other component directlly chnage state by firing muattion and also we will have chance to add asynchronous code in future if we want in action. if we directlly fire mutation and want to add asynchronous code in future we have to change it in every place in our app but by using action we just need to add code in action and that will be reflect in all places of our app-->

  <p> count: {{ $store.getters.getBasicCount }} </p>
  <button @click="increment"> Incress </button>
</template>

<script>
export default {

    methods: {
        // 15
        increment() {
            this.$store.dispatch('sendBasicCount', 10)
        }
        // now just like commit in muattion we have dispatch in actions to fire a action it also need action name in string and payload in any as seccond argument
    }

}
</script>

<style>

</style>