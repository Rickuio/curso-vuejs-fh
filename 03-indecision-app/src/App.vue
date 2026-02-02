<template>
    <h1 class="text-3xl font-bold text-center mt-2">Mi primera app en Vue</h1>
    <MyCounter :initialValue=8 />
    <br><hr>
    <MyCounter :initial-value="5" />
    <br><hr>
    <MyCounterScript :valor="2" />
    <br><hr>
    <MyCounterScript2 :valor="3" />
</template>

<script lang="ts" setup>
    import MyCounter from './components/MyCounter.vue';
    import MyCounterScript from './components/MyCounterScript.vue';
    import MyCounterScript2 from './components/my-counter-script-two/MyCounterScriptTwo.vue';
</script>