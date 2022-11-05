import React from "react";

import './reviewModal.css';

export const ReviewModalComponent: React.FC = () => {
    return(
        <div className="Modal">
            <div className="Modal-header">
                <h1>Write Review</h1>
            </div>
            <div className="Modal-content">
                This is Modal content. <br/>
                This is Modal content. <br/> 
                This is Modal content. <br/> 
                This is Modal content. <br/> 
                This is Modal content. <br/> 
                This is Modal content. <br/> 
                This is Modal content. <br/> 
                This is Modal content. <br/> 
                This is Modal content. <br/> 
            </div>
        </div>
    )
}