<template>
    <section class="text-center">
        <h3>Counter: {{ counter }}</h3>
        <h3>Square: {{ cuadrado }}</h3>
        <div class="ml-2">
            <button class="btn" v-on:click="minus">-1</button>
            <button class="btn" @click="plus">+1</button>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { useCounter } from '@/composables/useCounter';

interface Props {
    initialValue: number;
    value?: string;
}

const props = defineProps<Props>();

const { counter, cuadrado, plus, minus } = useCounter(props.initialValue);
    
    // import { computed, ref } from 'vue';

    // interface Props {
    //     initialValue: number;
    //     value?: string;
    // }

    // const props = defineProps<Props>();

    // const counter = ref(props.initialValue);
    // const cuadrado = computed( () => counter.value * counter.value );
    
    // const plus = () => counter.value++;
    // const minus = () => counter.value--;
</script>

<style>
h3 {
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
@reference "tailwindcss";
.btn {
    @apply p-4 bg-blue-400 rounded hover:bg-blue-600 mr-2;
}
</style>