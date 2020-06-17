import React, {Component} from 'react';
import './styles.scss'
class Level extends Component {
    render (){
        const {maxLevel = 1, currentLevel = 0} = this.props;
        const percent = (currentLevel /maxLevel)* 100;
        const rank = percent >= 50 && percent <70? 'avarage' : percent < 45 ? 'bad' : 'good'; 
        return (
            <div className="level-wrapper">
                <div className={`progress-bar progress-bar_${rank}`} style={{width: `${percent}%`}}></div>
            </div>
        )
    }
}

export default Level;