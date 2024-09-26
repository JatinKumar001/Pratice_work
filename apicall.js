import express from 'express'
import cors from 'cors'
import axios from 'axios'

const app = express()


app.use(cors())
app.use(express.json())


const option = {
    method: 'GET',
    url: 'https://dummyjson.com/users/search?q=John'
};

async function fetchdata(){
    try{
        const response = await axios.request(option)
        const result = response.data

        console.log(result);
    }
    catch (error){
        console.log('error');
    }
}

fetchdata();