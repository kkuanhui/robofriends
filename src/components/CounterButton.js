import React, { Fragment, PureComponent } from 'react';

class CounterButton extends PureComponent{
    
    constructor(props){
        super(props);
        this.state = {
            count: 0,
        }
    }

    // shouldComponentUpdate(nextProps, nextState){
    //     if(this.state.count !== nextState.count){
    //         return true
    //     }
    //     return false
    // }

    updateCount = () => {
        // this.setState({count: this.state.count + 1})
        this.setState(state => {
            return {count: state.count + 1}
        })
    }

    render(){

        return(
            <Fragment>
                {console.log('CounterButton')}
                <button
                aria-label='Counter Button' 
                color={this.props.color} 
                onClick={this.updateCount}>
                    Count : {this.state.count}
                </button>
            </Fragment>
        )
    }
}

export default CounterButton;