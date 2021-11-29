import { createApp } from 'vue';

// 1
// after installing vuex package we have to import it and create configration to use it
import { createStore } from 'vuex';

import App from './App.vue';



// 20
// create new module as just like we create object just keep in mind use same key names as we do in main module 
const userModule = {

    // 22
    // keep in mind that no matter how many sub mudules we will create from our app at end all will be merged in on single store object so did you imagine what will happen if we have same named state or getter, mutation or action in diffrent modules when it will merge it won't work beacuse at the end state is notthing but just a object of js where we are not alloued to set multiple keys with same name
    // to avoid that we have one property in submodule calles namespaced which we have to give as true in every sub module by this we will be able to use same name for state, getters, mutstions, actions etc and vuex will handle it for use
    namespaced: true,

    state() {
        return {
            isLogedin: false
        };
    },
    getters: {
        getIsLogedIn(state){
            return state.isLogedin
        },

        // hear we are defining getArrItems as arrow function which will return another arrow function and that function will return result of arr.find
        // as you know if we don't use {} in arrow function it will return what we define after => so we are lavraging it hear
        // we can use state in first param beacuse it's actual getter function which will get state as first argument and params we pass in getter as seccond function because 
        getArrItem: (state) => (item) => {
            console.log(state);
            const arr = [1, 2, 3]
            return arr.find(el => el === item)
        }
        // its just like we do 
        // getArrItem(state, item){
        //     return function (item) {
        //         return arr.find(el => el === item)
        //     }
        // }   
    },
    
    mutations: {
        setIsLogedIn(state, isLogedin){
            state.isLogedin = isLogedin
        }
    },
    actions: {
        chnageIsLogedIn({commit, getters}) {
            commit('setIsLogedIn', !getters.getIsLogedIn)
        }
    }
}


// 2
// like we do in createApp and createRouter we also have createStore method which use to create vuex store and like other we have to pass configration of our store in it
// you will only have one store per app and that store has one property cald state which is just method returning object like a data. you can have multiple state orbjects which we will cover later.
const store = createStore({

    // 21
    // we can now register module by giving it to mudules object where key name will be identifire we will use in entire app for getting all related things of that module and value will be object contaning sub state configrations
    modules: {
        userModule
    },

    // now this state method will have all data which you use application wide
    state() {
        return {
            basicCount: 0
        };
    },
    // 10
    getters: {
        // as we discuss before we alwase should use central way to set and get our state so we can create getters key which will have functions whic will return our state 
        // advantage of this will be if we want to process state data before giving it to component we can do it hear and also if we want to change that logic we can change hear in one place all other will get it 
        getBasicCount(state){
            // hear all getters will also get state object as first argument to use it
            return state.basicCount
        },
        
        // 12
        getBasicCountWithString(state, getters){
            return getters.getBasicCount + ' Count'
        }
        // many times it also happens that we want to use other getters in our getter to use predefine funcnality of data return by that getter for that vuex will provide another 2 argument in all getter functions which is getters we define in our store
    },
    // 6
    mutations: {
        // we can define musttions in mutations key and we will create general function which will mutate our state 
        // every mutation will get state property automatically as it's first argument by vuex so we can access and play with our state. 
        setBasicCount(state){
            state.basicCount++
            // now because of this central logic for changing state in future if we decide to increment basicCount by 2 we just have to change it hear and all other component will stay same
        },

        // 8
        setBasicCountByPayload(state, incressBy){
            state.basicCount += incressBy
        }
        // many times it also happen that we want to pass some data as param to mutation and base on that we want to update our state. we can do it by passing seccond argument to mutation which will be the extra data we want to pass in mutation most offen it cald payload and that payload can be any type of valid param which we can pass to function in js
    },

    // 14
    actions: {
        // just like other properties in vuex we have actions where we can define our actions and vuex just like other pass one default arfument as context which has many things in it and we can pass payload as 2 argument
        sendBasicCount(context, incrementBy) {
            // api call simulation
            setTimeout(async () => await context.commit('setBasicCountByPayload', incrementBy) ,5000)
            
            // context has commit method which we was using in compoent we can use it hear to commit mutation
        }
        // 16 
        // a context object will have many things inside it we have commit function to commit mustations, we have getters which wil use to access our getters we also have state if we directly want to access state but uhen directly accessing state we should only read it not update it
        // along with this we also have dispactc method if we want to fire other actions from this action after success or failour of the current action or we want to fire multiple actions in one time
    }
})



const app = createApp(App);

// just like router and other third party packages we can register store with use methos 
app.use(store);

app.mount('#app');
