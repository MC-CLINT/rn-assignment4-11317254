import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const FeaturedCard = ({ icon, title, subtitle, amount, location, backgroundColor}) => {
    return(
        <TouchableOpacity style={[styles.container1, {backgroundColor}]}>
            <View style={styles.imgContainer}>
                <Image source={icon} style={styles.icon} />
            </View>

            <View style={styles.detailsContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subtitle}>{subtitle}</Text>
            </View>

            
            <Text style={styles.amount}>{amount}</Text>
            <Text style= {styles.location}>{location}</Text>

        </TouchableOpacity>

    );
};

const styles = StyleSheet.create({
    container1: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      paddingHorizontal: 10,
      paddingBottom: 10,
      height:200,
      width: 290,
      marginRight: 10,
      borderRadius: 20,
    },
    imgContainer: {
        backgroundColor:'white',
        bottom: 50,
        borderRadius: 8,
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        left: 20
    },
    icon: {
        height: 30,
        width: 30,
        borderRadius: 25,
    },
    detailsContainer: {
        marginLeft: 10,
    },
    title: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        bottom: 54,
        left: 20
    },
    subtitle: {
        color: 'white',
        fontSize: 14,
        bottom: 50,
        left: 20
    },
    amount: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        top: 70,
        right: 140
    },
    location: {
        color: 'white',
        fontSize: 14,
        top: 70,
        right: 20
    },

})

export default FeaturedCard;