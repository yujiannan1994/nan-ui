import React from 'react';
// import Button, { ButtonType, ButtonSize } from './components/Button/button'
import Alert from './components/Alert/alert'

function App() {
  const onClose = () => {
    alert('close')
  }
  return (
    <div className="App">
      <header className="App-header">
        {/* <Button className="custom" autoFocus onClick={(e) => { e.preventDefault(); alert(123)}}> Hello </Button>
        <Button disabled> Disabled Button </Button>
        <Button btnType={ButtonType.Primery} size={ButtonSize.Large}> Large Primery </Button>
        <Button btnType={ButtonType.Danger} size={ButtonSize.Small}> Small Danger </Button>
        <Button btnType={ButtonType.Link} href="http://ww.baidu.com" target="_blank"> Baidu Link </Button>
        <Button disabled btnType={ButtonType.Link} href="http://ww.baidu.com"> Disabled Link </Button> */}
        <Alert title="Info Text" description="Info Description Info Description Info Description Info Description" closable onClose={onClose} />
        <Alert title="Error Text" description="Error Text Error Text" type="danger" closable />
        <Alert title="success Text" description="success Text success Text" type="success" />
        <Alert title="warning Text" description="warning Text warning Text" type="warning" closable />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
