import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function AvatarCard({avatar}){

    return(
        <Card>
        <div className="avatar-card">
            <div className="image">
                <img src={avatar.image_url} alt="test" height="50px" width="50px"/>
            </div>
            <div className="content">
                <div className="header">{avatar.name}</div>
                <div className="extra content"><span>Blah blah</span></div>
            </div>
            </div>
            </Card>


    )
}

export default AvatarCard