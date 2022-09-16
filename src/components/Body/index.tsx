import React from 'react';
import { Link } from 'react-router-dom';

import './body.scss';

const index = () => {
  return (
    <div className='main'>
        <div>
            <h1>
                <span>Снять</span> просторную квартиру и <span>чувствовать</span> себя как дома?
            </h1>
            <h2>С <span>Gu</span>Rent проще простого!</h2>
            <Link to={'/'}>
              <button className='button'>
                  Выбрать жилье
              </button>            
            </Link>

        </div>  
  </div>
  );
}

export default index