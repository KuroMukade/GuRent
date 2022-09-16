import './scss/app.scss';

import Header from './components/Header';
import SidePanel from './components/Sidebar';
import AppRoutes from './routes';

function App() {
  return (
  <>
    <div className='panel__wrapper'>
      <SidePanel/>
    </div>
    <div className="wrapper">
        <Header/>
      <div className="content">
        <AppRoutes/>
      </div>
    </div>
  </>
  );
}

export default App;
