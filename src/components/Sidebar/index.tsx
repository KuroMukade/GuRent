import React, { useState, useEffect, useRef } from 'react'
import classNames from 'classnames';

import './sidebar.scss';
import useOnClickOutside from '../../hooks/useOnClickOutside';

const SidePanel = () => {
    const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
    const buttonRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (sidebarOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [sidebarOpen]);

    useOnClickOutside(buttonRef, () => {
        const keyHandler = (e: KeyboardEvent) => {
            if (sidebarOpen && e.key === 'Escape') setSidebarOpen(false);
        }
        document.addEventListener('keydown', keyHandler);
        return () => document.removeEventListener('keydown', keyHandler);
    });

    const sidebarOpenHandler = () => {
        if (sidebarOpen === false) {
            setSidebarOpen(true);
        } else {
            setSidebarOpen(false);
        }
    }

  return (
    <aside className='panel'>
        <div className={`overlay ${sidebarOpen ? '' : 'active'}`} />
        <div className={`menu-btn ${sidebarOpen ? 'open' : ''}`} 
            ref={buttonRef}
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