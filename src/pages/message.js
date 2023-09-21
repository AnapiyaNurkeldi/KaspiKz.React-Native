import React from 'react';
import { Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import { COLORS, SIZES } from '../../constants/constant';
import icon from '../img/icon.png';
import goldd from '../img/goldd.jpg';
import go from '../img/go.png';
import bonus from '../img/bonus.jpg';

const Message = () => {
    return (
        <View  style={{flex: 1, paddingTop: 60}}>
            <View style={{width: '100%', backgroundColor: COLORS.primary, height: 60}}>
                <View style={{flex: 1, flexDirection: "row", justifyContent: 'space-between', alignItems: 'center'}}>
                    <View style={{flex: 1, paddingRight: 30, flexDirection: "row", justifyContent: 'center', alignItems: 'center'}}>
                        <Image source={icon} style={{width: 32, height: 32, marginRight: 10}}></Image>
                        <Text style={{color: COLORS.TextMain, fontSize: 20, fontWeight: 'bold'}}>Сообщения</Text>
                    </View>
                </View>
            </View>

          <ScrollView>
          <TouchableOpacity style={{backgroundColor: COLORS.primary, height: 80,  padding: 10, marginTop: 1}}>
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10}}>
                    <View >
                        <Image source={goldd} style={{width: 60, height: 60,borderRadius: 8,}}></Image>
                    </View>
                    <View style={{flex: 1, marginLeft: 10}}>
                        <Text style={{fontSize: 20, paddingBottom: 4, color: '#4A4A4A'}}>Kaspi Gold</Text>
                        <Text style={{color: COLORS.SomeColor, fontSize: 13.5}}>Покупка: 560 ₸</Text>
                        <Text style={{color: COLORS.SomeColor, fontSize: 13.5}}>Magnum super...</Text>
                    </View>
                    <View style={{paddingBottom: 15}}>
                        <Text style={{fontSize: 14,marginBottom: 10, color: "#9F9F9F"}}>2:40 <Image source={go} style={{width: 20, height: 20}}></Image></Text>
                    </View>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={{backgroundColor: COLORS.primary, height: 80,  padding: 10, marginTop: 1}}>
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10}}>
                    <View >
                        <Image source={bonus} style={{width: 60, height: 60,borderRadius: 8,}}></Image>
                    </View>
                    <View style={{flex: 1, marginLeft: 10}}>
                        <Text style={{fontSize: 20, paddingBottom: 4, color: '#4A4A4A'}}>Kaspi Бонус</Text>
                        <Text style={{color: COLORS.SomeColor, fontSize: 13.5}}>Начисление: 1.70 Б</Text>
                    </View>
                    <View style={{paddingBottom: 15, alignContent: 'center', alignItems: 'center'}}>
                        <Text style={{fontSize: 14,marginBottom: 12, color: "#9F9F9F"}}>2:40 <Image source={go} style={{width: 20, height: 20}}></Image></Text>
                    </View>
                </View>
            </TouchableOpacity>
          </ScrollView>
        </View>
    )
}

export default Message;