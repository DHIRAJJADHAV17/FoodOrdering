import { View, Text } from 'react-native'
import React from 'react'
import LoactionHeader from './LoactionHeader'
import SearchBar from './SearchBar'

const HeaderSection = () => {
  return (
    <View>
    <LoactionHeader/>
    <SearchBar/>
    </View>
  )
}

export default HeaderSection