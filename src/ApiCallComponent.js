import { useEffect, useState } from "react";
import axios from "axios";
import useSWR from "swr";

const fetcher = () => fetch('https://jsonplaceholder.typicode.com/todos/1').then((r) => r.json());


function ApiCallComponent() {

    //const [data, setData] = useState(null)
    const { data } = useSWR('api-data', fetcher, { suspense: true })

    // const callApi = async() => {
    //     const apiData = await axios.get('https://jsonplaceholder.typicode.com/todos/1', {suspence: true});
    //     //const jsonData = await apiData.json();
    //     setData(apiData.data)
    //     console.log(apiData);
    // }

    // useEffect(() => {
    //     callApi();
    // }, [])

    return ( <div>
        {data !== null && data.title}
        {/* <button onClick={callApi} >Refetch</button> */}
    </div> );
}

export default ApiCallComponent;