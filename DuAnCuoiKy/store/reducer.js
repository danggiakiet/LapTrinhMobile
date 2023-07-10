import { View } from "react-native";
import Products from "../data/products";
//state khởi tạo - là 1 object
const KhoiTaoState = {
    products: Products, //Lưu trữ toàn bộ sản phẩm
    favProducts: [],    //Lưu trữ sản phẩm yêu thích
    CartProducts: [],   //Lưu trữ sản phẩm ở giỏ hàng
    filteredProducts: Products     //Lưu trữ sản phẩm sau khi lọc
}

const reducer = (state = KhoiTaoState, action) => {
    if(action.type === 'addFavScreen')
    {
        //Dùng findIndex để tìm chỉ số của sảm phẩm có id == action.productid trong favProducts
        const index = state.favProducts.findIndex(Products => Products.productId == action.productId);
        //Nếu chỉ số này >=0
        if(index >= 0) //tức là sản phẩm có trong danh sách yêu thích
        {
            //Tạo bản sao mới của favProducts
            const copy = [...state.favProducts]
            //Xóa sản phẩm vừa tìm được
            copy.splice(index, 1)
            //Trả về state có favProducts đã cập nhật
            return {...state, favProducts: copy}
        }
        else{ //Nếu chỉ số này <0
            const product = state.products.find(products => products.productId === action.productId)
            //Tạo bản sao mới của favProducts
            let copy = [...state.favProducts]
            //Thêm sản phẩm vừa tìm được
            copy = copy.concat(product)
            //Trả về state có favProducts đã cập nhật
            return {...state, favProducts: copy}
        }
    }
    if(action.type === 'addCartScreen')
    {
        //Dùng findIndex để tìm chỉ số của sảm phẩm có id == action.productid trong CartProducts
        const index = state.CartProducts.findIndex(Products => Products.productId == action.productId);
        //Nếu chỉ số này >=0
        if(index >= 0) //tức là sản phẩm có trong danh sách yêu thích
        {
            //Tạo bản sao mới của cartProducts
            const copy = [...state.CartProducts]
            //Xóa sản phẩm vừa tìm được
            copy.splice(index, 1)
            //Trả về state có cartProducts đã cập nhật
            return {...state, CartProducts: copy}
        }
        else{ //Nếu chỉ số này <0
            const product = state.products.find(products => products.productId === action.productId)
            //Tạo bản sao mới của favProducts
            let copy = [...state.CartProducts]
            //Thêm sản phẩm vừa tìm được
            copy = copy.concat(product)
            //Trả về state có CartProducts đã cập nhật
            return {...state, CartProducts: copy}
        }
    }
    if(action.type === 'CLEAR_CART')
    {
        return {...state, CartProducts: [], };// Xóa toàn bộ sản phẩm trong giỏ hàng
    }
    return state;
}

export default reducer;
