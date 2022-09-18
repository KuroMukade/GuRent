import React, { useState, useEffect, useRef } from 'react';
import SidebarNav from '../SidebarNavigation';
import useOnClickOutside from '../../hooks/useOnClickOutside';
import classNames from 'classnames';

import './sidebar.scss';

const SidePanel = () => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const backgroundRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(backgroundRef, () => {
    if (sidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  });

  useEffect(() => {
    const keyHandler = (e: KeyboardEvent) => {
      if (sidebarOpen && e.key === 'Escape') setSidebarOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  }, [sidebarOpen]);

  const sidebarOpenHandler = () => {
    if (sidebarOpen === false) {
      setSidebarOpen(true);
    } else {
      setSidebarOpen(false);
    }
  };

  return (
    <>
      <aside className="panel">
        <div
          className={classNames('menu-btn', {
            'open': sidebarOpen,
          })}
          onClick={() => sidebarOpenHandler()}>
          <div className="menu-btn__burger" />
        </div>
        <SidebarNav sidebarOpen={sidebarOpen} />
      </aside>
      <div
          className={classNames('overlay', {
            'active': sidebarOpen,
          })}
          ref={backgroundRef}
        />
    </>

  );
};

export default SidePanel;
