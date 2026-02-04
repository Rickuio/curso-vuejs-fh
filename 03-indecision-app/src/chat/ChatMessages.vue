<template>
    <div class="flex-1 overflow-y-auto p-4">
      <div class="flex flex-col space-y-2">
        <!-- Messages go here -->
        <!-- <ChatBubble :its-mine="true" :message="'Hola Mundo'" />
        <ChatBubble 
          :its-mine="false" 
          :message="'Contestando'"
          image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.clker.com%2Fcliparts%2F3%2Fa%2F4%2F2%2F13683940614895641148x48-yes-4-th.png&f=1&nofb=1&ipt=95a1a2ba47c100aed641a6733613f0926b9368c1b1dff72acbc8e2eb7a457e26" />
       -->
          <ChatBubble 
            v-for="m in messages" 
            :key="m.id" 
            v-bind="m"
          />
        </div>
    </div>
</template>

<script setup lang="ts">

  import { Message } from '@/interfaces/message.interface';
  import ChatBubble from './ChatBubble.vue';

  interface Props {
    messages: Message[];
  }

  defineProps<Props>();

</script>
