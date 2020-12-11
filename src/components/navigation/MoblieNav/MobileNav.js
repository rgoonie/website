import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { styled } from '@material-ui/core';
import {Drawer, List, ListItem, ListItemIcon, ListItemText} from '@material-ui/core';
import {Menu, HomeTwoTone, InfoTwoTone, BookTwoTone, AccountTreeTwoTone, AccountBoxTwoTone} from '@material-ui/icons';
import * as ROUTE from '../routes';

const StyledLink = styled(Link)({
    color: "#f2f2f2",
    textDecoration: "none",
});

const StyledList = styled(List)({
    background: "#070707",
    height: "100%"
});

const StyledHomeIcon = styled(HomeTwoTone)({
    color: "#930110",
});

const StyledInfoIcon = styled(InfoTwoTone)({
    color: "#930110",
});

const StyledBookIcon = styled(BookTwoTone)({
    color: "#930110",
});

const StyledAccountTreeIcon = styled(AccountTreeTwoTone)({
    color: "#930110",
});

const StyledAccountBoxIcon = styled(AccountBoxTwoTone)({
    color: "#930110",
});

export class MobileNav extends Component{
    constructor(props){
        super(props);
        this.state = {
            drawOpen: false,
        }
    }
    
    render(){
        const toggleDrawer = () => (event) => {
            if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
              return;
            }
    
            this.setState({drawOpen: !this.state.drawOpen});
        };

        return(
            <div>
                <Menu onClick={toggleDrawer()}/>
                <Drawer open={this.state.drawOpen} onClose={toggleDrawer()}>
                    <StyledList>
                        <StyledLink to={ROUTE.LANDING}>
                            <ListItem button onClick={toggleDrawer()}>
                                <ListItemIcon><StyledHomeIcon/></ListItemIcon>
                                <ListItemText primary={"Home"}/>
                            </ListItem>
                        </StyledLink>

                        <StyledLink to={ROUTE.ABOUT}>
                            <ListItem button onClick={toggleDrawer()}>
                                <ListItemIcon><StyledInfoIcon/></ListItemIcon>
                                <ListItemText primary={"About"}/>
                            </ListItem>
                        </StyledLink>

                        <StyledLink to={ROUTE.BLOGS}>
                            <ListItem button onClick={toggleDrawer()} >
                                <ListItemIcon><StyledBookIcon/></ListItemIcon>
                                <ListItemText primary={"Blogs"}/>
                            </ListItem>
                        </StyledLink>

                        <a href="https://github.com/rgoonie" target="_blank" rel="noopener noreferrer" style={{color: "#f2f2f2", textDecoration: "none",}}>
                            <ListItem button onClick={toggleDrawer()}>
                                <ListItemIcon><StyledAccountTreeIcon/></ListItemIcon>
                                <ListItemText primary={"Projects"}/>
                            </ListItem>
                        </a>

                        <StyledLink to={ROUTE.CONTACT}>
                            <ListItem button onClick={toggleDrawer()}>
                                <ListItemIcon><StyledAccountBoxIcon/></ListItemIcon>
                                <ListItemText primary={"Contact"}/>
                            </ListItem>
                        </StyledLink>
                    </StyledList>
                </Drawer>
            </div>
        );
    }
}

export default MobileNav;