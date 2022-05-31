import {ImageSourcePropType, ViewProps} from 'react-native';

export interface UserCardComponentProps extends ViewProps {
  userImage: ImageSourcePropType;
  userName: string;
  userRole: string;
}
