import { Outlet } from "react-router-dom"
import { styled } from "styled-components"
import Header from "../ui/Header"


const StyleAppLayout = styled.div`
  



`



const AppLayout = () => {


 
 
 return (
    <StyleAppLayout>
        <Header/>

            <Outlet/>
    
    </StyleAppLayout>
  )
}

export default AppLayout