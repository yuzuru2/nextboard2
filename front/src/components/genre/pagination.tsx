import * as React from 'react';
import Pagination from 'react-js-pagination';
import { useSelector, useDispatch } from 'react-redux';
import Router from 'next/router';
import { useRouter } from 'next/router';

import i_reducer from 'src/interface/reducer';
import slice from 'src/reducers/home';

const pagination = () => {
  const state = useSelector(state => state) as i_reducer;
  const dispatch = useDispatch();
  const { id } = useRouter().query as { id: string };

  return (
    <>
      <div className="d-flex justify-content-center">
        <Pagination
          activePage={state.home.pagination}
          itemsCountPerPage={10}
          totalItemsCount={state.home.count}
          onChange={async (num: number) => {
            dispatch(slice.actions.pagination(num));
            Router.push(`/genre/${id}/${num}`);
            window.scrollTo(0, 0);
          }}
          itemClass="page-item"
          linkClass="page-link"
        />
      </div>
    </>
  );
};

export default pagination;
