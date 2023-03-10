import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'
import Mainlayouts from '../layouts/Mainlayouts'
import { getAsyncStorage } from '../helpers/AsyncStorage'

const Home = () =>
{
    //clear AsyncStorage
    const navigation = useNavigation()
    const [ isLogin, setisLogin ] = useState( false )

    const getUserLogin = async () =>
    {
        try
        {
            const value = await getAsyncStorage( "users" )
            if ( value !== null )
            {
                setisLogin( true )
            }
            else
            {
                navigation.navigate( "Login" )
            }
        } catch ( error )
        {
            console.log( error );
        }
    }

    useEffect( () =>
    {
        getUserLogin()
    }, [] )
    return (
        <Mainlayouts>
            <View>
                <Text>Home</Text>
            </View>
        </Mainlayouts>
    )
}

export default Home