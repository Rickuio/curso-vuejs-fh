
const { createApp, ref } = Vue;

const app = createApp({
    // template: `
    //     <h2>Hola, {{message}}</h2>
    //     <h3>{{author}}</h3>
    //     <p>Desde app.js</p>
    // `,
    setup() {
        console.log('Iniciando setup...');
        const message = ref("I'm Batman!");
        const author = ref("Bruce Wayme")

        const changeQuote = () => {
            message.value = 'Soy Gohan';
            author.value = 'Se acabo';
        }

        setTimeout(() => {
            message.value = 'Soy Goku';
            author.value = 'Action!!';
        }, 10000);

        return {
            message, author, changeQuote
        }
    }
});


app.mount('#myApp');
