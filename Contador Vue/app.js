
const { createApp } = Vue


createApp({
    data() {
        return{
            counter: 0,
        }
    },
    methods: {
        add() {
            this.counter++;
        },
        minus() {
            this.counter--;
        }
    }
}).mount("#app")