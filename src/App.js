import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';
import FieldForm from './FieldForm';
import FieldDisplay from './FieldDisplay';
import './App.css';
import DynamicFields from './DynamicFields';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="App">
          <FieldForm />
          <FieldDisplay /><br/>
          <DynamicFields/>
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
