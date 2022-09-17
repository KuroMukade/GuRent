import React, { useState, useEffect, useRef } from 'react'
import classNames from 'classnames';

import './sidebar.scss';
import useOnClickOutside from '../../hooks/useOnClickOutside';

const SidePanel = () => {
    const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
    const backgroundRef = useRef<HTMLDivElement>(null);

    useOnClickOutside(backgroundRef, () => {
        if (sidebarOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    });

    useEffect(() => {
        const keyHandler = (e: KeyboardEvent) => {
            if (sidebarOpen && e.key === 'Escape') setSidebarOpen(false);
        }
        document.addEventListener('keydown', keyHandler);
        return () => document.removeEventListener('keydown', keyHandler);
    }, [sidebarOpen]);

    const sidebarOpenHandler = () => {
        if (sidebarOpen === false) {
            setSidebarOpen(true);
        } else {
            setSidebarOpen(false);
        }
    }

  return (
    <aside className='panel'>
        <div className={`overlay ${sidebarOpen ? '' : 'active'}`}
            ref={backgroundRef} />
        <div className={`menu-btn ${sidebarOpen ? 'open' : ''}`} 
            onClick={() => sidebarOpenHandler()}>
            <div className="menu-btn__burger" />
        </div>
        {/* <nav>
            <ul>
                <li><Link to={"/flats"}>Квартиры</Link></li>
                <li><Link to={"/houses"}>Дома</Link></li>
            </ul>
        </nav> */}
    </aside>
  )
}

export default SidePanel;