// import React, { useState } from "react";
import { Card, Icon, Image } from "semantic-ui-react";

function AvatarCard({avatar, handleImageClick}){


  return (
    <Card>
      <Image alt="oh no!" src={avatar.image_url} wrapped ui={false}  onClick={() => {handleImageClick(avatar.id)}}/>
      <Card.Content>
        <Card.Header>
      {avatar.name}
      </Card.Header>
      <Card.Meta>
        A gangster fighter to rule them all
      </Card.Meta>
      <Card.Description>
        Its lit fam
        </Card.Description>
      </Card.Content>
    </Card>
  );
    
}

export default AvatarCard