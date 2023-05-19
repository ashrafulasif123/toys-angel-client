import React from 'react';

const AllToy = ({ allToy }) => {
    const { name, picture, price, quantity, rating, sellerEmail, sellerName, subCategory, _id} = allToy
    return (
        <tr>
            <td>Cy Ganderton</td>
            <td>Quality Control Specialist</td>
            <td>Littel, Schaden and Vandervort</td>
            <td>Canada</td>
            <td>12/16/2020</td>
            <td><button className="btn btn-active btn-ghost btn-xs">View Details</button></td>
        </tr>
    );
};

export default AllToy;