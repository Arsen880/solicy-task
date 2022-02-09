import React from 'react';
import './Sidebar.css'

const Sidebar = () => {
    return (
        <div className='sidebarContainer'>
            <p>Press the "add card" button to add the new Card. 
                Use the "sort cards" button to sort the Cards by the increase.
                Press an "X" icon on the top right to delete them. </p>
        </div>
    );
};

export default Sidebar;
