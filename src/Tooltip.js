import React from 'react';



class Tooltip extends React.Component{
    classn=()=>{
        
        return `${this.props.position}`;
    }

    render(){
        return (
            <div className={`${this.classn()}`}>
                Hello! Hola! Konichiwa!
            </div>
        )
    }
}


export default Tooltip;