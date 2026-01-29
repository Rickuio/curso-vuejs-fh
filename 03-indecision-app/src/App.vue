<template>
    <h1>Mi primera app en Vue</h1>
    <MyCounter :initialValue=8 />
    <br><hr>
    <MyCounter :initial-value="5" />
    <br><hr>
    <MyCounterScript :valor="2" />
</template>

<script lang="ts" setup>
    import MyCounter from './components/MyCounter.vue';
    import MyCounterScript from './components/MyCounterScript.vue';
</script>