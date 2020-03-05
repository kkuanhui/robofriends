import React, {Component} from 'react';

class SearchBox extends Component{
    render(){
        const {SearchChange} = this.props;
        return(
            <div className="pa2">
                <input className='pa3 ba b--green bg-lightest-blue'
                type='search' 
                placeholder='search robots'
                onChange = {SearchChange}
                />
            </div>
        )
    }
}

export default SearchBox;