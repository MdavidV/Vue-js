const { createApp } = Vue;

const Table = {
    props: {
        bg_color: String,
        products: Array,

    },
    template: `

                        <div :class="bg_color">
                            <table class="table table-dark table-striped">
                                <thead>
                                    <tr>
                                        <th>Product</th>
                                        <th>Name</th>
                                        <th>Price </th>
                                    </tr>
                                </thead>
                                <tbody>
                                <tr v-for="product of products" >
                                    <td><img :src="product.img" width="150" :alt="product.tittle"></td>
                                    <td>{{ product.tittle }}</td>
                                    <td>  {{ product.price }} $</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>   
    
    `
}

createApp({
    components: {
        'table-from-vue': Table,
    },
    data() {
        return {
            productsArray: [
                {
                    id: 1,
                    img:'./elrayo.jpg',
                    tittle:'The coolest shirt you can buy!!! ',
                    price: 15
                },
                {
                    id: 2,
                    img:'./elrayo.jpg',
                    tittle:'The coolest shirt you can buy!!! ',
                    price: 12.99
                },
                {
                    id: 3,
                    img:'./elrayo.jpg',
                    tittle:'The coolest shirt you can buy!!! ',
                    price: 18
                },
                {
                    id: 4,
                    img:'./elrayo.jpg',
                    tittle:'The coolest shirt you can buy!!! ',
                    price: 10
                },
                {
                    id: 5,
                    img:'./elrayo.jpg',
                    tittle:'The coolest shirt you can buy!!! ',
                    price: 23
                },
                {
                    id: 6,
                    img:'./elrayo.jpg',
                    tittle:'The coolest shirt you can buy!!! ',
                    price: 17.75
                }
            ],
        }
    }
}).mount("#app")