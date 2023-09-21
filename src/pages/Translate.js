import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, StyleSheet, TextInput } from 'react-native';
import {COLORS, SIZES, } from '../../constants/constant';
import {useState} from 'react'
import icon from '../img/icon.png';
import back from '../img/back.png';
import go from '../img/go.png';
import change from '../img/change.png';
import someone from '../img/someone.png';
import cards from '../img/cards.png';
import world from '../img/world.png';
import QR from '../img/qr3.png';
import account from '../img/sign-account.png';

const Translate = ({navigation}) => {
    const GoBack = () => {
        navigation.navigate('Главная');
    }
    const HandlePressToClient = () => {
        navigation.navigate('ToKaspiClient');
    }
    const [activeTab, setActiveTab] = useState('tab1');
    return (
        <View style={{flex: 1, paddingTop: 60}}>
            <View>
                <View style={{width: '100%', backgroundColor: COLORS.primary, height: 60}}>
                    <View style={{flex: 1, flexDirection: "row", justifyContent: 'space-between', alignItems: 'center'}}>
                        <TouchableOpacity onPress={GoBack} style={{paddingLeft: 10}}>
                            <Image source={back} style={{width: 30, height: 30}}></Image>
                        </TouchableOpacity>
                        <View style={{flex: 1, paddingRight: 30, flexDirection: "row", justifyContent: 'center', alignItems: 'center'}}>
                            <Image source={icon} style={{width: 32, height: 32, marginRight: 10}}></Image>
                            <Text style={{color: COLORS.TextMain, fontSize: 20, fontWeight: 'bold'}}>Мой Банк</Text>
                        </View>
                    </View>
                </View>
                <View style={{flexDirection: 'row', padding: 10, backgroundColor: COLORS.primary, height: 50, justifyContent: 'center', alignItems: 'center', marginTop: -0}}>
                     <View style={{flex: 1, flexDirection: 'row', borderColor: COLORS.danger, borderWidth: 1, justifyContent: 'space-around', alignItems: 'center'}}>
                     <TouchableOpacity 
                        onPress={() => setActiveTab('tab1')} 
                        style={{
                            flex: 1, 
                            paddingHorizontal: 10, 
                            alignItems: 'center', 
                            borderRightWidth: 1, 
                            borderRightColor: COLORS.danger, 
                            backgroundColor: activeTab === 'tab1' ? COLORS.danger : 'transparent'
                        }}
                        >
                        <Text  style={{ color: activeTab === 'tab1' ? COLORS.primary : COLORS.danger, paddingVertical: 5}}>МОИ ПЕРЕВОДЫ</Text>
                        </TouchableOpacity>

                        <TouchableOpacity 
                        onPress={() => setActiveTab('tab2')} 
                        style={{
                            flex: 1, 
                            paddingHorizontal: 10, 
                            alignItems: 'center', 
                            borderRightWidth: 1, 
                            borderRightColor: COLORS.danger, 
                            backgroundColor: activeTab === 'tab2' ? COLORS.danger : 'transparent'
                        }}
>
                        <Text style={{paddingVertical: 5,  color: activeTab === 'tab1' ? COLORS.danger : COLORS.primary,}}>ИСТОРИЯ</Text>
                        </TouchableOpacity>
                 </View>
                </View>
            </View>

            {activeTab === 'tab1' && <ScrollView  style={{flex: 1}}>
            <TouchableOpacity style={{backgroundColor: COLORS.primary, height: 65,  padding: 10, marginTop: 10}}>
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10}}>
                    <View>
                        <Image source={change} style={{width: 30, height: 30, }}></Image>
                    </View>
                    <View style={{flex: 1, marginLeft: 20}}>
                        <Text style={{fontSize: 18, paddingBottom: 4, color: '#4A4A4A'}}>Между своими счетами</Text>
                    </View>
                    <View>
                         <Image source={go} style={{width: 20, height: 20}}></Image>
                    </View>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={HandlePressToClient} style={{backgroundColor: COLORS.primary, height: 65,  padding: 10, marginTop: 1}}>
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10}}>
                    <View>
                        <Image source={someone} style={{width: 35, height: 35, }}></Image>
                    </View>
                    <View style={{flex: 1, marginLeft: 20}}>
                        <Text style={{fontSize: 18, paddingBottom: 4, color: '#4A4A4A'}}>Клиенту Kaspi</Text>
                        <Text style={{fontSize: 12, paddingBottom: 4, color: '#B9B9B9'}}>На карту Kaspi Gold</Text>
                        
                    </View>
                    <View>
                         <Image source={go} style={{width: 20, height: 20}}></Image>
                    </View>
                </View>
            </TouchableOpacity>


            <TouchableOpacity style={{backgroundColor: COLORS.primary, height: 65,  padding: 10, marginTop: 1}}>
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10}}>
                    <View>
                        <Image source={cards} style={{width: 35, height: 35, }}></Image>
                    </View>
                    <View style={{flex: 1, marginLeft: 20}}>
                        <Text style={{fontSize: 18, paddingBottom: 4, color: '#4A4A4A'}}>Карта другого банка</Text>
                        <Text style={{fontSize: 12, paddingBottom: 4, color: '#B9B9B9'}}>С карты на карту</Text>
                        
                    </View>
                    <View>
                         <Image source={go} style={{width: 20, height: 20}}></Image>
                    </View>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={{backgroundColor: COLORS.primary, height: 65,  padding: 10, marginTop: 1}}>
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10}}>
                    <View>
                        <Image source={world} style={{width: 35, height: 35, }}></Image>
                    </View>
                    <View style={{flex: 1, marginLeft: 20}}>
                        <Text style={{fontSize: 18, paddingBottom: 4, color: '#4A4A4A'}}>Междунородные переводы</Text>
                        <Text style={{fontSize: 12, paddingBottom: 4, color: '#B9B9B9'}}>По номеру карта или телефона</Text>
                        
                    </View>
                    <View>
                         <Image source={go} style={{width: 20, height: 20}}></Image>
                    </View>
                </View>
            </TouchableOpacity>

            <TouchableOpacity  style={{backgroundColor: COLORS.primary, height: 65,  padding: 10, marginTop: 1}}>
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10}}>
                    <View>
                        <Image source={QR} style={{width: 35, height: 35, }}></Image>
                    </View>
                    <View style={{flex: 1, marginLeft: 20}}>
                        <Text style={{fontSize: 18, paddingBottom: 4, color: '#4A4A4A'}}>Kaspi QR</Text>
                        <Text style={{fontSize: 12, paddingBottom: 4, color: '#B9B9B9'}}>Сканируйте и платите</Text>
                        
                    </View>
                    <View>
                         <Image source={go} style={{width: 20, height: 20}}></Image>
                    </View>
                </View>
            </TouchableOpacity> 
            </ScrollView> }

            {/* second tab */}
            {activeTab === 'tab2' &&  <ScrollView  style={{flex: 1}}>
            {/* <TouchableOpacity style={{backgroundColor: COLORS.primary, height: 65,  padding: 10, marginTop: 10}}>
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10}}>
                    <View>
                        <Image source={change} style={{width: 30, height: 30, }}></Image>
                    </View>
                    <View style={{flex: 1, marginLeft: 20}}>
                        <Text style={{fontSize: 18, paddingBottom: 4, color: '#4A4A4A'}}>Между своими счетами</Text>
                    </View>
                    <View>
                         <Image source={go} style={{width: 20, height: 20}}></Image>
                    </View>
                </View>
            </TouchableOpacity> */}
            <View><View>
                <Text></Text>
            </View>
                <Text></Text>
            </View>

            <Text style={{fontSize: 14, paddingBottom: 4, color: '#4A4A4A', marginLeft: 10}}>16 сенятря</Text>
            <TouchableOpacity  style={{backgroundColor: COLORS.primary, height: 65,  padding: 10, marginTop: 1}}>
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10}}>
                    <View>
                        <Image source={account} style={{width: 35, height: 35, }}></Image>
                    </View>
                    <View style={{flex: 1, marginLeft: 20}}>
                        <Text style={{fontSize: 16, paddingBottom: 2, color: '#4A4A4A'}}>Kaspi Gold</Text>
                        <Text style={{fontSize: 16, paddingBottom: 2, color: '#4A4A4A'}}><Text style={{color: COLORS.danger, fontWeight: 'bold'}}>→</Text> Марат А.</Text>
                        <Text style={{fontSize: 12, paddingBottom: 2, color: '#B9B9B9'}}>Клиенту Kaspi</Text>
                        
                    </View>
                    <View>
                         {/* <Image source={go} style={{width: 20, height: 20}}></Image> */}
                         <Text style={{fontSize: 16, paddingBottom: 4, color: '#4A4A4A'}}>500 000 ₸</Text>
                    </View>
                </View>
            </TouchableOpacity> 
            <TouchableOpacity  style={{backgroundColor: COLORS.primary, height: 65,  padding: 10, marginTop: 3}}>
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10}}>
                    <View>
                        <Image source={account} style={{width: 35, height: 35, }}></Image>
                    </View>
                    <View style={{flex: 1, marginLeft: 20}}>
                        <Text style={{fontSize: 16, paddingBottom: 2, color: '#4A4A4A'}}>Kaspi Gold</Text>
                        <Text style={{fontSize: 16, paddingBottom: 2, color: '#4A4A4A'}}><Text style={{color: COLORS.danger, fontWeight: 'bold'}}>→</Text> Назгулим И.</Text>
                        <Text style={{fontSize: 12, paddingBottom: 2, color: '#B9B9B9'}}>Клиенту Kaspi</Text>
                        
                    </View>
                    <View>
                         {/* <Image source={go} style={{width: 20, height: 20}}></Image> */}
                         <Text style={{fontSize: 16, paddingBottom: 4, color: '#4A4A4A'}}>470 000 ₸</Text>
                    </View>
                </View>
            </TouchableOpacity> 
            </ScrollView> }
        </View>
    )
}

const style = StyleSheet.create({
    active: {
        backgroundColor: COLORS.danger,
        justifyContent: 'center',
        alignItems: 'center',
        color: COLORS.primary
    }
})

export default Translate;