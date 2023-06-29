import Curtain from './views/Curtain';
import AppBg from './views/AppBg';
import Clocks from './views/Clocks';

function App() {
  return (
    <Curtain>
      <AppBg />
      <Clocks />
    </Curtain>
  );
}

export default App;
