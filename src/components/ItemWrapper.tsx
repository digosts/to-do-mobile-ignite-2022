import React, { ReactNode } from 'react'
import { View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

interface ItemWrapperProps {
  index: number
  children: ReactNode
}

export function ItemWrapper({ index, children }: ItemWrapperProps) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#262626',
        borderRadius: 5,
        marginBottom: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}
    >
      {children}
    </View>
  )
}
