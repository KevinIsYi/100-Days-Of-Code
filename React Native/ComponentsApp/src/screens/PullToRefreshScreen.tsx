import React, { useState } from 'react'
import { RefreshControl } from 'react-native'
import { ScrollView, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { HeaderTitle } from '../components/HeaderTitle'
import { styles } from '../theme/appTheme'

export const PullToRefreshScreen = () => {

    const { top } = useSafeAreaInsets();
    const [refreshing, setRefreshing] = useState(false);
    const [data, setData] = useState<string>();

    const onRefresh = () => {
        setRefreshing(true);

        setTimeout(() => {
            setRefreshing(false);
            setData('Hello!');
        }, 3000);
    }

    return (
        <ScrollView
            style={{
                marginTop: refreshing ? top : 0
            }}
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                    progressViewOffset={10}
                    progressBackgroundColor="#5856d6"
                    colors={['white', 'red', 'orange']}
                    style={{ backgroundColor: 'black' }} // Background changes color
                    tintColor="white" // IOS spinner color
                    title="Refreshing" // IOS
                />
            }
        >
            <View style={styles.globalMargin}>
                <HeaderTitle title="Pull to Refresh" />
                {
                    data && (
                        <HeaderTitle title={data} />
                    )
                }
            </View>
        </ScrollView>
    )
}
