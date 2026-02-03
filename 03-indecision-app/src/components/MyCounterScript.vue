<template>
    <section>
        <h3>CounterScript: {{ counter }}</h3>
        <h3>SquareScript: {{ square }}</h3>
        <div class="ml-2">
            <button class="p-3 bg-green-400 mr-2 rounded-sm" v-on:click="counter--">-1</button>
            <button class="p-3 bg-green-400 mr-2 rounded-2xl" @click="counter++">+1</button>
        </div>
    </section>
</template>

<script lang="ts">
import { useCounter } from '@/composables/useCounter';
import { computed, defineComponent, ref } from 'vue';


export default defineComponent({

    props: {
        valor: { type: Number, required: true }, 
    },
    setup(props) {
        const { counter, cuadrado } = useCounter(props.valor);
        return {
            counter,
            square: cuadrado
        }
    }
   
});

</script>

<style scoped>
h3 {
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
</style>