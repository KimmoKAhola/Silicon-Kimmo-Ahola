import React, {useState, useEffect} from 'react'
import Card from "./Card.jsx";

const Grid = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://kyhnet23-assignment.azurewebsites.net/api/news');
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                console.error('Error fetching data', error);
            }
        };

        fetchData();
    }, []);


    return (
        <div>
            {data.map((item) => (
                <Card key={item.id} data={item}/>
            ))}
        </div>
    )
}
export default Grid
