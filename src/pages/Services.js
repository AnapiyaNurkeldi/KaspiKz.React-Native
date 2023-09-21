import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import {COLORS, SIZES } from '../../constants/constant';
import icon from '../img/icon.png';
import go from '../img/go.png';
import account from '../img/sign-account.png';
import BannerImageBoot from '../img/banner_boots.jpg';
import BannerFora from '../img/fora.jpg';
import BannerKaspi from '../img/kaspi.jpg';
import MyBank from '../img/myBank.png';
import Payments from '../img/payments.png';
import change from '../img/change.png';
import Cart from '../img/cart.png';
import Bag from '../img/bag.png';
import Govorment from '../img/govorment.png';
import Adv from '../img/adv.png';
import gift from '../img/gift.png';
import gid from '../img/gid.png';
import location from '../img/location.png';
import Magnum from '../img/magnum.png';
import Arrow from '../img/arrow.png';
import { useNavigation } from '@react-navigation/native';

const Services = () => {
    const navigation = useNavigation();
    const HandlePress = () => {
        console.log('clicked')
    }
    const HandlePressMyBank = () => {
        navigation.navigate('MyBank')
        console.log('navigation');
    }
    const HandlePressPayments = () => {
        navigation.navigate('Payments')
    }
    const HandlePressTranslations = () => {
        navigation.navigate('Translate')
    }
    return (
        <ScrollView style={{flex: 1, paddingTop: 60}}>
             <View style={{width: '100%', backgroundColor: COLORS.primary, height: 60}}>
                <View style={{flex: 1, flexDirection: "row", justifyContent: 'space-between', alignItems: 'center'}}>
                    <View style={{flex: 1, paddingRight: 30, flexDirection: "row", justifyContent: 'center', alignItems: 'center', marginLeft: 120,}}>
                        <Image source={icon} style={{width: 30, height: 30, marginRight: 10}}></Image>
                        <Text style={{color: COLORS.TextMain, fontSize: 18, fontWeight: 'bold'}}>Сервисы</Text>
                    </View>
                    <View style={{paddingRight: 20,  flexDirection: "row",}}>
                        <View style={{paddingRight: 6, paddingHorizontal: 10, paddingVertical: 3,}}><Text style={{fontSize: SIZES.font}}>Каз</Text></View>
                        <View style={{borderWidth: 1, paddingHorizontal: 8, paddingVertical: 3, borderColor: COLORS.danger, borderRadius: 20, }}><Text style={{fontSize: SIZES.font, color: COLORS.danger}}>Рус</Text></View>
                    </View>
                </View>
            </View>
            <TouchableOpacity style={{backgroundColor: COLORS.primary, height: 70,  padding: 10, marginTop: 1}}>
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10}}>
                    <View>
                        <Image source={account} style={{width: 50, height: 50,borderRadius: 8,}}></Image>
                    </View>
                    <View style={{flex: 1, marginLeft: 10}}>
                        <Text style={{fontSize: 20, paddingBottom: 4, color: '#4A4A4A'}}>Вход/Регистрация</Text>
                    </View>
                    <View>
                         <Image source={go} style={{width: 20, height: 20}}></Image>
                    </View>
                </View>
            </TouchableOpacity>

            <View style={styles.main}>
                <View style={styles.maininside}>
                
                <TouchableOpacity onPress={HandlePress} style={styles.mainThings}>
                        <Image source={Cart} style={{ width: 35, height: 35 }}></Image>
                         <Text style={styles.MainText}>Магазин</Text>
                     </TouchableOpacity>
                    <TouchableOpacity onPress={HandlePressMyBank} style={styles.mainThings}>
                        <Image source={MyBank} style={{ width: 35, height: 35, bottom: 5 }}></Image>
                         <Text style={styles.MainText}>Мой Банк</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={HandlePressPayments} style={styles.mainThings}>
                        <Image source={Payments} style={{ width: 35, height: 35 }}></Image>
                         <Text style={styles.MainText}>Платежи</Text>
                     </TouchableOpacity>
                     <TouchableOpacity onPress={HandlePressTranslations} style={styles.mainThings}>
                        <Image source={change} style={{ width: 35, height: 35 }}></Image>
                         <Text style={styles.MainText}>Переводы</Text>
                     </TouchableOpacity>
                     <TouchableOpacity onPress={HandlePress} style={styles.mainThings}>
                        <Image source={gift} style={{ width: 34, height: 34 }}></Image>
                         <Text style={styles.MainText}>Акции</Text>
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
                     <TouchableOpacity onPress={HandlePress} style={styles.mainThings}>
                        <Image source={gid} style={{ width: 40, height: 40 }}></Image>
                         <Text style={styles.MainText}>Гид</Text>
                     </TouchableOpacity>
                     <TouchableOpacity onPress={HandlePress} style={styles.mainThings}>
                        <Image source={location} style={{ width: 40, height: 40 }}></Image>
                         <Text style={styles.MainText}>Kaspi Maps</Text>
                     </TouchableOpacity>
                     <View style={styles.mainThings}></View><View style={styles.mainThings}></View>
                </View>
            </View>

            <View style={{backgroundColor: COLORS.primary, width: '100%', height: 180, top: 10}}>
                <View>
                    <Text style={{color: COLORS.TextMain, fontSize: 18, fontWeight: 'bold', paddingLeft: 20, paddingTop: 15,}}>Лайкни сторис если это читаешь XD</Text>
                </View>
                <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', height: 60, padding: 15, }}>
                    <View style={{backgroundColor: COLORS.gray, width: 40, height: 40, justifyContent: 'center', alignItems: 'center', borderRadius: '100%'}}>
                        <Image source={Magnum} style={{ width: 30, height: 30 }}></Image>
                    </View>
                    <View style={{flex: 1, paddingLeft: 20, justifyContent: 'center', marginTop: 10}}>
                        <Text style={{fontSize: SIZES.font}}>Magnum</Text>
                        <Text style={{fontSize: 12, color: COLORS.SomeColor}}>Продукты питания с бесплатной доставкой</Text>
                    </View>
                    <View style={{alignItems: 'center', justifyContent: 'center'}}>
                        <Image source={Arrow} style={{ width: 25, height: 25}}></Image>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', height: 70, padding: 15,}}>
                    <View style={{borderWidth: 1, borderColor: COLORS.SomeColor, width: 40, height: 40, justifyContent: 'center', alignItems: 'start', borderRadius: 12, }}>
                        <Text style={{marginLeft: 3,  fontSize: 8, color: '#F00620', fontWeight: 'bold'}}>CHOCO</Text>
                        <Text style={{marginLeft: 3,  fontSize: 8, color: '#F00620', fontWeight: 'bold'}}>FOOD</Text>
                    </View>
                    <View style={{flex: 1, paddingLeft: 20, justifyContent: 'center'}}>
                        <Text style={{fontSize: SIZES.font}}>CHOCOFOOD</Text>
                        <Text style={{fontSize: 12, color: COLORS.SomeColor}}>Сервис доставки еды</Text>
                    </View>
                    <View style={{alignItems: 'center', justifyContent: 'center'}}>
                        <Image source={Arrow} style={{ width: 25, height: 25}}></Image>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.header}>
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
        </ScrollView>
    );
}

const styles = StyleSheet.create({
   
    main: {
        width: '100%',
        height: 260,
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
        marginTop: 20,
        position: 'relative',
        flexDirection: 'column',
        backgroundColor: COLORS.primary,
        height: 180,
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

export default Services;