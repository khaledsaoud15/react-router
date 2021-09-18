import React from 'react'
import styled from 'styled-components'
import './Header.css'
import {Link} from 'react-router-dom'

const Headr = styled.div
`
margin:100px;
display:flex;
justify-content: space-around;
background-color: white;
`
const Lien=styled(Link)`
text-decoration: none;
color:#2e2a2a
`

const Logo=styled.div
`
margin-top:-63px;
text-align:left;
font-family:'Times New Roman', Times, serif
`
function Header() {
    return (
       
              <div>
         <Headr>
         <Logo>
        <Lien href="#">
            <h1>MOBASTI Samah</h1>
            <span>Full stack js Developer</span>
        </Lien>
        </Logo>
    
        <nav class="menu-bar">
         <ul>
              <li class="HOME"><Lien to="/main"> RESUME</Lien></li>
              <li><Lien to="/footer"> RESUME</Lien></li>
                

    
        </ul>
    
        </nav>
        </Headr>
        </div>
    )
}

export default Header
