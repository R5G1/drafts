import { useState } from 'react';
import { AuthContext } from './components/Context/Context';
import { IFormInput } from './components/Type/Type';
import Sections from './sections';

function App() {
  const [isType, setIsType] = useState<IFormInput[]>([]);
  const [isArray, setisArray] = useState<IFormInput[]>([]);

  const [isNewArray, setisNewArray] = useState<IFormInput[]>(isArray);

  return (
    <div className="app">
      <AuthContext.Provider
        value={{ isType, setIsType, isArray, setisArray, isNewArray, setisNewArray }}
      >
        <Sections />
      </AuthContext.Provider>
    </div>
  );
}

export default App;
