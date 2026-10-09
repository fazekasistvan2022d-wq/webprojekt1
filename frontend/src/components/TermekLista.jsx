import {useState, useEffect} from 'react'
import api from '../api/axoisInstance'
import TermekKartya from './TermekKartya'
export default function TermekLista() {
    const [termekek, setTermekek] = useState([])

    useEffect(()=>{
            const fetchData = async () => {
                try{
                    const response = await api.get('/termekek')
                    setTermekek(response.data)
                    }
                    catch(error){
                        console.error('Hiba a termékek lekérésekor:', error)
                    }
                };
                    fetchData();
                }, [])
    return(
        <div>
            <h2>Termékek</h2>
            <ul>
                {termekek.map((termek) =>(<TermekKartya termek={termek} />))}
            </ul>
        </div>
    )
}