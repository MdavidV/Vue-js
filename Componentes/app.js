const { createApp } = Vue;

const Table = {
    props: ['datos', 'bgColor'],
    template: `

                   
                            <table class="table table-striped " style="{background-color: bgColor}">
                            
                            <thead>
                              <tr>
                                <th>Nombre</th>
                                <th>Apellido</th>
                                <th>Teléfono</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr v-for="(objeto, objetoIndex) in datos" :key="objetoIndex">
                                <td>{{ objeto.nombre }}</td>
                                <td>{{ objeto.apellido }}</td>
                                <td>{{ objeto.telefono }}</td>
                              </tr>
                            </tbody>
                          </table>
                        `



}

createApp({
    components: {
        'table-from-vue': Table,
    },
    data() {
        return {
            arrays: [
                [
                    { nombre: 'John', apellido: 'Doe', telefono: '123456789' },
                    { nombre: 'Jane', apellido: 'Smith', telefono: '987654321' },
                    { nombre: 'Mike', apellido: 'Johnson', telefono: '456789123' }
                ],
                [
                    { nombre: 'Alice', apellido: 'Williams', telefono: '654987321' },
                    { nombre: 'Bob', apellido: 'Brown', telefono: '321789654' },
                    { nombre: 'Emma', apellido: 'Davis', telefono: '789123456' }
                ],
                [
                    { nombre: 'David', apellido: 'Jones', telefono: '147258369' },
                    { nombre: 'Olivia', apellido: 'Taylor', telefono: '369258147' },
                    { nombre: 'Liam', apellido: 'Wilson', telefono: '258369147' }
                ]
            ],
            
            color: ["#f2f2f2", "#b8b8b8", "#f2e4a"]

        }
    },
    mounted() {
        
    }
}).mount("#app")

