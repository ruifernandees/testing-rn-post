import React from 'react';
import {UserCardComponentProps} from './props';
import {Container, DataContainer, Name, ProfileImage, Role} from './styles';

export const UserCardComponent: React.FC<UserCardComponentProps> = ({
  userImage,
  userName,
  userRole,
  ...rest
}) => {
  return (
    <Container {...rest}>
      <ProfileImage source={userImage} />
      <DataContainer>
        <Name>{userName}</Name>
        <Role>{userRole}</Role>
      </DataContainer>
    </Container>
  );
};
