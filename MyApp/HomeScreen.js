
import React from "react";
import { SafeAreaView, FlatList, ScrollView, StyleSheet, Text, View, TextInput, Pressable, Image } from "react-native";
import FeaturedCard from "./components/FeaturedCard";
import PopularCard from "./components/PopularCard";
import Icon from 'react-native-vector-icons/FontAwesome';

export default function HomeScreen({route}){
    const { name, email } = route.params;

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

    const PopularData = [
        {
            id: '1',
            logo: require('./assets/burgerking.png') ,
            Position: 'Jr Executive',
            Company: 'Burgar King',
            Location: 'Los Angeles, US',
            Salary: '$96,000/yr',
        },
        {
            id: '2',
            Position: 'Product Manager',
            logo: require('./assets/beats.png'),
            Company: 'Beats',
            Location: 'Florida, US',
            Salary: '$84,000/yr',
        },
        {
            id: '3',
            Position: 'Product Manager',
            logo: require('./assets/facebook.png'),
            Company: 'Facebook',
            Location: 'Florida, US',
            Salary: '$86,000/yr',
        },
       
        
        {
            id:'4',
            Position: 'Product Manager',
            logo: require('./assets/microsoft.png'),
            Company: 'Microsoft',
            Location: 'Florida, US',
            Salary: '$92,000/yr',
        },
        {
            id: '5',
            Position: 'Sr Executive',
            logo: require('./assets/intel.png'),
            Company: 'Intel',
            Location: 'New York, US',
            Salary: '$100,000/yr',
        },
        {
            id:'6',
            Position: 'Jr Developer',
            logo: require('./assets/google.png'),
            Company: 'Google',
            Location: 'San Francisco, US',
            Salary: '$120,000/yr',
        },
        {
            id: '7',
            Position: 'Sr Developer',
            Company: 'Facebook',
            logo: require('./assets/facebook.png'),
            Location: 'San Jose, US',
            Salary: '$130,000/yr',
        },
        {
            id: '8',
            Position: 'Jr Designer',
            Company: 'Apple',
            logo: require('./assets/apple.png'),
            Location: 'Cupertino, US',
            Salary: '$110,000/yr',
        },
        {
            id: '9',
            Position: 'Sr Designer',
            Company: 'Microsoft',
            logo: require('./assets/microsoft.png'),
            Location: 'Redmond, US',
            Salary: '$140,000/yr',
        },
        {
            id:'10',
            Position: 'Jr Engineer',
            Company: 'IBM',
            logo: require('./assets/IBM.png'),
            Location: 'Armonk, US',
            Salary: '$150,000/yr',
        },
        {
            id: '11',
            Position: 'Sr Engineer',
            Company: 'Intel',
            logo: require('./assets/intel.png'),
            Location: 'Santa Clara, US',
            Salary: '$160,000/yr',
        },

    ]
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
            <View style={styles.ProfileView}>
                <Text style={styles.ProfileName}>{name}</Text>
                <Text style={styles.ProfileEmail}>{email}</Text>
            </View>
            
            <Image source={require('./assets/Profile.png')} style={styles.Profile} />
            <View style={styles.activestatus}></View>

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
            <Text style={styles.seeAll}>See all</Text>
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

            <View style={styles.FlatListBottom}>
                <Text style={styles.Popular}>Popular Jobs</Text>
                <Text style={styles.seeAll2}>See all</Text>
            <FlatList
            data={PopularData}
            Vertical
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
                <PopularCard
                Position={item.Position}
                Company ={item.Company}
                Salary={item.Salary}
                Location={item.Location}
                logo={item.logo}
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
      backgroundColor: '#FFFFFF',
    },
    ProfileView:{
        flex:1,
        width: '100%',
    },
    activestatus:{
        borderColor: 'white',
        borderWidth: 2,
        width: 15,
        height: 15,
        borderRadius: 50,
        backgroundColor: 'red',
        bottom: 60,
        left: 350,
    },
    Profile:{
        width: 50,
        height: 50,
        borderRadius: 50,
        bottom: 16,
        left: 313,
    },
    ProfileName:{
        fontSize: 35,
        fontWeight: '800',
        color: 'black',
        top: 30,
        left: 30,
    },
    ProfileEmail:{
        fontSize: 19,
        color: 'black',
        fontWeight: 'bold',
        opacity: 0.4,
        top: 30,
        left: 30,
    },

    topBar: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 20,
      top: 15,
      backgroundColor: 'white',
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
        right: 5,
        },
    text: {
      fontSize: 20,
      top: 30,
      left: 20,
      color: 'black',
      fontWeight: 'bold',
    },
    seeAll: {
      fontSize: 15,
      top: 10,
      left: 320,
      color: 'black',
      opacity: 0.3,
      fontWeight: 'bold',
    },
    seeAll2: {
        fontSize: 15,
        bottom:30,
        left: 320,
        color: 'black',
        opacity: 0.3,
        fontWeight: 'bold',
      },
    FlatList: {
      flex: 1,
      height: 300,
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 30,
      marginLeft: 10,

    },
    Popular:{
        fontSize: 20,
        fontWeight: 'bold',
        left: 20,
        bottom: 13
    },
    FlatListBottom:{
        flex:1,
        height: '100%',
        width: 500,
        marginTop: -40,
    }

})