import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex:1,
        height: Dimensions.get('window').height*12 / 30,
        backgroundColor: '#f1f1f1',
        margin:8,
        justifyContent: 'space-between',
        padding:8,
        borderRadius:10,
    },
    image: {
        height: Dimensions.get('window').height / 4,
        borderRadius:10,
        margin:5,
        resizeMode:'contain',
    },
    title: {
        fontSize:18,
        fontWeight:'bold',
        color:'black',
        textAlign:'left',
        marginLeft:10,
    },
    price: {
        marginLeft:10,
        marginTop:-5,
        fontSize:18,
        fontWeight:'bold',
        color:'#595959',
    },
    stock: {
        color:'red',
        fontWeight:'bold',
        fontSize:18,
        marginLeft:10,
    },
});