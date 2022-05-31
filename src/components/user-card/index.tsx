import React from 'react';
import { CardContainerComponent } from '../card-container';
import { UserCardComponentProps } from './props';
import {
  DataContainer, Name, ProfileImage, Role,
} from './styles';

export const UserCardComponent: React.FC<UserCardComponentProps> = ({
  userImage,
  userName,
  userRole,
  ...rest
}) => (
  <CardContainerComponent {...rest}>
    <ProfileImage source={userImage} testID="profile-image" />
    <DataContainer>
      <Name>{userName}</Name>
      <Role>{userRole}</Role>
    </DataContainer>
  </CardContainerComponent>
);
