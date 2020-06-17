import React from 'react';
import './styles.scss';

class ScrollTop extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            showIcon: false,
        }
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
    
    handleScroll= () => {
       if(window.pageYOffset < 40) {
            if(this.state.showIcon)
           this.setState({...this.state, showIcon: false})
       }
       else{
           if(!this.state.showIcon)
                this.setState({...this.state, showIcon: true})
       }
    }
          
      scrollToTop() {
        window.scrollTo({top: 0, behavior: 'smooth'})
      }

    render(){
        const {showIcon} = this.state;
        return (
            <div id="scroll-to-top" onClick={()=>{this.scrollToTop()}} 
            className={`scroll-btn text-center ${showIcon?"appear":"disapear"}`}
            >
              <i class="fa fa-angle-up up-arrow"></i>
            </div>
          )
    }
}
export default ScrollTop;
  