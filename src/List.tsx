import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { DataTable, Searchbar, Title } from 'react-native-paper';
import NumberFormat from 'react-number-format';


export default function GridList(props: any) {
    const { data, page, setPage, numberOfItemsPerPage, onItemsPerPageChange, numberOfItemsPerPageList, navigation, dayChange, onDayChange } = props;
    const [keyword, setKeyword] = React.useState<any>('');

    const pressed = (e: any) => {
        navigation.navigate('Info', {
            data: e,
            dayChange: dayChange,
            onDayChange: onDayChange
        });
    }


    return (
        <View>
            <Searchbar
                placeholder="Search"
                onChangeText={(text: any) => setKeyword(text)}
                value={keyword}
                autoComplete={''}
            />

            <DataTable>
                <DataTable.Header>
                    <DataTable.Title>Market</DataTable.Title>
                </DataTable.Header>
                {
                    data
                        .filter((x: any) => x.name.toLowerCase().includes(keyword.toLowerCase()) || x.symbol.toLowerCase().includes(keyword.toLowerCase()))
                        .map((coin: any) =>
                            <DataTable.Row key={coin.id} style={{ justifyContent: 'center' }} onPress={() => pressed(coin)}>
                                <View style={styles.top}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Image style={styles.tinyLogo} source={{ uri: coin.image }} />
                                        <View style={{ marginLeft: 10 }}>
                                            <Title>{coin.name} </Title>
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
                            </DataTable.Row>
                        )
                }
                <DataTable.Pagination
                    page={page}
                    numberOfPages={100}
                    onPageChange={page => setPage(page)}
                    showFastPaginationControls
                    numberOfItemsPerPageList={numberOfItemsPerPageList}
                    numberOfItemsPerPage={numberOfItemsPerPage}
                    onItemsPerPageChange={onItemsPerPageChange}
                    selectPageDropdownLabel={'Rows per page'}
                />
            </DataTable>
        </View >
    )
}

const styles = StyleSheet.create({
    top: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%'
    },
    tinyLogo: {
        width: 40,
        height: 40,
        alignSelf: 'center'
    }
});