import { Helmet } from 'react-helmet';
import React from 'react';
import './Search.css'

function Search() {
    return <div className='searchDiv'>
        <div>
            <Helmet><title>Swiggy | Search</title></Helmet>
        </div>

        <input type="text" id='cityInput' placeholder='Search city' />
    </div>;
}

export default Search;
