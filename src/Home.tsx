import * as React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { Coins } from './service/CryptoCoins';
import GridList from './List';
import Spinner from './Spinner';

const numberOfItemsPerPageList = [25, 50, 100];
const days = ['1h', '24h', '7d'];


export default function Home({ navigation }: any) {
    const [data, setData] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [numberOfItemsPerPage, onItemsPerPageChange] = React.useState(numberOfItemsPerPageList[0]);
    const [dayChange, onDayChange] = React.useState(days[2]);

    React.useEffect(() => {
        setData([])
        Coins(numberOfItemsPerPage, page, dayChange)
            .then((res: any) => setData(res))
    }, [numberOfItemsPerPage, page])


    return (data.length != 0 ?
        <PaperProvider>
            <SafeAreaView style={styles.container}>
                <ScrollView>
                    <GridList
                        data={data}
                        page={page}
                        setPage={setPage}
                        numberOfItemsPerPage={numberOfItemsPerPage}
                        onItemsPerPageChange={onItemsPerPageChange}
                        numberOfItemsPerPageList={numberOfItemsPerPageList}
                        dayChange={dayChange}
                        onDayChange={onDayChange}
                        navigation={navigation}
                    />
                    <View>
                    </View >
                </ScrollView>
            </SafeAreaView>
        </PaperProvider>
        :
        <Spinner />
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});