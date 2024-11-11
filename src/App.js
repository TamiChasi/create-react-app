import logo from './logo.svg';
import './App.css';
import AppRoutes from './appRoutes';
import './i18n/config';

function App() {
  const debug = require('debug');
  debug.enable(''); //block all debug for security.

  return (
    <div className="App">
      <AppRoutes/>
    </div>
  );
}

export default App;
