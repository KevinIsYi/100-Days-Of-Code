import React from 'react';
import { FlatList } from 'react-native';
import { View } from 'react-native';
import { styles } from '../theme/appTheme';
import { FlatListMenuItem } from '../components/FlatListMenuItem';
import { menuItems } from '../data/menuItems';
import { HeaderTitle } from '../components/HeaderTitle';
import { ItemSeparator } from '../components/ItemSeparator';

const HomeScreen = () => {


    return (
        <View
            style={{ flex: 1, ...styles.globalMargin }}
        >
            <FlatList
                data={menuItems}
                renderItem={({ item }) => <FlatListMenuItem menuItem={item} />}
                keyExtractor={({ name }) => name}
                ListHeaderComponent={() => <HeaderTitle title="Menu Options" />}
                ItemSeparatorComponent={() => <ItemSeparator />}
            />
        </View>
    )
}

export default HomeScreen
