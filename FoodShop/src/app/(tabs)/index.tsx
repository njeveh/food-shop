import { StyleSheet} from 'react-native';

import { View } from '@/src/components/Themed';
import Colors from '@/src/constants/Colors';
import products from '@/assets/data/products';
import ProductListItem from '@/src/components/ProductListItem';

const product = products[0];

export default function MenuScreen() {
  return (
    <View>
      <ProductListItem product={products[0]}/>
      <ProductListItem product={products[1]}/>
    </View>
  );
}

const styles = StyleSheet.create({
});
