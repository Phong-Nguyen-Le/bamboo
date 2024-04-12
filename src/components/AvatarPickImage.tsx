import * as React from 'react'
import {
  Image,
  Platform,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ViewStyle
} from 'react-native'
// import * as ImagePicker from 'react-native-image-picker'
import ActionSheet, { ActionSheetRef } from 'react-native-actions-sheet'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import ImagePicker from 'react-native-image-crop-picker'
import {
  checkCameraIsOpen,
  checkPhotoLibraryPermission
} from '@utils/check-permission'
import COLORS from '@constants/colors'

/* toggle includeExtra */
const includeExtra = true

export default function AvatarPickImage({
  imageFace,
  setImageFace,
  containerStyles
}: {
  imageFace: string
  setImageFace: (value: string) => void
  containerStyles?: ViewStyle
}) {
  const actionSheetRef = React.useRef<ActionSheetRef>(null)
  const handleTakePicture = async () => {
    // Checking camera permissions
    checkCameraIsOpen(async () => {
      ImagePicker.openCamera({
        width: 300,
        height: 400,
        cropping: true
      })
        .then((image) => {
          handleUploadImg(image)
          actionSheetRef.current?.hide()
        })
        .catch((error) => {
          console.log('Camera error:', error)
        })
    })
  }

  const handlePickImage = async () => {
    checkPhotoLibraryPermission(async () => {
      ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: true
      })
        .then((image) => {
          handleUploadImg(image)
          actionSheetRef.current?.hide()
        })
        .catch((error) => {
          console.log('Picker error:', error)
        })
    })
  }
  //   const { mutateAsync: uploadSingleS3 } = useUploadFile()
  const handleUploadImg = async (item: any) => {
    if (item != null) {
      const formData: any = new FormData()
      formData.append('file', {
        uri: item.uri,
        name: item.fileName ?? 'image.jpg',
        type: item?.type ?? 'image/jpeg'
      })
      //========================> UPLOAD IMAGE TO S3
      setImageFace(item?.path)
    }
  }

  const handleCancel = () => {
    actionSheetRef.current?.hide()
  }

  return (
    <>
      <TouchableOpacity
        onPress={() => actionSheetRef.current?.show()}
        style={[
          {
            justifyContent: 'center',
            alignItems: 'center',
            width: 120,
            height: 120,
            borderRadius: 1000,
            borderWidth: 2,
            borderColor: COLORS.info
          },
          containerStyles
        ]}>
        <Image
          source={{
            uri: imageFace
              ? imageFace
              : 'https://play-lh.googleusercontent.com/h4CyAr7xQCsK25jo4x_K6czLoi7tz25-M9Wc4xh5WbUWxgEy6XtAP3WlpVFz02-60nk'
          }}
          style={[
            {
              width: '100%',
              height: '100%',
              borderRadius: 100,
              backgroundColor: COLORS.white
            }
          ]}
          resizeMode='stretch'
        />

        <View
          style={{
            position: 'absolute',
            right: 0,
            bottom: 0,
            zIndex: 10,
            padding: 5,
            backgroundColor: COLORS.primary,
            borderRadius: 100
          }}>
          <MaterialCommunityIcons
            name='camera'
            color={COLORS.white}
            size={20}
          />
        </View>
      </TouchableOpacity>

      <ActionSheet
        ref={actionSheetRef}
        containerStyle={styles.actionSheetContainer}
        gestureEnabled={true}>
        <View style={{ marginBottom: 10 }}>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={handleTakePicture}
            style={[
              styles.btnContainerBorder,
              {
                borderTopLeftRadius: 15,
                borderTopRightRadius: 15,
                backgroundColor: 'white'
              }
            ]}>
            <Text style={[styles.btnText]}>Chụp ảnh</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={handlePickImage}
            style={[
              styles.btnContainerBorder,
              {
                borderBottomLeftRadius: 15,
                borderBottomRightRadius: 15
              }
            ]}>
            <Text style={styles.btnText}>Chọn từ thư viện</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={handleCancel} style={styles.cancelContainer}>
          <Text style={styles.cancelText}>Hủy</Text>
        </TouchableOpacity>
      </ActionSheet>
    </>
    //  {/* </SafeAreaView> */}
  )
}

const styles = StyleSheet.create({
  actionSheetContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.0)'
  },
  btnContainerBorder: {
    borderColor: '#e1e4e8',
    borderBottomWidth: 1,
    backgroundColor: 'white',
    marginHorizontal: 5
  },
  btnText: {
    fontSize: 20,
    letterSpacing: 0.5,
    alignSelf: 'center',
    marginVertical: 18,
    color: '#3880ff'
  },
  cancelContainer: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginBottom: 20,
    backgroundColor: 'white',
    marginHorizontal: 5
  },
  cancelText: {
    color: 'red',
    fontSize: 20,
    fontWeight: '600',
    letterSpacing: 0.5
  }
})
