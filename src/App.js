import React, {useState} from 'react';
import {View, Text, SafeAreaView, StyleSheet, FlatList, TextInput} from 'react-native';
import products_data from './products.json';
import ProductsCard from './components/ProductsCard';

const App = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const handleSearch = (text) => {
        setSearchQuery(text);
        console.log('Arama sorgusu:', text);
    };
    return(
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.header}>PatikaStore</Text>
                <View>
                    <TextInput 
                    style={styles.input} 
                    placeholder="Ara.." 
                    onChangeText={handleSearch}
                    value={searchQuery}>
                    </TextInput>
                </View>
                <FlatList
                    numColumns={2}
                    keyExtractor={(item) =>item.id}
                    data={products_data}
                    renderItem={({item}) => <ProductsCard products={item}/>}
                />
                
            </View>
        </SafeAreaView>
    );
};

const styles=StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'white',
        marginBottom:100,
    },
    header: {
        fontWeight: 'bold',
        fontSize: 50,
        color: 'purple',
        height:70,
    },
    input:{
        backgroundColor:'#f1f1f1',
        borderRadius:10,
        width:394,
        height:50,
        borderWidth:1,
        paddingLeft:15,
        borderColor:'#f1f1f1',
        paddingHorizontal: 10,
        marginLeft:10,
        fontSize:18,
        color:'#595959',
    },

});

export default App;