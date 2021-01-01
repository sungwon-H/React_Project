import React from 'react';
import "./TodoDate.scss";

function TodoDate(){

    const today = new Date();
    const dateString = today.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    return(
        
            <div className="TodoDate">{dateString}</div>
       
        
    )
}

export default TodoDate;