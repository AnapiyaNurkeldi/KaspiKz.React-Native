import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity, TextInput, Animated, StyleSheet, ScrollView } from 'react-native';
import { COLORS, SIZES } from '../../../constants/constant';
import back from '../../img/back.png';
import icon from '../../img/icon.png';
import gold from '../../img/goldd.jpg';
import QR from '../../img/qr3.png';
import someonerede from '../../img/someonered.png';



const ToKaspiClient = ({navigation}) => {
    const GoBack = () => {
      navigation.navigate('Translate');
    };
    const [isFocused, setIsFocused] = useState(false);
    const [phone, setPhone] = useState('');
    
    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => setIsFocused(false);

    const getName = (phone) => {
        if (phone === '87001050594') return 'Нуркелди А.';
        if (phone === '+7 (707) 903-33-69') return 'Марат А.';
        if (phone === '87075847272') return 'Назгулим И.';
        if (phone === '+7 (771) 881-85-58') return 'Кәусар Ә.';
        return null;
      };
    const [amount, setAmount] = useState('0');
    const nameToShow = getName(phone);

    return (
        <ScrollView style={{flex: 1, marginTop: 60}}>
            <View style={{width: '100%', backgroundColor: COLORS.primary, height: 60}}>
                    <View style={{flex: 1, flexDirection: "row", justifyContent: 'space-between', alignItems: 'center'}}>
                        <TouchableOpacity onPress={GoBack} style={{paddingLeft: 10}}>
                            <Image source={back} style={{width: 30, height: 30}}></Image>
                        </TouchableOpacity>
                        <View style={{flex: 1, paddingRight: 30, flexDirection: "row", justifyContent: 'center', alignItems: 'center'}}>
                           <Text style={{color: COLORS.TextMain, fontSize: 20, fontWeight: 'bold'}}>Клиенту Kaspi</Text>
                        </View>
                    </View>
                </View>
                <View style={{backgroundColor: COLORS.primary, height: 70,  padding: 10, marginTop: 10}}>
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10}}>
                    <View>
                        <Image source={gold} style={{width: 60, height: 60,borderRadius: 8,}}></Image>
                    </View>
                    <View style={{flex: 1, marginLeft: 10}}>
                        <Text style={{fontSize: 19, paddingBottom: 4, color: '#4A4A4A'}}>Kaspi Gold</Text>
                   </View>
                    <View>
                        <Text style={{fontSize: 19, color: "#4A4A4A"}}>736 025.64 ₸</Text>
                    </View>
                </View>
            </View>

            <View style={{flexDirection: 'row', padding: 10, backgroundColor: COLORS.gray, height: 50, justifyContent: 'center', alignItems: 'center', marginTop: 30, }}>
                     <View style={{flex: 1, flexDirection: 'row', borderColor: COLORS.danger, borderWidth: 1, justifyContent: 'space-around', alignItems: 'center', borderRadius: 6}}>
                        <TouchableOpacity style={{flex: 1, paddingHorizontal: 10, alignItems: 'center', borderRightWidth: 1, borderRightColor: COLORS.danger, backgroundColor: COLORS.danger, borderLeftRadius: 6}}>
                            <Text style={{color: COLORS.primary, paddingVertical: 5, }}>Телефон</Text>
                        </TouchableOpacity>
                       <TouchableOpacity style={{flex: 1,borderRightWidth: 1, borderRightColor: COLORS.danger, backgroundColor: COLORS.gray, borderLeftRadius: 6, paddingHorizontal: 10, alignItems: 'center'}}>
                            <Text style={{paddingVertical: 5, color: COLORS.danger}}>Карта</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{flex: 1, flexDirection: 'row', paddingHorizontal: 10, alignItems: 'center', justifyContent: 'center'}}>
                            <Image source={QR} style={{width: 16, height: 16, marginRight: 5}}></Image>
                            <Text style={{paddingVertical: 5, color: COLORS.danger}}>Kaspi QR</Text>
                        </TouchableOpacity>
             </View>
             </View>
       <View >
       <View style={{ padding: 20, backgroundColor: COLORS.primary, height: 70}}>
                <Text style={{ 
                    position: 'absolute', 
                    top: isFocused || phone !== '' ? 0 : 20, 
                    left: 20,
                    marginTop: 7,
                    color: isFocused ? '#C5C5C7' : '#C5C5C7',
                    fontSize: isFocused ? 12 : 18
                 }}>
                Телефон получателя
                </Text>
                <TextInput 
                style={{ 
                    borderBottomWidth: 1, 
                    borderBottomColor: isFocused ? '#00000' : '#FFFFFF',
                    height: 40,
                    marginTop: 0,
                    fontSize: 18,
                    color: COLORS.TextMain
                }}
                placeholder={isFocused ? '+7 ( ) - -' : ''}
                placeholderTextColor={isFocused ? '#000000' : '#C5C5C7'}          
                keyboardType='numeric'
                onChangeText={setPhone}
                onFocus={handleFocus}
                onBlur={handleBlur}
                />
            </View>
            <View style={{flex: 1, flexDirection: 'row'}}>
                <Image source={someonerede} style={{width: 30, height: 30, marginLeft: 380, marginTop: -50}}></Image>
            </View>
       </View>


       { nameToShow && (
             <View style={{backgroundColor: '#DDAC61'}}>
                 <View style={{padding: 15}}>
                    <Text style={{color: COLORS.primary, fontSize: 18}}>
                        {nameToShow}
                    </Text>
                 <Text style={{color: COLORS.primary, fontSize: 12, marginTop: 4}}>
                    Деньги поступят на карту Kaspi Gold
                 </Text>
                </View>
            </View>
        )}

        <View style={{padding: 20, marginTop: 20, backgroundColor: COLORS.primary, height: 70, alignContent: 'center', justifyContent: 'center', alignItems: 'center'}}>
            <TextInput 
                style={{ 
                    borderBottomWidth: 1, 
                    borderBottomColor: amount !== '0' ? '#00000' : '#FFFFFF',
                    height: 40,
                    marginTop: 0,
                    fontSize: 30,
                    color: COLORS.TextMain
                }}
                placeholder={amount !== '0' ? '' : '0 ₸'}
                value={`${amount} ₸` }
                onChangeText={(text) => {
                    const cleanText = text.replace(/[^0-9]/g, '').trim();
                    if (cleanText === '0') {
                        setAmount('0');
                    } else {
                        const formattedText = parseInt(cleanText.replace(/^0+/, '')).toLocaleString('ru-RU');
                        setAmount(formattedText);
                    }
                }}
                
                keyboardType='numeric'
                />
                {/* <Text style={{fontSize: 19, color: "#4A4A4A"}}>{`${amount} ₸`}</Text> */}
            </View>

                <View style={{paddingTop: 25, flexDirection: 'row', justifyContent: 'center', padding: 10}}>
                    <Text style={{color: '#A8A8A8', fontSize: 13}}>Комиссия 0 ₸</Text>
                </View>

                <View style={{paddingTop: 30, flexDirection: 'row', justifyContent: 'center', padding: 10}}>
                    <TouchableOpacity style={{borderColor: '#0089D0', backgroundColor: '#0089D0', borderWidth: 1, borderRadius: 2, justifyContent: 'center', alignItems: 'center', padding: 10, paddingVertical: 20, width: '95%'}}>
                        <Text style={{color: COLORS.primary, fontSize: 18}}>Перевести {amount} ₸</Text>
                    </TouchableOpacity>
                </View>
    </ScrollView>
    );
}


export default ToKaspiClient;