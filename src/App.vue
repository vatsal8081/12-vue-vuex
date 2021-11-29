<template>
  <Basic />

  <hr>

  <BasicTwo />

  <hr>
  <BasicThree />

  <hr>
  <MapperHelper />

  <hr> 
  <Modules />

</template>

<script>

import Basic from './components/Basic.vue';
import BasicTwo from './components/basicTwo.vue';
import BasicThree from './components/BasicThree.vue';
import MapperHelper from './components/MapperHelper.vue';
import Modules from './components/Modules.vue';

export default {
  components: {
    Basic,
    BasicTwo,
    BasicThree,
    MapperHelper,
    Modules
  },
};
</script>

