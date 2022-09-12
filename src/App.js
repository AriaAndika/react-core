import './App.css';

function App() {
  return (
    <div className='panel'>
      
      <input type={'text'} placeholder={'judul..'} className={'panelInput'}></input>
      <input type={'number'} placeholder={'deadline..'} className={'panelInput'}></input>
      <textarea cols={25} rows={10} className={'panelInput'}></textarea>
    </div>
  );
}

export default App;
