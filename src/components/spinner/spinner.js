import React, {Component} from 'react';
import './styles.scss'
class Spinner extends Component {
    render(){
        return <div className="spinner-wrapper">
        <div className="spinner"></div>
      </div>
    }
}
export default Spinner;