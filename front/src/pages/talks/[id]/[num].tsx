import * as React from 'react';
import { Dispatch } from 'redux';
import axios from 'axios';

import i_reducer from 'src/interface/reducer';
import Constant from 'src/constant';

// component
import Head from 'src/components/util/head';
import Breadcrumb from 'src/components/talks/breadcrumb';
import Header from 'src/components/util/header';
import List from 'src/components/talks/list';
import Propaganda from 'src/components/util/propaganda';
import Pagination from 'src/components/talks/pagination';
import Modal from 'src/components/util/talkModal';

import { withRedux } from 'src/lib/redux';

import slice from 'src/reducers/talk';

const Genre = () => {
  React.useEffect(() => {}, []);

  return (
    <>
      <Head />
      <Header />
      <Breadcrumb />

      <div style={{ textAlign: 'center' }}>
        <button
          type="button"
          className="btn btn-success"
          data-toggle="modal"
          data-target="#talkModal"
        >
          投稿
        </button>
      </div>
      <br />

      <Modal />

      <div className="row2">
        <section>
          <List />
          <Pagination />
        </section>

        <aside>
          <Propaganda />
        </aside>
      </div>
      <br />
      <hr />
      {/* スマホ用 */}
      <div className="sumaho">
        <Propaganda />
      </div>
    </>
  );
};

// getInitialProps
Genre.getInitialProps = async ({
  reduxStore,
  query,
}: {
  reduxStore: {
    dispatch: Dispatch<any>;
  };
  query: { id: string; num: string };
}) => {
  try {
    const { num, id } = query;

    const _res = await axios.get(
      `${
        Constant.request_url[
          process.env.NODE_ENV as 'development' | 'production'
        ]
      }/talks/${id}/${num}`,
      {
        headers: Constant.headers,
        data: {},
      }
    );

    const _ret: {
      list: i_reducer['talk']['data'];
      count: i_reducer['talk']['count'];
    } = _res.data;

    reduxStore.dispatch(slice.actions.data(_ret.list));
    reduxStore.dispatch(slice.actions.pagination(Number(num)));
  } catch (err) {}
};

export default withRedux(Genre);
