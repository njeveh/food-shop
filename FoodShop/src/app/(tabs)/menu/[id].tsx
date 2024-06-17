import { View, Text, Image, StyleSheet, Pressable } from 'react-native'
import React, { useState } from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'
import products from '@assets/data/products'
import Button from '@/components/Button'

const productDetailsScreen = () => {
  const { id } = useLocalSearchParams();
  const product = products.find((p) => p.id.toString() === id);
  const defaultPizzaImage = 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png';
  const sizes = ['S', 'M', 'L', 'XL'];
  const [selectedSize, setSelectedSize] = useState('M');
  const addToCart = () => {
    console.warn('adding to cart, size: ', selectedSize);
  }
  if (!product) {
    return (
      <View>Product not found.</View>
    );
  }
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: product?.name}}/>
      <Image source={{ uri: product.image || defaultPizzaImage }}  style={ styles.image } />
      <Text>Select size</Text>      
      <View style={styles.sizes}>
        {sizes.map((size) => (
          <Pressable
          onPress={()=>setSelectedSize(size)}
           key={size} style={[styles.size, {backgroundColor: selectedSize === size ? 'gainsboro' : 'white'}]}>
            <Text style={[styles.sizeText, {color: selectedSize === size ? 'black' : 'gray'}]}>{size}</Text>
          </Pressable>
        ))}
      </View>
      <Text style={styles.price}>${product.price}</Text>
      <Button text='Add to Cart' onPress={() => addToCart()} />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    padding: 10,

  },
  image: {
    width: '100%',
    aspectRatio : 1,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 'auto',
  },
  sizes: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  }, 
  size: {
    backgroundColor: 'gainsbore',
    width: 50,
    aspectRatio: 1,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sizeText: {
    fontSize: 20,
    fontWeight: '500',
  }
});
export default productDetailsScreen;