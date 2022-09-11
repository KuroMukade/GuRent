import './scss/app.scss';

import Header from './components/Header';
import AppRoutes from './routes';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <AppRoutes />
      </div>
    </div>
  );
}

export default App;
