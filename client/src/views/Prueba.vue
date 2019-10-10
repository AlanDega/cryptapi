<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-8">
                <div class="example">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Precio (USD)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="moneda in monedasUSD " :key="moneda.id">
                                <td>{{ moneda.name }}</td>
                                <td>{{ moneda.price_usd }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            
        </div>
        <div class="row">
            <div class="col-md-8">
                <div class="example">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Precio (MXN ) {{ monedasMXN}}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <!-- <tr v-for="moneda in monedasUSD " :key="moneda.id">
                                <td>{{ moneda.name }}</td>
                                <td>{{ moneda.price_usd }}</td>
                            </tr> -->
                        </tbody>
                    </table>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>

    import axios from "axios";
    const options = {
  headers: {'X-Custom-Header': 'value'}
};

    export default {
        name: 'app',
        data() {
            return {
                monedasUSD: [],
                monedasMXN: "",
                
            }
        },
        created(){
 
            axios({ method: "GET", "url": "https://api.bitso.com/v3/available_books/" })
            .then(result => {
        this.monedasMXN = result.data.payload[0].maximum_price;
        console.log(this.monedasMXN)
    }, error => {
        console.error(error);
    });
        },
        // porque el conflicto?
        mounted() {
            axios({ method: "GET", "url": "https://api.coinmarketcap.com/v1/ticker/?limit=3" })
            .then(result => {
        this.monedasUSD = result.data;
        console.log(this.monedasUSD)
          
    }, error => {
        console.error(error);
    })
    
        },
        methods: {
             
    }
}
        
    

  
</script>

<style >

</style>