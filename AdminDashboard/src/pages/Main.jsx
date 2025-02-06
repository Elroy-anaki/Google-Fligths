import React from 'react'
import Logo from '../components/Logo'
import { } from "@mui/icons-material"
import axios from 'axios'

function Main() {

    return (
        <div className='bg-zinc-800 min-h-[100vh]'>
            <Logo />

            <h1 onClick={async () => {
                const options = {
                    method: 'GET',
                    url: 'https://sky-scrapper.p.rapidapi.com/api/v1/getLocale',
                    headers: {
                        'x-rapidapi-key': '6e50357e2amsheac1ba4173ccbb2p11c5e9jsn4288af894110',
                        'x-rapidapi-host': 'sky-scrapper.p.rapidapi.com'
                    }
                };

                try {
                    const response = await axios.request(options);
                    console.log(response.data);
                } catch (error) {
                    console.error(error);
                }
            }} className='text-6xl text-white text-center'>Fligths</h1>

        </div>
    )
}

export default Main
