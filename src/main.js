import React from 'react';
import { useState } from 'react';
import { StyleSheet, TextInput, View, Image, Text, ScrollView, TouchableOpacity} from 'react-native';
import { COLORS, SIZES } from '../constants/constant';
import { MaterialIcons } from '@expo/vector-icons';
import BannerImageBoot from './img/banner_boots.jpg';
import BannerFora from './img/fora.jpg';
import BannerKaspi from './img/kaspi.jpg';
import QR from './img/qr3.png';
import MyBank from './img/myBank.png';
import Payments from './img/payments.png';
import change from './img/change.png';
import Cart from './img/cart.png';
import Bag from './img/bag.png';
import Govorment from './img/govorment.png';
import Adv from './img/adv.png';
import Magnum from './img/magnum.png';
import Arrow from './img/arrow.png';


import Nav from './components/nav.js';


const Main = ({navigation}) => {
    
    const HandlePress = () => {
        console.log('clicked')
    }
    const HandlePressQR = () => {
        navigation.navigate('QR')
        console.log('navigation');  
    }
    const HandlePressMyBank = () => {
        navigation.navigate('MyBank')
        console.log('navigation');
    }
    return (
        <View style={{ flex: 1 }}>
            {/* header starts */}
            <View style={styles.header}>
                <TextInput style={styles.searchInput} placeholder="Поиск по Kaspi.kz"></TextInput>
                <MaterialIcons name="search" size={25} color="grey" style={styles.iconStyle} />
                <ScrollView horizontal={true}  showsHorizontalScrollIndicator={false} style={styles.banners}>
                    <View style={styles.banners_inside}>
                        <Image source={BannerImageBoot} style={{ width: 170, height: 120, borderWidth: 1, borderRadius: 10, borderColor: COLORS.gray }}></Image>
                        <Text style={styles.banner_text}>11 сентября - 1 октября</Text>
                    </View>
                    <View style={styles.banners_inside}>
                        <Image source={BannerKaspi} style={{ width: 170, height: 120, borderWidth: 1, borderRadius: 10, borderColor: COLORS.gray }}></Image>
                        <Text style={styles.banner_text}>Только в Kaspi.kz</Text>
                    </View>
                    <View style={styles.banners_inside}>
                        <Image source={BannerFora} style={{ width: 170, height: 120, borderWidth: 1, borderRadius: 10, borderColor: COLORS.gray }}></Image>
                        <Text style={styles.banner_text}>6 февраля - 19 февраля</Text>
                    </View>
                    <View style={styles.banners_inside}>
                        <Image source={BannerKaspi} style={{ width: 170, height: 120, borderWidth: 1, borderRadius: 10, borderColor: COLORS.gray }}></Image>
                        <Text style={styles.banner_text}>Обьявления на Kaspi.kz</Text>
                    </View>
                    <View style={styles.banners_inside}>
                        <Image source={BannerImageBoot} style={{ width: 170, height: 120, borderWidth: 1, borderRadius: 10, borderColor: COLORS.gray }}></Image>
                        <Text style={styles.banner_text}>11 сентября - 1 октября</Text>
                    </View>
                </ScrollView>
            </View>
            {/* header ends */}
            {/* main starts */}
            <View style={styles.main}>
                <View style={styles.maininside}>
                    <TouchableOpacity onPress={HandlePressQR} style={styles.mainThings}>
                        <Image source={QR} style={{ width: 35, height: 35 }}></Image>
                         <Text style={styles.MainText}>Kaspi QR</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={HandlePressMyBank} style={styles.mainThings}>
                        <Image source={MyBank} style={{ width: 35, height: 35, bottom: 5 }}></Image>
                         <Text style={styles.MainText}>Мой Банк</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={HandlePress} style={styles.mainThings}>
                        <Image source={Payments} style={{ width: 35, height: 35 }}></Image>
                         <Text style={styles.MainText}>Платежи</Text>
                     </TouchableOpacity>
                     <TouchableOpacity onPress={HandlePress} style={styles.mainThings}>
                        <Image source={change} style={{ width: 35, height: 35 }}></Image>
                         <Text style={styles.MainText}>Переводы</Text>
                     </TouchableOpacity>
                    
                     <TouchableOpacity onPress={HandlePress} style={styles.mainThings}>
                        <Image source={Cart} style={{ width: 35, height: 35 }}></Image>
                         <Text style={styles.MainText}>Магазин</Text>
                     </TouchableOpacity>
                     <TouchableOpacity onPress={HandlePress} style={styles.mainThings}>
                        <Image source={Bag} style={{ width: 35, height: 35 }}></Image>
                         <Text style={styles.MainText}>Travel</Text>
                   </TouchableOpacity>
                     <TouchableOpacity onPress={HandlePress} style={styles.mainThings}>
                        <Image source={Govorment} style={{ width: 35, height: 35 }}></Image>
                         <Text style={styles.MainText}>Госуслуги</Text>
                    </TouchableOpacity>
                     <TouchableOpacity onPress={HandlePress} style={styles.mainThings}>
                        <Image source={Adv} style={{ width: 35, height: 35 }}></Image>
                         <Text style={styles.MainText}>Объявления</Text>
                     </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity onPress={HandlePress} style={{backgroundColor: COLORS.primary, width: '100%', height: 70, top: 1}}>
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 15}}>
                    <View style={{backgroundColor: COLORS.gray, width: 50, height: 50, justifyContent: 'center', alignItems: 'center', borderRadius: '100%'}}>
                        <Image source={Magnum} style={{ width: 35, height: 35 }}></Image>
                    </View>
                    <View style={{flex: 1, paddingLeft: 10}}>
                        <Text style={{fontSize: SIZES.font}}>Magnum</Text>
                        <Text style={{fontSize: 12, color: COLORS.SomeColor}}>Продукты питания с бесплатной доставкой</Text>
                    </View>
                    <View>
                        <Image source={Arrow} style={{ width: 25, height: 25 }}></Image>
                    </View>
                </View>
            </TouchableOpacity>
            {/* all */}
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ width: '100%', height: 90, top: 2}}>
                {/* inside */}
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 15, backgroundColor: COLORS.primary, width: '100%', height: 90,}}>
                    {/* two */}
                    <TouchableOpacity onPress={HandlePress} style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                        <View style={{backgroundColor: COLORS.danger, paddingRight: 20, paddingLeft: 20, paddingBottom: 15, paddingTop: 15, borderRadius: 10}}>
                            <Text style={{color: COLORS.primary, fontSize: 18, fontWeight: 'bold'}}>RED</Text>
                        </View>
                        <View style={{paddingLeft: 10}}>
                            <Text style={{fontSize: 18}}>Kaspi Red</Text>
                            <Text style={{color: COLORS.SomeColor, paddingTop: 3}}>Рассрочка 0%</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={HandlePress} style={{flex: 1, flexDirection: 'row', alignItems: 'center', marginLeft: 100,}}>
                        <View style={{backgroundColor: '#FED302', paddingRight: 13, paddingLeft: 13, borderRadius: 10}}>
                            <Text style={{color: COLORS.primary, fontSize: 43, }}>〒</Text>
                        </View>
                        <View style={{paddingLeft: 10}}>
                            <Text style={{fontSize: 18}}>Kapi Депозит</Text>
                            <Text style={{color: COLORS.SomeColor, paddingTop: 3}}>Эффективная ставка 15%</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
           {/* <Nav/> */}
        </View>
    )
}

const styles = StyleSheet.create({
   
    main: {
        width: '100%',
        height: 200,
        marginTop: 10,
        backgroundColor: COLORS.primary,
        paddingTop: 20,
        paddingLeft: 20,
    },
    
    maininside: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingTop: 10,
        paddingRight: 20,
      },      
    mainThings: {
        width: '24%', 
        alignItems: 'center',
        paddingBottom: 20,
    },
    MainText: {
        color: COLORS.TextMain, 
        marginTop: 5,    
    },
    header: {
        position: 'relative',
        flexDirection: 'column',
        backgroundColor: COLORS.primary,
        height: 200,
        width: '100%',
        paddingTop: 5,
        paddingRight: 10,   
        paddingLeft: 10,
        alignItems: 'center',
    },
    searchInput: {
        fontSize: SIZES.font,
        // bottom: 70,
        // flex: 1,
        borderRadius: 10,
        width: 360,
        height: 40,
        backgroundColor: COLORS.gray,
        paddingLeft: 35, // Add padding to make space for the icon
        padding: 15,
       
    },
    iconStyle: {
        position: 'absolute',
        paddingRight: 320,
        top: '11%',
        transform: [{ translateY: -9 }]
    },
    banners: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        paddingBottom: 10,
        paddingTop: 10,
        
    },
    
    banners_inside: {
        flex: 1,
        flexDirection: 'Column',
        paddingLeft: 5,
        paddingRight: 8
    },
    banner_text: {
        color: COLORS.SomeColor, 
      
        Right: 20,
        paddingBottom: 0,
        paddingTop: 5,
        fontSize: 12
    }
});

export default Main;
