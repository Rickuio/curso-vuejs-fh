import { computed, defineComponent, ref } from 'vue';


export default defineComponent({

    props: {
        valor: { type: Number, required: true }, 
    },
    setup(props) {
        
        const counter = ref(props.valor);
        const cuadrado = computed(() => counter.value * counter.value);
        
        return {
            counter: counter,
            square: cuadrado,
        }
    
    }
   
});