import { take, put, select } from 'redux-saga/effects';
import uuid from 'uuid';

import { history } from './history'
import * as mutations from './mutations';
const url = process.env.NODE_ENV === 'production' ? `` : `http://localhost:7777`;

export function* taskCreationSaga(){
    while (true){
        const {groupID} = yield take(mutations.REQUEST_TASK_CREATION);
        const ownerID = 'U1'
        const taskID = uuid();
        let mutation = mutations.createTask(taskID, groupID, ownerID);
        yield put(mutation);
    }
}