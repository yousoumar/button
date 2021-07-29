import Button from '../Button/Button';
import './App.css';

function App() {
  return (
    <div  id="app">
      <Button color ="default">Default</Button>
      <Button disabled>Disabled</Button>
      <Button color ="primary">Primary</Button>
      <Button color ="secondary">Secondary</Button>
      <Button color ="danger">Danger</Button>
      <Button color ="primary" icon = "start">Shopping</Button>
      <Button color ="primary" icon = "end">Shopping</Button>
      <Button color ="primary" variant ="outline">Outline</Button>
    
      <Button variant = "text" disabled>Disabled</Button>
      <Button variant ="text">Text</Button>
    </div >
  );
}

export default App;
