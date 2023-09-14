import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import icon from '../img/icon.png';
import back from '../img/back.png';
import gold from '../img/goldd.jpg';
import bonus from '../img/bonus.jpg';
import { COLORS, SIZES } from '../../constants/constant';
const MyBank = ({navigation}) => {
    const GoBack = () => {
        navigation.navigate('Главная');
    }
    return (
        <View style={{flex: 1, paddingTop: 60}}>
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

            <View style={{backgroundColor: COLORS.primary, height: 80,  padding: 10, marginTop: 10}}>
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10}}>
                    <View>
                        <Image source={gold} style={{width: 60, height: 60,borderRadius: 8,}}></Image>
                    </View>
                    <View style={{flex: 1, marginLeft: 10}}>
                        <Text style={{fontSize: 20, paddingBottom: 4, color: '#4A4A4A'}}>Kaspi Gold</Text>
                        <Text style={{color: COLORS.SomeColor, fontSize: 13}}>*6543</Text>
                    </View>
                    <View style={{paddingBottom: 15}}>
                        <Text style={{fontSize: 19, color: "#4A4A4A"}}>895 810,43 ₸</Text>
                    </View>
                </View>
            </View>

            <View style={{backgroundColor: COLORS.primary, height: 80,  padding: 10, marginTop: 10}}>
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10}}>
                    <View style={{borderWidth: 1, borderColor: COLORS.SomeColor, borderRadius: 4, alignItems: "center", justifyContent: "center", paddingBottom: 0, paddingRight: 14, paddingLeft: 15}}>
                        <Text style={{color: "#0088CF", fontSize: 35, bottom: 3}}>+</Text>
                    </View>
                    <View style={{flex: 1, marginLeft: 10}}>
                        <Text style={{fontSize: 16, paddingBottom: 4, color: '#0088CF'}}>Открыть Kaspi Red</Text>
                        {/* <Text style={{color: COLORS.SomeColor, fontSize: 13}}>*6543</Text> */}
                    </View>
                </View>
            </View>

            <View style={{backgroundColor: COLORS.primary, height: 80,  padding: 10, marginTop: 10}}>
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10}}>
                    <View style={{borderWidth: 1, borderColor: COLORS.SomeColor, borderRadius: 4, alignItems: "center", justifyContent: "center", paddingBottom: 0, paddingRight: 14, paddingLeft: 15}}>
                        <Text style={{color: "#0088CF", fontSize: 35, bottom: 3}}>+</Text>
                    </View>
                    <View style={{flex: 1, marginLeft: 10}}>
                        <Text style={{fontSize: 16, paddingBottom: 4, color: '#0088CF'}}>Открыть Kaspi Депозит</Text>
                        {/* <Text style={{color: COLORS.SomeColor, fontSize: 13}}>*6543</Text> */}
                    </View>
                </View>
            </View>
            
            <View style={{backgroundColor: COLORS.primary, height: 80,  padding: 10, marginTop: 10}}>
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10}}>
                    <View>
                        <Image source={bonus} style={{width: 60, height: 60,borderRadius: 8,}}></Image>
                    </View>
                    <View style={{flex: 1, marginLeft: 10}}>
                        <Text style={{fontSize: 20, paddingBottom: 4, color: '#4A4A4A'}}>Kaspi Бонус</Text>
                    </View>
                    <View>
                        <Text style={{fontSize: 19}}>32,06 <Text style={{ fontSize: 17,}}>Б</Text></Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default MyBank;