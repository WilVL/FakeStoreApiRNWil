import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native-web';


const PantallaProductos = () => {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        getProducts();
    }, []);


    const getProducts = () => {
        const URL = "https://fakestoreapi.com/products";
        
        fetch(URL).then(res => {
           return res.json() //Para convertirlo en formato Json
        }).then(data => {
            setProducts(data);
            console.log(data);
        });
    
    };

  return (

    <View>
      <Text style={styles.titleText}>Pantalla Productos</Text>
      <Text style={styles.textStyle}>Consumo de api de FAKE STORE</Text>
      <FlatList 
      showsVerticalScrollIndicator={false}
      data={products} 
      renderItem={({ item }) => (
        <View style={styles.cardContainer}>
            <Text style={styles.textStyle}> {item.title} </Text>
            <Image source={{ uri: item.image } } style={styles.image} />
            <Text style={styles.textStyle}> {item.price} </Text>
            <Text style={styles.descText}>{item.description}</Text>

        </View>
    
        )}
        />

    </View>
  )
}

export default PantallaProductos

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: '#f0f0f0',
        borderRadius:10,
        padding: 20,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#000",
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        shadowRadius:4,
        marginTop: 20,

    },
    image: {
        height: 200,
        width: 200,

    },
    errorStyle: {
        color: "red",
        fontSize: 18,

    },
    textStyle: {
        fontSize: 18,
        textAlign: "center", 
        fontWeight:'bold', 
        marginTop:30,

    },
    titleText: {
        fontSize: 30,
        fontWeight:'bold', 
        
    },
    descText: {
        fontSize:12,
        textAlign: "center", 
    }



})