import * as React from "react";
import {
    Image,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    ViewStyle,
} from "react-native";
import * as ImagePicker from "react-native-image-picker";
import ActionSheet, { ActionSheetRef } from "react-native-actions-sheet";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {
    checkCameraIsOpen,
    checkPhotoLibraryPermission,
} from "@utils/check-permission";
import COLORS from "@constants/colors";

/* toggle includeExtra */
const includeExtra = true;
export default function MultiPickImage({
    imageList,
    setImageList,
    containerStyles,
}: {
    imageList: string[];
    setImageList: (value: any) => void;
    containerStyles?: ViewStyle;
}) {
    const actionSheetRef = React.useRef<ActionSheetRef>(null);
    const handleCancel = () => {
        actionSheetRef.current?.hide();
    };

    const handleTakePicture = async () => {
        // await checkCameraPermission()
        checkCameraIsOpen(async () => {
            await ImagePicker.launchCamera(
                {
                    saveToPhotos: true,
                    mediaType: "photo",
                    includeBase64: false,
                    includeExtra,
                },
                (res) => {
                    if (res.errorCode) console.log("vao day");
                    else {
                        handleUploadImg(res?.assets?.[0]);
                        actionSheetRef.current?.hide();
                    }
                }
            );
        });
    };

    //   const { mutateAsync: uploadSingleS3 } = useUploadFile()
    const handleUploadImg = async (item: any) => {
        if (item != null) {
            const formData: any = new FormData();
            formData.append("file", {
                uri: item.uri,
                name: item.fileName ?? "image.jpg",
                type: item?.type ?? "image/jpeg",
            });
            //   await uploadSingleS3(formData).then((res) => {
            //     if (res) {
            //       setImageList((pre) => [...pre, res?.data?.fileUrl])
            //     }
            //   })
            setImageList((pre) => [...pre, item?.uri]);
        }
    };
    const handlePickImage = async () => {
        checkPhotoLibraryPermission(async () => {
            await ImagePicker.launchImageLibrary(
                {
                    selectionLimit: 10,
                    mediaType: "photo",
                    includeBase64: false,
                    includeExtra,
                },
                (res) => {
                    if (res.errorCode) console.log("vao day loi", res);
                    else {
                        for (let i = 0; i < res?.assets?.length!; i++) {
                            handleUploadImg(res?.assets?.[i]);
                        }
                        actionSheetRef.current?.hide();
                    }
                }
            );
        });
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={{ height: 200 }} horizontal>
                <TouchableOpacity
                    style={{
                        ...styles.image,
                        alignItems: "center",
                        justifyContent: "center",
                        borderWidth: 2,
                        borderColor: COLORS.primary,
                        width: 80,
                    }}
                    onPress={() => actionSheetRef.current?.show()}
                >
                    <MaterialCommunityIcons
                        name="camera"
                        color={COLORS.primary}
                        size={40}
                    />
                </TouchableOpacity>

                {imageList?.map((item) => (
                    <Image
                        key={item}
                        resizeMode="cover"
                        style={styles.image}
                        source={{ uri: item }}
                    />
                ))}
            </ScrollView>

            <ActionSheet
                ref={actionSheetRef}
                containerStyle={styles.actionSheetContainer}
                gestureEnabled={true}
            >
                <View style={{ marginBottom: 10 }}>
                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={handleTakePicture}
                        style={[
                            styles.btnContainerBorder,
                            {
                                borderTopLeftRadius: 15,
                                borderTopRightRadius: 15,
                                backgroundColor: "white",
                            },
                        ]}
                    >
                        <Text style={[styles.btnText]}>Chụp ảnh</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={handlePickImage}
                        style={[
                            styles.btnContainerBorder,
                            {
                                borderBottomLeftRadius: 15,
                                borderBottomRightRadius: 15,
                            },
                        ]}
                    >
                        <Text style={styles.btnText}>Chọn từ thư viện</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity
                    onPress={handleCancel}
                    style={styles.cancelContainer}
                >
                    <Text style={styles.cancelText}>Hủy</Text>
                </TouchableOpacity>
            </ActionSheet>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgoundColor: 'blue',
        height: 100,
    },
    imageContainer: {
        marginVertical: 24,
    },
    image: { height: 100, width: 100, borderRadius: 10, marginRight: 10 },
    buttonContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        marginVertical: 8,
    },

    text: {
        textAlign: "center",
        color: "black",
    },
    actionSheetContainer: {
        backgroundColor: "rgba(255, 255, 255, 0.0)",
    },
    btnContainerBorder: {
        borderColor: "#e1e4e8",
        borderBottomWidth: 1,
        backgroundColor: "white",
        marginHorizontal: 5,
    },
    btnText: {
        fontSize: 20,
        letterSpacing: 0.5,
        alignSelf: "center",
        marginVertical: 18,
        color: "#3880ff",
    },
    cancelContainer: {
        height: 60,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 15,
        marginBottom: 20,
        backgroundColor: "white",
        marginHorizontal: 5,
    },
    cancelText: {
        color: "red",
        fontSize: 20,
        fontWeight: "600",
        letterSpacing: 0.5,
    },
});

interface Action {
    title: string;
    type: "capture" | "library";
    options: ImagePicker.CameraOptions | ImagePicker.ImageLibraryOptions;
}
