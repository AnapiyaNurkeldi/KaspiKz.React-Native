import {React, useState} from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import {COLORS, SIZES } from '../../constants/constant';
import icon from '../img/icon.png';
import back from '../img/back.png';
import phone from '../img/phone.png';
import go from '../img/go.png';
import homepayments from '../img/home-payments.png';
import car from  '../img/car.png';
import myBank from '../img/myBank.png';
import book from '../img/book.png';
import govorment from '../img/govorment.png';
import money from '../img/money.png';
import billpayments from '../img/bill-payments.png';

const Payments = ({navigation}) => {
    const GoBack = () => {
        navigation.navigate('Главная');
    }
    const [activeTab, setActiveTab] = useState('tab1');
    return (
      <View style={{flex: 1, paddingTop: 60}}>
          <View style={{width: '100%', backgroundColor: COLORS.primary, height: 60}}>
                <View style={{flex: 1, flexDirection: "row", justifyContent: 'space-between', alignItems: 'center'}}>
                    <TouchableOpacity onPress={GoBack} style={{paddingLeft: 10}}>
                            <Image source={back} style={{width: 30, height: 30}}></Image>
                    </TouchableOpacity>
                    <View style={{flex: 1, flexDirection: "row", justifyContent: 'center', alignItems: 'center', marginLeft: 30,}}>
                        <Image source={icon} style={{width: 30, height: 30, marginRight: 10}}></Image>
                        <Text style={{color: COLORS.TextMain, fontSize: 18, fontWeight: 'bold'}}>Платежи</Text>
                    </View>
                    <View style={{paddingRight: 20,  flexDirection: "row",}}>
                        <Text style={{color: COLORS.danger}}>Алматы</Text>  
                    </View>
                </View>
        </View>
        <View style={{flexDirection: 'row', padding: 10, backgroundColor: COLORS.gray, height: 50, justifyContent: 'center', alignItems: 'center', marginBottom: 20, backgroundColor: COLORS.primary }}>
                     <View style={{flex: 1, flexDirection: 'row', borderColor: COLORS.danger, borderWidth: 1, justifyContent: 'space-around', alignItems: 'center', borderRadius: 6}}>
                        <TouchableOpacity onPress={() => setActiveTab('tab1')} style={{flex: 1, paddingHorizontal: 10, alignItems: 'center', borderRightWidth: 1, borderRightColor: COLORS.danger, backgroundColor: COLORS.danger, borderLeftRadius: 6,  backgroundColor: activeTab === 'tab1' ? COLORS.danger : 'transparent'}}>
                            <Text style={{color: activeTab === 'tab1' ? COLORS.primary : COLORS.danger, paddingVertical: 5, }}>ВСЕ</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={{  flex: 1,borderRightWidth: 1, borderRightColor: COLORS.danger, borderLeftRadius: 6, paddingHorizontal: 10, alignItems: 'center', backgroundColor: activeTab === 'tab2' ? COLORS.danger : 'transparent'}}
                            onPress={() => setActiveTab('tab2')}
                        >
                        <Text style={{paddingVertical: 5, color: activeTab === 'tab2' ? COLORS.primary : COLORS.danger,}}>МОИ ПЛАТЕЖИ</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{flex: 1, flexDirection: 'row', paddingHorizontal: 10, alignItems: 'center', justifyContent: 'center'}}>
                             <Text style={{paddingVertical: 5, color: COLORS.danger}}>ИСТОРИЯ</Text>
                        </TouchableOpacity>
                </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: -10}}>
            <View style={{backgroundColor: COLORS.primary}}>
                <TextInput placeholder='Что хотите оплатить?' style={{borderWidth: 1, padding: 13, maxWidth: '100%', width: 400, borderColor: '#DCDCDC', fontSize: 16, color: '#9C9C9C'}}></TextInput>
            </View>
        </View>

       {activeTab === 'tab1' &&  <ScrollView style={{flex: 1}}>
        <TouchableOpacity style={{backgroundColor: COLORS.primary, height: 65,  padding: 10, marginTop: 10}}>
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10}}>
                    <View>
                        <Image source={phone} style={{width: 35, height: 35, }}></Image>
                    </View>
                    <View style={{flex: 1, marginLeft: 20}}>
                        <Text style={{fontSize: 18, paddingBottom: 4, color: '#4A4A4A'}}>Мобильный</Text>
                    </View>
                    <View>
                         <Image source={go} style={{width: 20, height: 20}}></Image>
                    </View>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={{backgroundColor: COLORS.primary, height: 65,  padding: 10, marginTop: 1}}>
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10}}>
                    <View style={{left: 5}}>
                        <Image source={homepayments} style={{width: 20, height: 25, }}></Image>
                    </View>
                    <View style={{flex: 1, marginLeft: 20}}>
                        <Text style={{fontSize: 18, marginLeft: 16, paddingBottom: 4, color: '#4A4A4A'}}>Коммуналка и телефон</Text>
                    </View>
                    <View>
                         <Image source={go} style={{width: 20, height: 20}}></Image>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor: COLORS.primary, height: 65,  padding: 10, marginTop: 1}}>
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10}}>
                    <View style={{left: 5}}>
                        <Image source={car} style={{width: 25, height: 25, }}></Image>
                    </View>
                    <View style={{flex: 1, marginLeft: 20}}>
                        <Text style={{fontSize: 18, marginLeft: 12, paddingBottom: 4, color: '#4A4A4A'}}>Транспорт</Text>
                    </View>
                    <View>
                         <Image source={go} style={{width: 20, height: 20}}></Image>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor: COLORS.primary, height: 65,  padding: 10, marginTop: 1}}>
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10}}>
                    <View style={{left: 5}}>
                        <Image source={myBank} style={{width: 25, height: 25, }}></Image>
                    </View>
                    <View style={{flex: 1, marginLeft: 20}}>
                        <Text style={{fontSize: 18, marginLeft: 12, paddingBottom: 4, color: '#4A4A4A'}}>Интернет и ТВ</Text>
                    </View>
                    <View>
                         <Image source={go} style={{width: 20, height: 20}}></Image>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor: COLORS.primary, height: 65,  padding: 10, marginTop: 1}}>
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10}}>
                    <View style={{left: 5}}>
                        <Image source={book} style={{width: 25, height: 25, }}></Image>
                    </View>
                    <View style={{flex: 1, marginLeft: 20}}>
                        <Text style={{fontSize: 18, marginLeft: 12, paddingBottom: 4, color: '#4A4A4A'}}>Образование</Text>
                    </View>
                    <View>
                         <Image source={go} style={{width: 20, height: 20}}></Image>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor: COLORS.primary, height: 65,  padding: 10, marginTop: 1}}>
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10}}>
                    <View style={{left: 5}}>
                        <Image source={govorment} style={{width: 25, height: 25, }}></Image>
                    </View>
                    <View style={{flex: 1, marginLeft: 20}}>
                        <Text style={{fontSize: 18, marginLeft: 12, paddingBottom: 4, color: '#4A4A4A'}}>Штрафы и налоги</Text>
                    </View>
                    <View>
                         <Image source={go} style={{width: 20, height: 20}}></Image>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor: COLORS.primary, height: 65,  padding: 10, marginTop: 1}}>
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10}}>
                    <View style={{left: 5}}>
                        <Image source={money} style={{width: 25, height: 25, }}></Image>
                    </View>
                    <View style={{flex: 1, marginLeft: 20}}>
                        <Text style={{fontSize: 18, marginLeft: 12, paddingBottom: 4, color: '#4A4A4A'}}>Финансовые услуги</Text>
                    </View>
                    <View>
                         <Image source={go} style={{width: 20, height: 20}}></Image>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor: COLORS.primary, height: 65,  padding: 10, marginTop: 1}}>
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10}}>
                    <View style={{left: 5}}>
                        <Image source={billpayments} style={{width: 25, height: 25, }}></Image>
                    </View>
                    <View style={{flex: 1, marginLeft: 20}}>
                        <Text style={{fontSize: 18, marginLeft: 12, paddingBottom: 4, color: '#4A4A4A'}}>Билеты</Text>
                    </View>
                    <View>
                         <Image source={go} style={{width: 20, height: 20}}></Image>
                    </View>
                </View>
            </TouchableOpacity>
        </ScrollView>}
        {activeTab === 'tab2' &&   <ScrollView style={{flex: 1}}>
                <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 20}}>
                    <Text style={{fontSize: 18, color: COLORS.danger}}>Пусто</Text>
                </View>
        </ScrollView> }
      </View>
    )
}

export default Payments;