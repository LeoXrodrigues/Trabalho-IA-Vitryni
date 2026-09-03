import { Pressable, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../Styles/commonStyles';
import { Entypo } from '@expo/vector-icons';

export function HeaderBack() {
  const navigation = useNavigation();
  if (!navigation.canGoBack()) return null;
  return (
    <Pressable onPress={() => navigation.goBack()} hitSlop={12} style={{ paddingRight: 10, paddingLeft: 0 }}>
      <Entypo name="chevron-small-left" size={30} color={colors.text} />
    </Pressable>
  );
}