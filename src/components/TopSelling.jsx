import React, { useEffect, useState } from 'react'
import CardFilter from './CardFilter'
import TopSellingItem from './TopSellingItem'

import './css/topSelling.css'

function TopSelling() {
    const [items, setItems] = useState([])
    const [filter, setFilter] = useState('Today')
    const handleFilterChange = filter => {
        setFilter(filter)
    }

    const fetchData = () => {
        fetch('http://localhost:4000/topselling')
            .then(res => res.json())
            .then(data => {
                setItems(data);
                console.log(data)
            })
            .catch(e => console.log(e.message));
    };

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div className='card recent-sales overflow-auto'>
            <CardFilter filterChange={handleFilterChange} />

            <div className="card-body">
                <h5 className="card-title">
                    Top Selling <span>| {filter}</span>
                </h5>
                <table className="table table-borderless">
                    <thead className='table-light'>
                        <tr>
                            <th scope='col'>Preview</th>
                            <th scope='col'>Product</th>
                            <th scope='col'>Price</th>
                            <th scope='col'>Sold</th>
                            <th scope='col'>Revenue</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items && items.length > 0 && 
                            items.map(item => <TopSellingItem key={item._id} item={item} />)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TopSelling
