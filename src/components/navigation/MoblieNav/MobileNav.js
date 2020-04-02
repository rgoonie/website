import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Drawer, List, ListItem, ListItemIcon, ListItemText} from '@material-ui/core';
import {Menu, HomeTwoTone, InfoTwoTone, BookTwoTone, AccountTreeTwoTone, AccountBoxTwoTone} from '@material-ui/icons';
import * as ROUTE from '../routes';

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
                    <List>
                        <Link to={ROUTE.LANDING}>
                            <ListItem button onClick={toggleDrawer()}>
                                <ListItemIcon><HomeTwoTone/></ListItemIcon>
                                <ListItemText primary={"Home"}/>
                            </ListItem>
                        </Link>

                        <Link to={ROUTE.ABOUT}>
                            <ListItem button onClick={toggleDrawer()}>
                                <ListItemIcon><InfoTwoTone/></ListItemIcon>
                                <ListItemText primary={"About"}/>
                            </ListItem>
                        </Link>

                        <Link to={ROUTE.BLOGS}>
                            <ListItem button onClick={toggleDrawer()} >
                                <ListItemIcon><BookTwoTone/></ListItemIcon>
                                <ListItemText primary={"Blogs"}/>
                            </ListItem>
                        </Link>

                        <Link to={ROUTE.PROJECTS}>
                            <ListItem button onClick={toggleDrawer()}>
                                <ListItemIcon><AccountTreeTwoTone/></ListItemIcon>
                                <ListItemText primary={"Projects"}/>
                            </ListItem>
                        </Link>

                        <Link to={ROUTE.CONTACT}>
                            <ListItem button onClick={toggleDrawer()}>
                                <ListItemIcon><AccountBoxTwoTone/></ListItemIcon>
                                <ListItemText primary={"Contact"}/>
                            </ListItem>
                        </Link>
                    </List>
                </Drawer>
            </div>
        );
    }
}

export default MobileNav;