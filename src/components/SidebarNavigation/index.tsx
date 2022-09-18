import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import './sidebarnav.scss';

interface ISidebarNav {
    sidebarOpen: boolean;
}

const SidebarNav: React.FC<ISidebarNav> = ({sidebarOpen}) => {
  return (
    <div className={classNames('menu', {
        'opened': sidebarOpen,
        'closed': !sidebarOpen
    })}>
        {sidebarOpen && 
            <nav className='menu__content'>
                <ul className='ul'>
                    <li><Link to={"/flats"}>Квартиры</Link></li>
                    <li><Link to={"/houses"}>Дома</Link></li>
                </ul>
            </nav>
        }
    </div>
  )
}

export default SidebarNav;