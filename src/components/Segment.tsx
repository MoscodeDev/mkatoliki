import React from 'react'
import { View } from 'react-native'

const Segment: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <View>
    {/* Render any child content above the divider */}
    <View>{children}</View>

    {/* Divider row: small spacer, long line, small spacer */}
    <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%' }}>
      <View style={{ flex: 1 }} />
      <View style={{ flex: 8, borderBottomColor: 'black', borderBottomWidth: 1, marginBottom: 15, paddingTop:10 }} />
      <View style={{ flex: 1 }} />
    </View>
  </View>
)

export default Segment
