import * as React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Title } from 'react-native-paper';
import NumberFormat from 'react-number-format';
import Charts from './Charts';


export default function CoinInfo({ route }: any) {
    const coin = route.params.data;
    const dayChange = route.params.dayChange;

    return (
        <View style={{ justifyContent: 'center', margin: 10 }}>
            <View style={styles.top}>
                <View style={{ flexDirection: 'row' }}>
                    <Image style={styles.logo} source={{ uri: coin.image }} />
                    <View style={{ marginLeft: 10 }}>
                        <Title>{coin.name}</Title>
                        <Text> {coin.symbol.toUpperCase()} </Text>
                    </View>
                </View>

                <View>
                    <Title style={{ textAlign: 'right' }}>
                        <NumberFormat
                            value={coin.current_price % 1 == 0 ? coin.current_price.toFixed(2) : coin.current_price}
                            prefix={'$'}
                            thousandSeparator={true}
                            displayType='text'
                            renderText={(price: any) => <Text>{price}</Text>}
                        />
                    </Title>
                    {
                        dayChange == '7d' ?
                            <Text style={(coin.price_change_percentage_7d_in_currency < 0) ? { color: 'red', textAlign: 'right' } : { color: 'green', textAlign: 'right' }}>
                                {coin.price_change_percentage_7d_in_currency}%
                            </Text>
                            :
                            dayChange == '24h' ?
                                <Text style={(coin.price_change_percentage_24h_in_currency < 0) ? { color: 'red', textAlign: 'right' } : { color: 'green', textAlign: 'right' }}>
                                    {coin.price_change_percentage_24h_in_currency}%
                                </Text>
                                :
                                <Text style={(coin.price_change_percentage_1h_in_currency < 0) ? { color: 'red', textAlign: 'right' } : { color: 'green', textAlign: 'right' }}>
                                    {coin.price_change_percentage_1h_in_currency}%
                                </Text>
                    }
                </View>
            </View>

            <View>
                <Charts
                    data={coin}
                />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    top: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    logo: {
        width: 50,
        height: 50,
    }
});