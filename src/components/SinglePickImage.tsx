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
import * as ImagePicker from 'react-native-image-picker'
import ActionSheet, { ActionSheetRef } from 'react-native-actions-sheet'
import {
  checkCameraIsOpen,
  checkPhotoLibraryPermission
} from '@utils/check-permission'
import COLORS from '@constants/colors'
import AntDesign from 'react-native-vector-icons/AntDesign'

/* toggle includeExtra */
const includeExtra = true

export default function SinglePickImage({
  image,
  setImage,
  containerStyles
}: {
  image: string
  setImage: (value: string) => void
  containerStyles?: ViewStyle
}) {
  const actionSheetRef = React.useRef<ActionSheetRef>(null)
  const handleTakePicture = async () => {
    // await checkCameraPermission()
    checkCameraIsOpen(async () => {
      await ImagePicker.launchCamera(
        {
          saveToPhotos: true,
          mediaType: 'photo',
          includeBase64: false,
          includeExtra
        },
        (res) => {
          if (res.errorCode) console.log('vao day')
          else {
            handleUploadImg(res?.assets?.[0])
            actionSheetRef.current?.hide()
          }
        }
      )
    })
  }

  const handlePickImage = async () => {
    checkPhotoLibraryPermission(async () => {
      await ImagePicker.launchImageLibrary(
        {
          selectionLimit: 1,
          mediaType: 'photo',
          includeBase64: false,
          includeExtra
        },
        (res) => {
          if (res.errorCode) console.log('vao day loi', res)
          else {
            handleUploadImg(res?.assets?.[0])
            actionSheetRef.current?.hide()
          }
        }
      )
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
      //   await uploadSingleS3(formData).then((res) => {
      //     if (res) {
      //       setImage(res?.data?.fileUrl)
      //     }
      //   })
      setImage(item?.uri)
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
            width: '100%',
            height: '100%',
            borderWidth: 1,
            borderStyle: 'dashed',
            borderColor: COLORS.info,
            borderRadius: 10,
            overflow: 'hidden'
          },
          containerStyles
        ]}>
        {image ? (
          <Image
            source={{
              uri: image
            }}
            style={[
              {
                width: '100%',
                height: '100%',
                backgroundColor: COLORS.white
              }
            ]}
            resizeMode='stretch'
          />
        ) : (
          <AntDesign name='plus' color={COLORS.violet} size={18} />
        )}
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
