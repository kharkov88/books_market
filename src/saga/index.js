import {put,takeEvery,call,all} from 'redux-saga/effects'
import {Api} from'../api'

export function* fetchList(){
    try{
        yield put ({type:'FETCH_START'})
        const data = yield call(Api.list)  
        yield put({type:'UPDATE_LIST',list:data.products})
        yield put ({type:'FETCH_START'})
    }
    catch(e){
        console.log('error',e)
    }
}

export function* watchFetchList(){
    yield takeEvery('GET_LIST',fetchList)
}

export function* rootSaga(){
    yield all([
        watchFetchList()
    ])
}

