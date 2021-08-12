import React, { useState } from 'react'
import { View, StyleSheet, ActivityIndicator, Image } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import { FadeInImage } from '../components/FadeInImage';
import { HeaderTitle } from '../components/HeaderTitle';

export const InfiniteScrollScreen = () => {

    const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5]);

    const renderItem = (item: number) => {

        return (
            // <Image
            //     source={{
            //         uri: `https://picsum.photos/id/${item}/500/400`
            //     }}
            //     style={{
            //         width: '100%',
            //         height: 400
            //     }}
            // />
            <FadeInImage 
                uri={`https://picsum.photos/id/${item}/500/400`} 
                style={{
                    width: '100%',
                    height: 400
                }}
            />
        );
    }

    const loadMore = () => {
        const newArray: number[] = [];

        for (let i = 0; i < 5; ++i) {
            newArray[i] = numbers.length + i;
        }

        setNumbers([...numbers, ...newArray]);
    }

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                ListHeaderComponent={() => (
                    <View style={{ marginHorizontal: 20 }}>
                        <HeaderTitle title="Infinite Scroll" />
                    </View>
                )}
                data={numbers}
                keyExtractor={(item) => item.toString()}
                renderItem={({ item }) => renderItem(item)}
                onEndReached={loadMore}
                onEndReachedThreshold={0.5}
                ListFooterComponent={() => (
                    <View style={{
                        height: 150,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <ActivityIndicator color="#5856D6" />
                    </View>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    textItem: {
        backgroundColor: 'green',
        height: 150,
        textAlign: 'center'
    }
});