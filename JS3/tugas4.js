// const axios = require('axios').default //default javascript tanpa modul
import axios from 'axios'

async function fetch () {

    const nama = await axios.get('https://jsonplaceholder.typicode.com/users')
    nama.data.map((item)=>{
            console.log(item.name)}
        )

}

fetch()