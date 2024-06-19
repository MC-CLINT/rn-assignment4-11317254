import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const PopularCard = ({ logo, Location, Company, Salary, Position}) => {

    return(
    <TouchableOpacity style={styles.Main}>
            <View style={styles.logoContainer}>
            <Image source={logo} style={styles.logo} />
            </View>
            <View>
                <Text style={styles.Position}>{Position}</Text>
                <Text style={styles.Salary}>{Salary}</Text>
                <Text style= {styles.Company}>{Company}</Text>
            </View>

            <Text style={styles.Location}>{Location}</Text>


    </TouchableOpacity>
    );
};


const styles = StyleSheet.create({
    Main:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor:'deep white',
        marginBottom: 10,
        height: 80,
        width: 360,
        marginLeft: 13,
    },

    logo:{
        height: 45,
        width: 45,
        borderRadius: 25,
        right: 150,
        top: 25
    },

    Position:{
        color: 'black',
        fontSize: 20,
        fontWeight: '600',
        right: 20,
        bottom: 5,
        width: 200
    },

    Company:{
        color: 'gray',
        fontSize: 13,
        opacity: 0.4,
        fontWeight: '500',
        right: 20,
        bottom: 20
    },
    Salary:{
        color: 'black',
        fontSize: 15,
        fontWeight: 'bold',
        left: 200,
        bottom: 23
    },

    Location:{
        color: 'gray',
        fontSize: 13,
        fontWeight: 'bold',
        left: 130,
        bottom: 25
    }
})


export default PopularCard;