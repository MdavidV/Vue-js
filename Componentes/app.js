const { createApp } = Vue;

const Header = {
    props: {
        
    },
    template: `
        <h1>Buenas tardes!</h1>
    
    `
}







createApp({
    components: {
        'header-component': Header
    },
    data(){
        return{
            titulo: 'pizza napolitana',
            portada: '',
            costo: 675,
            codermeals: [

            ],
        }
    }
}).mount("#app")