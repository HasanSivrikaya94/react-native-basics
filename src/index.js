import React, { Component } from 'react';
import {Router,Scene} from 'react-native-router-flux';

import home from './Home';
import main from './MainMenu';

const app = () => {
    return (
        <Router>
            <Scene key = "root"
             headerLayoutPreset="center">
                <Scene key = 'home'
                    component= {home}
                    title = 'Homepage'/>  
            
            
            <Scene key = 'main'
                    component = {main}
                    title = 'Main Menu' />
                
             </Scene>        
         </Router>           
    )
}
 export default app;