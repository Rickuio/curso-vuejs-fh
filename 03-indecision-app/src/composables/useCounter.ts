import { ref, computed } from "vue";

// variable con estado global
// const counter = ref(10);

export const useCounter = (initialValue: number) => {
    
    //const counter = ref(props.initialValue);
    const counter = ref(initialValue);

    const cuadrado = computed( () => counter.value * counter.value );
    const plus = () => counter.value++;
    const minus = () => counter.value--;
    return {
        counter,
        cuadrado,
        plus,
        minus,
    }
}