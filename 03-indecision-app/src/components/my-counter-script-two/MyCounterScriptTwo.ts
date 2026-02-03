import { useCounter } from '@/composables/useCounter';
import { computed, defineComponent, ref } from 'vue';

export default defineComponent({

    props: {
        valor: { type: Number, required: true }, 
    },
    setup(props) {

        const { counter, cuadrado } = useCounter(props.valor);
        
        return {
            counter: counter,
            square: cuadrado,
        }
    
    }
   
});