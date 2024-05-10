import React, { useCallback, useMemo, useRef } from 'react'
import { View, Text, StyleSheet, Button, ScrollView } from 'react-native'
import {
  BottomSheetModal,
  BottomSheetView,
  BottomSheetModalProvider,
  BottomSheetBackdrop
} from '@gorhom/bottom-sheet'

type BottomSheetProps = {
  children?: React.ReactNode
}

export type BottomSheetRefProps = {}

const BottomSheet = ({ children, onOpen, onClose }) => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null)

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present()
  }, [])
  const handleCloseModalPress = useCallback(() => {
    bottomSheetModalRef.current?.close()
  }, [])
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index)
  }, [])

  return (
    <View style={{}}>
      <Button
        onPress={handlePresentModalPress}
        title='Present Modal'
        color='black'
      />

      <BottomSheetModal
        style={{ zIndex: 1000 }}
        ref={bottomSheetModalRef}
        index={1}
        snapPoints={['50%', '80%']}
        onChange={handleSheetChanges}
        backdropComponent={(props) => (
          <BottomSheetBackdrop
            {...props}
            enableTouchThrough={true}
            pressBehavior='close'
            onPress={() => {
              console.log('press close')
            }}
          />
        )}>
        <BottomSheetView style={{ backgroundColor: 'white' }}>
          {/* <Button
            onPress={handleCloseModalPress}
            title='Close Modal'
            color='black'
          /> */}
          {children}
        </BottomSheetView>
      </BottomSheetModal>
    </View>
  )
}

const styles = StyleSheet.create({})

export default BottomSheet
