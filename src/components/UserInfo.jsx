import React from 'react';
import styled from 'styled-components';

export default function UserInfo({user}) {

    return (
    <SideBar>
        <div>
            <ProfileImage src=
            "https://www.agencegenevievechampagne.com/wp-content/uploads/2019/03/generic-avatar-1.jpg"/>
            <h6 className="text-white">Logged in as: </h6>
            <SideBarText>{user.firstName} {user.lastName}</SideBarText>
            <SideBarText>{user.email}</SideBarText>
        </div>
    </SideBar>
    )
}

/*const SideBar = styled.div`
        background: #c7596a;
        padding: 1rem; 
        position: fixed; 
        width: 15%; 
        height: 100%; 
        top: 0; 
        left: 0;
        overflow-x: hidden; 
        text-align: center
    `*/

    const SideBar = styled.div`
        background: #c7596a; 
        text-align:center; 
        grid-column: 1;
        overflow-x: hidden; 
        padding: 1rem; 
        `
    const ProfileImage = styled.img`
        width: 75%; 
        height: 75%; 
        border-radius: 40%; 
        margin: 1rem; 
    `

    const SideBarText = styled.h5`
        color: #feeee1;
        margin: 0.3rem;
        word-wrap: break-word;
    `
