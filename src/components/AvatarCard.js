// import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function AvatarCard({avatar, handleImageClick}){


    return (
        <Card>
          <div>
            <div className="header">{avatar.name}</div>
            <div className="image" >
              <img alt="oh no!" src={avatar.image_url} height="100px" onClick={() => {handleImageClick(avatar.id)}}/>
            </div>
          </div>
        </Card>
      );
    
}

export default AvatarCard