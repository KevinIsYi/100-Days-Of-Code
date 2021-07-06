import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { Cast } from '../interfaces/creditsInterface'

interface Props {
    actor: Cast;
}

export const CastItem = ({ actor }: Props) => {

    const { name, character, profile_path } = actor;

    const uri = `https://image.tmdb.org/t/p/w500${profile_path}`;

    return (
        <View style={styles.container}>
            {
                profile_path && (
                    <Image
                        source={{
                            uri
                        }}
                        style={{
                            width: 50,
                            height: 50,
                            borderRadius: 5
                        }}
                    />
                )
            }
            <View style={styles.actorInfo}>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{name}</Text>
                <Text style={{ fontSize: 16, opacity: 0.7 }}>{character}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 10,
        height: 50,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 10,
        marginRight: 10,
        paddingRight: 10,
    },
    actorInfo: {
        marginLeft: 10,
        paddingTop: 4,
    }
});