import React from 'react';
import { FlatList } from 'react-native';
import { View } from 'react-native';
import { styles } from '../theme/appTheme';
import { FlatListMenuItem } from '../components/FlatListMenuItem';
import { menuItems } from '../data/menuItems';
import { HeaderTitle } from '../components/HeaderTitle';

const HomeScreen = () => {

    const itemSeparator = () => {
        return (
            <View
                style={{
                    borderBottomWidth: 5,
                    opacity: 0.5,
                    marginVertical: 5
                }}
            />
        );
    }

    return (
        <View
            style={{ flex: 1, ...styles.globalMargin }}
        >
            <FlatList
                data={menuItems}
                renderItem={({ item }) => <FlatListMenuItem menuItem={item} />}
                keyExtractor={({ name }) => name}
                ListHeaderComponent={() => <HeaderTitle title="Menu Options" />}
                ItemSeparatorComponent={itemSeparator}
            />
        </View>
    )
}

export default HomeScreen
