
import React from "react";
import { SafeAreaView, FlatList, ScrollView, StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import FeaturedCard from "./components/FeaturedCard";
import Icon from 'react-native-vector-icons/FontAwesome';

export default function HomeScreen(){

    const cardData = [
        { 
            id:'1',
            backgroundColor: '#1890F0',
            title: 'Software Engineer',
            subtitle: 'Facebook',
            icon: require('./assets/facebook.png'),  
            amount: '$ 180,000',
            location: 'Accra, Ghana',

        },
        {
            id:'2',
            backgroundColor: '#003048',
            title: 'Frontend Developer',
            subtitle: 'Google',
            icon:require('./assets/google.png'),  
            amount: '$ 150,000',
            location: 'Kumasi, Ghana',
        },
        {
            id:'3',
            backgroundColor: '#1890F0',
            title: 'Backend Developer',
            subtitle: 'Amazon',
            icon: require('./assets/amazon.png'),
            amount: '$ 160,000',
            location: 'Tema, Ghana',
        },
        {
            id:'4',
            backgroundColor: '#1890A8',
            title: 'Fullstack Developer',
            subtitle: 'Microsoft',
            icon: require('./assets/microsoft.png'),
            amount: '$ 170,000',
            location: 'Ho, Ghana',

        },
        {
            id:'5',
            backgroundColor: '#1800C0',
            title: 'DevOps Engineer',
            subtitle: 'Apple',
            icon: require('./assets/apple.png'),
            amount: '$ 190,000',
            location: 'Sunyani, Ghana',
        },
        {
            id:'6',
            backgroundColor: '#1890F0',
            title: 'Data Scientist',
            subtitle: 'IBM',
            icon: require('./assets/IBM.png'),
            amount: '$ 200,000',
            location: 'Cape Coast, Ghana',
        },
        {
            id:'7',
            backgroundColor: '#356899',
            title: 'Project Engineer',
            subtitle: 'Oracle',
            icon: require('./assets/oracle.png'),
            amount: '$ 210,000',
            location: 'Tamale, Ghana',
        },
        {
            id:'8',
            backgroundColor: 'blue',
            title: 'Cloud Engineer',
            subtitle: 'Intel',
            icon: require('./assets/intel.png'),
            amount: '$ 230,000',
            location: 'Wa, Ghana',
        },
      
    ]
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
            <View style={styles.topBar}>
            <View style= {styles.searchArea}>
                <TextInput style={styles.searchText} 
                placeholder='Search a job or position' />
                <Pressable style={styles.searchButton}>
                <Icon style={styles.searchIcon} name="search" size={20} color="black" />
                </Pressable>
            </View>

            <View style={styles.barsIconBox}>
            <Icon style={styles.barsIcon} name="bars" size={30} color="black" />
            </View>
                
            </View>
            <Text style={styles.text}>Featured Jobs</Text>
            <View style={styles.FlatList}>
            <FlatList 
            data={cardData}
            horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <FeaturedCard
            title = {item.title}
            subtitle={item.subtitle}
            icon={item.icon}
            amount={item.amount}
            location={item.location}
            backgroundColor={item.backgroundColor}
            />
          )}
        keyExtractor={item => item.id}
            
            />

</View>


            </ScrollView>


        </SafeAreaView>     
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      backgroundColor: '#F4FDFF',
    },
    topBar: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 20,
      top: 70,
      backgroundColor: '#F4FDFF',
    },
    searchArea: {
      flexDirection: 'row',
      backgroundColor: '#F2F2F3',
      borderRadius: 10,
      width: '80%',
      height: 40,
      alignItems: 'center',
    },
    searchText: {
      flex: 1,
      fontSize: 18,
      color: 'black',
      left: 40,

    },
    searchButton: {
      backgroundColor: '#F2F2F3',
      width: 40,
      height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        right: 235,
      borderRadius: 10,
    },
    barsIconBox: {
        backgroundColor: '#F2F2F3',
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        },
    text: {
      fontSize: 18,
      top: 80,
      left: 20,
      color: 'black',
      fontWeight: 'bold',
    },
    FlatList: {
      flex: 1,
      height: 300,
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 90,
      marginLeft: 10,

    },

})