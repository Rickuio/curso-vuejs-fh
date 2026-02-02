import { ref, computed } from "vue";

export const useCounter = () => {
    
    const counter = ref(props.initialValue);
    const cuadrado = computed( () => counter.value * counter.value );
    
    return {
        counter,
        cuadrado,
    }
}