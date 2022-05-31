import { ImageSourcePropType, TouchableOpacityProps } from 'react-native';

export interface UserCardComponentProps extends TouchableOpacityProps {
  userImage: ImageSourcePropType;
  userName: string;
  userRole: string;
}
