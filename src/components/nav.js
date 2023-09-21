import React from 'react';
import { useState } from 'react';
import { StyleSheet, TextInput, View, Image, Text, ScrollView, TouchableOpacity} from 'react-native';
import {COLORS, SIZES } from '../../constants/constant';
import QR from '../img/qr3.png';
import home from '../img/home.png';
import homeGray from '../img/homeGray.png';
import qrgray from '../img/qrgray.png';
import message from '../img/message.png';
import messageGray from '../img/messageGray.png';
import menu from '../img/menu.png';
import menuGray from '../img/menuGray.png';
import { useNavigation } from '@react-navigation/native';


const Nav = () => {
    
const navigation = useNavigation();
const [activeHome, setActiveHome] = useState(true);
const [activeQR, setActiveQR] = useState(false);
const [activeMessage, setActiveMessage] = useState(false);
const [activeMenu, setActiveMenu] = useState(false);

const handlePressHome = () => {
    navigation.navigate('Главная')
    setActiveHome(true);
    setActiveQR(false);
    setActiveMessage(false);
    setActiveMenu(false);
};

const handlePressQR = () => {
    navigation.navigate('QR')
    setActiveHome(false);
    setActiveQR(true);
    setActiveMessage(false);
    setActiveMenu(false);
};
const handlePressMessage = () => {
    setActiveHome(false);
    setActiveQR(false);
    setActiveMessage(true);
    setActiveMenu(false);
    navigation.navigate('message');
}
const handlePressServices = () => {
    setActiveHome(false);
    setActiveQR(false);
    setActiveMessage(false);
    setActiveMenu(true);
    navigation.navigate('Services');
}  
    return (
        <View style={[{backgroundColor: COLORS.primary, height: 80, borderWidth: 0.3, borderColor: COLORS.SomeColor}, styles.fixedBottom]}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 15}}>
            <TouchableOpacity onPress={handlePressHome} style={{justifyContent: 'center', alignItems: 'center'}}>
                <Image source={activeHome ? home : homeGray} style={{ width: 25, height: 25 }}></Image>
                 <Text style={{color: activeHome ? COLORS.danger : COLORS.SomeColor, fontSize: 12, paddingTop: 2}}>
                     Главная    
                </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handlePressQR} style={{justifyContent: 'center', alignItems: 'center'}}>
                <Image source={activeQR ? QR : qrgray} style={{ width: 25, height: 25 }}></Image>
                 <Text style={{color: activeQR ? COLORS.danger : COLORS.SomeColor, fontSize: 12, paddingTop: 2}}>
                    Kaspi QR
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handlePressMessage} style={{justifyContent: 'center', alignItems: 'center'}}>
                <Image source={activeMessage ? message : messageGray} style={{ width: 25, height: 25 }}></Image>
                <Text style={{color: activeMessage ? COLORS.danger : COLORS.SomeColor, fontSize: 12, paddingTop: 2}}>Сообщения</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handlePressServices} style={{justifyContent: 'center', alignItems: 'center'}}>
                <Image source={activeMenu ? menu : menuGray} style={{ width: 25, height: 25 }}></Image>
                <Text style={{color: activeMenu ? COLORS.danger : COLORS.SomeColor, fontSize: 12, paddingTop: 2}}>Сервисы</Text>
            </TouchableOpacity>
        </View>
        
    </View>
    )
}

const styles = StyleSheet.create({
    fixedBottom: {
        position: 'absolute',
        left: 0,
        right: 0,
        zIndex: 2,
        bottom: 0,
    },
})

export default Nav;