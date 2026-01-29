<template>
    <section>
        <h3>Counter: {{ counter }}</h3>
        <h3>Square: {{ square }}</h3>
        <div>
            <button v-on:click="counter--">-1</button>
            <button @click="counter++">+1</button>
        </div>
    </section>
</template>

<script lang="ts" src="./MyCounterScriptTwo"></script>

<style scoped>
    h3 {
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    }
</style>