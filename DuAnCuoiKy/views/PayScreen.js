import { React, useState } from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '@rneui/base';

const PayScreen = (props) => {
    const { Total } = props.route.params;
    const dispatch = useDispatch();
    const [nameInput, setNameInput] = useState('');
    const [phoneInput, setPhoneInput] = useState('');
    const [addressInput, setAddressInput] = useState('');
    const [totalAmount, setTotalAmount] = useState(Total);
    const handlePayment = () => {
        // Gửi action để xóa toàn bộ sản phẩm trong giỏ hàng
        dispatch({ type: 'CLEAR_CART' });

        // Hiển thị thông báo thanh toán thành công
        alert('Thanh toán thành công!');
        // Đặt lại giá trị của ô input và tổng cộng về giá trị mặc định
        setNameInput('');
        setPhoneInput('');
        setAddressInput('');
        setTotalAmount(0);
    };
    //Kiểm tra cấu trúc sdt
    function isValidPhoneNumber(input) {
        var regex = /^\d{10}$/;
        return regex.test(input);
    }

    const CartProducts = useSelector((state) => state.CartProducts);
    let total = 0;
    CartProducts.forEach((item) => {
        total += item.price;
    });

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                {/* Ô input cho tên */}
                <TextInput
                    style={styles.input}
                    placeholder="Tên"
                    onChangeText={(text) => setNameInput(text)}
                    value={nameInput}
                />
                {nameInput === "" && (
                    <Text style={{ marginLeft: 10, color: 'red' }}>Yêu cầu điền tên</Text>
                )}

                {/* Ô input cho số điện thoại */}
                <TextInput
                    style={styles.input}
                    placeholder="Số điện thoại"
                    onChangeText={(text) => setPhoneInput(text)}
                    value={phoneInput}
                />
                {!isValidPhoneNumber(phoneInput) && (
                    <Text style={{ marginLeft: 10, color: 'red' }}>Yêu cầu nhập đúng số điện thoại</Text>
                )}

                {/* Ô input cho địa chỉ */}
                <TextInput
                    style={styles.input}
                    placeholder="Địa chỉ"
                    onChangeText={(text) => setAddressInput(text)}
                    value={addressInput}
                />
                {addressInput === "" && (
                    <Text style={{ marginLeft: 10, color: 'red' }}>Yêu cầu địa chỉ</Text>
                )}

            </View>
            <View style={styles.footerStyle}>
                <Text style={styles.totalPrices}>Tổng cộng: {totalAmount.toLocaleString('vi-VN')}</Text>
                <Button
                    buttonStyle={styles.buttonStyle}
                    title="Thanh toán"
                    onPress={() => {
                        if (nameInput === "" || phoneInput === "" || addressInput === "") {
                            alert('Yêu cầu nhập đủ thông tin');
                        } else {
                            if (isValidPhoneNumber(phoneInput)) {
                                handlePayment();
                            }
                            else {
                                alert('Yêu cầu nhập đúng số điện thoại');
                            }
                        }
                    }}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
    },
    inputContainer: {
        flexDirection: 'column',
        marginVertical: 10,
    },
    input: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        borderRadius: 10,
        margin: 5,
        fontSize: 25,
    },
    listStyle: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        borderWidth: 0.5,
    },
    noFavTitle: {
        fontSize: 40,
        alignSelf: 'center',
        textAlign: 'center',
        fontWeight: 'bold',
        margin: 10,
    },
    flex: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    imageInFlex: {
        justifyContent: 'center',
    },
    nameInFlex: {
        justifyContent: 'flex-start',
        width: 250,
    },
    iconInFlex: {
        justifyContent: 'flex-end',
        marginLeft: 20,
        alignSelf: 'flex-start'
    },
    image: {
        width: 100,
        height: 100,
        margin: 5,
        borderRadius: 10,
    },
    nameText: {
        fontSize: 20,
        margin: 5,
    },
    priceText: {
        fontSize: 20,
        margin: 5,
        fontWeight: 'bold',
        alignSelf: 'flex-end',
    },
    footerStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor: '#FFFFFF',
    },
    totalPrices: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    buttonStyle: {
        borderRadius: 10,
        width: 150,
        height: 50,
        borderWidth: 1,
        borderColor: 'black',
        alignSelf: 'flex-end',
        marginBottom: 5,
        marginRight: 5,
        backgroundColor: 'red',
    },
});

export default PayScreen;
