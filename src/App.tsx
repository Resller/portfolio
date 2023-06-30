import { Header } from './components/Header'
import { MenuMobile } from './components/MenuMobile';
import { Context } from './context/Context';
import { MainRoutes } from './routes/MainRoutes';
import * as C from './styles'
import { useContext, useState } from 'react';

const App = ()=>{
  const {state} = useContext(Context);
  const [changeMobile,setChangeMobile] = useState(false)
  
  return(
    <C.Container bg={state.theme.bg}>
      <MenuMobile
        changeMobile = {changeMobile}
        setChangeMobile ={setChangeMobile}
      />
      <Header
       setChangeMobile ={setChangeMobile}
      />
      <MainRoutes/>
    </C.Container>
  )
}
export default App
