import axios from "axios";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import { useEffect, useState } from "react";

const Phones = () => {
    const [phones, setPhones] = useState([])
    useEffect(() => {
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(data => {
                const phoneData = data.data.data;
                const phoneWithFakeData = phoneData.map(phone => {
                    const obj = {
                        name: phone.phone_name,
                        price: parseInt(phone.slug.split('-')[1])

                    }
                    return obj;
                })
                setPhones(phoneWithFakeData)
            })
    }, [])
    return (
        <div>
            <h3>Phones:{phones.length}</h3>
                <BarChart width={1200} height={400} data={phones}>
                    <Bar dataKey="price" fill="#8884d8" />
                    <XAxis dataKey={'name'}></XAxis>
                    <YAxis></YAxis>
                    <Tooltip></Tooltip>
                </BarChart>
        </div>
    );
};

export default Phones;