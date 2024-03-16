import React from "react";
import {View, Text, Image} from 'react-native';
import styles from './ProductsCard.style';

const ProductsCard = ({products}) =>{
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: products.imageUrl}}/>
            <Text style={styles.title}>{products.title}</Text>
            <Text style={styles.price}>{products.price}</Text>
            <Text style={styles.stock}>{products.inStock==true ? "" : "STOKTA YOK"}</Text>
        </View>
    );
};

export default ProductsCard;