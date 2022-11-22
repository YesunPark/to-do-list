import React from 'react';
import ListItem from 'components/ListItem';
import { toDoArrState } from '../atom'; // atom으로 만든 전역상태
import { useRecoilState } from 'recoil'; // 훅 import

function FullList() {
  const [listArr] = useRecoilState(toDoArrState);

  return (
    <>
      {listArr.map((list) => {
        return <ListItem content={list.content} key={list.idx} idx={list.idx} />;
      })}
    </>
  );
}

export default FullList;
