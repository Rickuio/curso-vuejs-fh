import { sleep } from "@/helpers/sleep";
import { Message } from "@/interfaces/message.interface";
import { YesNoResponse } from "@/interfaces/yes-no.interface";
import { ref } from "vue";

export const useChat = () => {
    
    
    const messages = ref<Message[]>([
        {
        id: new Date().getTime(),
        message: 'Hola1',
        itsMine: true,
        },
        {
        id: new Date().getTime() + 1,
        message: 'Hola2',
        itsMine: false,
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.clker.com%2Fcliparts%2F3%2Fa%2F4%2F2%2F13683940614895641148x48-yes-4-th.png&f=1&nofb=1&ipt=95a1a2ba47c100aed641a6733613f0926b9368c1b1dff72acbc8e2eb7a457e26",
        },
    ]);

    const getResponse = async() => {
        const url = 'https://yesno.wtf/api';
        const resp = await fetch(url);
        const data = (await resp.json()) as YesNoResponse;
        return data;
    }

    const onMessage = async(text: string) => {
        
        if (text.length === 0) return;
        
        messages.value.push({
        id: new Date().getTime(),
        itsMine: true,
        message: text,
        });

        if (!text.endsWith('?')) return;
        await sleep(1.5);
        // Evaluar si termina el signo de admiracion
        const { answer, image } = await getResponse(); 
        messages.value.push({
            id: new Date().getTime(),
            itsMine: false,
            message: answer,
            image: image
        });
    };


    return {
        // Properties
        messages,

        // Methods
        onMessage,
    }
}