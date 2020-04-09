import React, { Fragment } from 'react';
import CounterButton from './CounterButton';

class Header extends React.Component{


    shouldComponentUpdate(nextProps, nextState){
        return false
    }

    render(){
        return(
            <Fragment>
                {console.log('Header')}
                <h1>RoboFriends</h1>
                <CounterButton color={'red'} />
            </Fragment>
        )
    }
}

export default Header;