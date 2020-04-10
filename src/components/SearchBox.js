import React, {Component} from 'react';

class SearchBox extends Component{

    shouldComponentUpdate(nextProps, nextState){
        if(this.props !== nextProps){
            return false
        }
        return true
    }

    render(){
        const {SearchChange} = this.props;
        return(
            <div className="pa2">
                <input 
                aria-label="Search Robots"
                className='pa3 ba b--green bg-lightest-blue'
                type='search' 
                placeholder='search robots'
                onChange = {SearchChange}
                />
            </div>
        )
    }
}

export default SearchBox;