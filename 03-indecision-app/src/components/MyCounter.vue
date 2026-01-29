<template>
    <section>
        <h3>Counter: {{ counter }}</h3>
        <h3>Square: {{ cuadrado }}</h3>
        <div>
            <button class="p-5 bg-blue-400 rounded hover:bg-blue-600 mr-2" v-on:click="minus">-1</button>
            <button class="p-5 bg-blue-400 rounded" @click="plus">+1</button>
        </div>
    </section>
</template>

<script lang="ts" setup>
    import { computed, ref } from 'vue';

    interface Props {
        initialValue: number;
        value?: string;
    }

    const props = defineProps<Props>();

    const counter = ref(props.initialValue);
    const cuadrado = computed( () => counter.value * counter.value );
    
    const plus = () => counter.value++;
    const minus = () => counter.value--;
</script>

<style scoped>
h3 {
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
</style>