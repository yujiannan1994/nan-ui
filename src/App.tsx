import React, { useState } from 'react';
// import Button, { ButtonType, ButtonSize } from './components/Button/button'
// import Alert from './components/Alert/alert'
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'
import SubMenu from './components/Menu/subMenu'
import Icon from "./components/Icon/icon"
import Transition from './components/Transition/transition'
import Button from './components/Button/button'
const App: React.FC = () => {
  const [show, setShow] = useState(false)
  // const onClose = () => {
  //   alert('close')
  // }
  return (
    <div className="App">
      <header className="App-header">
        <Icon icon="coffee" theme="primary" size="10x"/>
        {/* <Button className="custom" autoFocus onClick={(e) => { e.preventDefault(); alert(123)}}> Hello </Button>
        <Button disabled> Disabled Button </Button>
        <Button btnType={ButtonType.Primery} size={ButtonSize.Large}> Large Primery </Button>
        <Button btnType={ButtonType.Danger} size={ButtonSize.Small}> Small Danger </Button>
        <Button btnType={ButtonType.Link} href="http://ww.baidu.com" target="_blank"> Baidu Link </Button>
        <Button disabled btnType={ButtonType.Link} href="http://ww.baidu.com"> Disabled Link </Button> */}
        {/* <Alert title="Info Text" description="Info Description Info Description Info Description Info Description" closable onClose={onClose} />
        <Alert title="Error Text" type="danger" closable />
        <Alert title="success Text" description="success Text success Text" type="success" />
        <Alert title="warning Text" description="warning Text warning Text" type="warning" closable /> */}
        <Menu defaultIndex="0" onSelect={(index) => {alert(index)}} defaultOpenSubMenus={['2']}>
          <MenuItem>
            cool link
          </MenuItem>
          <MenuItem disabled>
            cool link 2
          </MenuItem>
          <SubMenu title="dropdown">
            <MenuItem>
              dropdown 1
            </MenuItem>
            <MenuItem>
              dropdown 2
            </MenuItem>
          </SubMenu>
          <MenuItem>
            cool link 3
          </MenuItem>
        </Menu>
        <Button size="lg" onClick={() => { setShow(!show) }}> Toggle </Button>
        <Transition
          in={show}
          timeout={300}
          animation="zoom-in-left"
        >
          <div>
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
          </div>
        </Transition>
        <Transition
          in={show}
          timeout={300}
          animation="zoom-in-left"
          wrapper
        >
          <Button btnType="primary" size="lg">A Large Button</Button>
        </Transition>
      </header>
    </div>
  );
}

export default App;
