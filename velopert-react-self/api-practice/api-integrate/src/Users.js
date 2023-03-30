import React, {useState} from 'react';
import axios from 'axios';
import { useAsyncRetry } from 'react-use';
import User from './User';

//useAsync 에서는 Promise 의 결과를 바로 data 에 담기 때문에,
// 요청을 한 이후 response 에서 data 추출하여 반환하는 함수를 따로 만들었습니다.
async function getUsers() {
  const url = 'https://jsonplaceholder.typicode.com/users';
  const response = await axios.get(url);
  return response.data;
}

function Users() {
  const [userId, setUserId] = useState(null);
  const state = useAsyncRetry(getUsers);
  const { loading, error, value: users, retry } = state;

  if (loading) return <div>로딩중..</div>
  if (error) return <div>Error Occured: {error.message}</div>;
  if (!users) return <button onClick={retry}>불러오기</button>;
  return (
    <>
      <ul>
        {users.map(user => (
          <li key={user.id}
            onClick={() => setUserId(user.id)}
            style={{ cursor: 'pointer' }}
          >
            {user.username} ({user.name})
          </li>
        ))}
      </ul>
      <button onClick={retry}>다시 불러오기</button>
      {userId && <User id={userId} />}
    </>
  )
}

export default Users;