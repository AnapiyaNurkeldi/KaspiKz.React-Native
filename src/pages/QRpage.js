import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import Oops from '../img/Oops.png';
import Nav from '../components/nav';
import {COLORS, SIZES } from '../../constants/constant';
const QR = ({navigation}) => {
    const BackToHome = () => {
        console.log('clicked')
        navigation.navigate('Главная')
    }
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity onPress={BackToHome} style={{position: 'absolute', left: 30, top: 70, width: 120}}>
                <Text style={{fontSize: 20, fontWeight: 'bold', color: COLORS.danger}}>Назад</Text>
            </TouchableOpacity>
            <Image source={Oops} style={{ width: 50, height: 50, padding: 25}}></Image>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Oops, похоже</Text>
            <Text>QR пока все еще в разработке...</Text>

            {/* <Nav></Nav> */}
        </View>
    )
}

export default QR;