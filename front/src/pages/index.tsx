import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import axios from 'axios';

import i_reducer from 'src/interface/reducer';
import Constant from 'src/constant';

// component
import Head from 'src/components/util/head';
import Breadcrumb from 'src/components/info/breadcrumb';
import Header from 'src/components/util/header';
import Propaganda from 'src/components/util/propaganda';
import TitleList from 'src/components/util/titleList';
import Pagination from 'src/components/info/pagination';
import Search from 'src/components/util/search';
import Modal from 'src/components/util/homeModal';

import { withRedux } from 'src/lib/redux';

import slice from 'src/reducers/home';

const Home = () => {
  return (
    <>
      <Head />
      <Header />
      <Breadcrumb />

      <Search />
      <br />

      <div style={{ textAlign: 'center' }}>
        <button
          type="button"
          className="btn btn-success"
          data-toggle="modal"
          data-target="#homeModal"
        >
          板をつくる
        </button>
      </div>
      <br />

      <Modal />

      <div className="row2">
        <section>
          <TitleList />
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
Home.getInitialProps = async ({
  reduxStore,
}: {
  reduxStore: {
    dispatch: Dispatch<any>;
  };
}) => {
  try {
    const _res = await axios.get(
      `${
        Constant.request_url[
          process.env.NODE_ENV as 'development' | 'production'
        ]
      }/info/1`,
      {
        headers: Constant.headers,
        data: {},
      }
    );

    const _ret: {
      list: i_reducer['home']['data'];
      count: i_reducer['home']['count'];
    } = _res.data;

    reduxStore.dispatch(slice.actions.count(_ret.count));
    reduxStore.dispatch(slice.actions.data(_ret.list));
    reduxStore.dispatch(slice.actions.pagination(1));
  } catch (err) {}
};

export default withRedux(Home);
