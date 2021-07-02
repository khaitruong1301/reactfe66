

const stateGioHangDefault = [
    { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/vsphone.jpg" ,soLuong:1},
]



export const gioHangReducer = (state = stateGioHangDefault,action) => {
    console.log('action',action);
    switch (action.type) {
        case 'THEM_GIO_HANG': {
            //Nhận được sản phẩm click thông qua biến action.sanPhamClick
            //tạo ra sp giỏ hàng
            let spGH = {...action.sanPhamClick,soLuong:1};
            //kiểm tra giỏ hàng có chứa sản phẩm đó hay k
            let sanPhamGH = state.find(sp => sp.maSP === spGH.maSP);
            //Nếu tồn tại thì tăng số lượng
            if(sanPhamGH) {
                sanPhamGH.soLuong += 1;
            } else {
                //Nếu chưa có trong giỏ hàng thì thêm vào giỏ hàng
                state = [...state,spGH];
            }

            console.log('state',state);
            //return về state mới của hàng sau khi xử lý
            return [...state];
        }

        case 'XOA_GIO_HANG' : {
            let maSP = action.maSP;
            //Xử lý xoá giỏ hàng
            let gioHangCapNhat = [...state];
            gioHangCapNhat = gioHangCapNhat.filter(sp=> sp.maSP !== maSP);
            //Trả về state mới sau khi xử lý
            return [...gioHangCapNhat];
        }
        case 'TANG_GIAM_SO_LUONG':{

            let gioHangCapNhat = state;
            let spGH = gioHangCapNhat.find(sp=>sp.maSP === action.maSP);

            if(spGH) {
                spGH.soLuong += action.soLuong;

                if(spGH.soLuong <1){
                    alert('Số lượng tối thiểu là 1');
                    spGH.soLuong -= action.soLuong;
                }
            }
            console.log('gioHang',gioHangCapNhat)
            //immutable 
            return [...gioHangCapNhat];
        }
    }
    return [...state];
}