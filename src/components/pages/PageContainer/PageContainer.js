import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import {CSSTransition, TransitionGroup} from 'react-transition-group';


import * as ROUTES from '../../navigation/routes.js';
import Landing from '../Landing/Landing';
import About from '../About/About';
import Blogs from '../Blogs/Blogs';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';

import './PageContainer.css';

function PageContainer({location}){
    return(
        <div className="page-container">
            <TransitionGroup className="transition-group">
                <CSSTransition
                key={location.key}
                timeout={{ enter: 300, exit: 300 }}
                classNames="fade"
                >
                <section className="route-section">
                    <Switch location={location}>
                    <Route exact path={ROUTES.LANDING} component={Landing} />
                    <Route exact path={ROUTES.ABOUT} component={About} />
                    <Route exact path={ROUTES.BLOGS} component={Blogs} />
                    <Route exact path={ROUTES.PROJECTS} component={Projects} />
                    <Route exact path={ROUTES.CONTACT} component={Contact} />
                    </Switch>
                </section>
                </CSSTransition>
            </TransitionGroup>
        </div>
    );
}

export default withRouter(PageContainer);