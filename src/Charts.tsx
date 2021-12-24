import * as React from 'react';
import { LineChart, Grid, YAxis } from 'react-native-svg-charts'
import { Text, View, StyleSheet, Image } from 'react-native';


export default function Charts(props: any) {
    const { data } = props;

    const contentInset = { top: 20, bottom: 20 }

    return (
        <View style={{ height: 500, flexDirection: 'row' }}>
            <YAxis
                data={data.sparkline_in_7d.price}
                contentInset={contentInset}
                svg={{
                    fill: 'grey',
                    fontSize: 20,
                }}
                numberOfTicks={10}
                formatLabel={(value) => `$${value}`}
            />
            <LineChart
                style={{ flex: 1, marginLeft: 16 }}
                data={data.sparkline_in_7d.price}
                svg={{ stroke: 'rgb(134, 65, 244)' }}
                contentInset={{ top: 20, bottom: 20 }}
                animate={true}
            >
                <Grid />
            </LineChart>
        </View>
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