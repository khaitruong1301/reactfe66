import {combineReducers, createStore} from 'redux';
import {gioHangReducer} from './reducers/gioHangReducer'


const rootReducer  = combineReducers({
    //Liệt kê các state của ứng dụng
    stateGioHang: gioHangReducer,
    // stateNaoDo : (state,action) => {

    // }
    //...Rất nhiều state cho từng nghiệp vụ
});


// Đối với state là object hoặc array 
// => Redux chỉ render lại khi object hoặc array được gán = object hoặc array mới immutable
/*
    Ví dụ có objectA
    objectA.thuocTinh = giá trị mới => không thay đổi (redux không biết được giá trị đó thay đổi => không render lại giao diện)

    objectA = {}  =>gán = object mới
    objectA = {...objectA, thuocTinh:'giaTriMoi'}

*/

export const store = createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()    
);