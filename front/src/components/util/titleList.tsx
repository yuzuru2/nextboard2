import * as React from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';
import Link from 'next/link';

import i_reducer from 'src/interface/reducer';
import Constant from 'src/constant';

const List = () => {
  const state = useSelector(state => state) as i_reducer;

  React.useEffect(() => {}, []);

  return React.useMemo(() => {
    return (
      <>
        {state.home.data.map((m, i) => {
          return (
            <div key={i}>
              <div className="card">
                <div
                  className="card-header"
                  style={{ fontSize: 14, textAlign: 'center' }}
                >
                  <time>
                    <i className="fa fa-clock-o" aria-hidden="true"></i>
                    {moment(new Date(m.updatedAt)).format(
                      'YYYY-MM-DD HH:mm:ss'
                    )}
                  </time>

                  <div>
                    <Link href={`/genre/${m.genreId}/1`}>
                      <a style={{ color: '#666' }}>
                        {Constant.genre[Number(m.genreId)]}
                      </a>
                    </Link>
                  </div>

                  <div>投稿数: {m.count}</div>
                </div>
                <div
                  className="card-body"
                  style={{ background: 'rgba(0, 0, 0, 0.03)' }}
                >
                  <p
                    className="card-text"
                    style={{
                      whiteSpace: 'pre-line',
                    }}
                  >
                    <Link href={`/talks/${m.id}/1`}>
                      <a>{m.name}</a>
                    </Link>
                  </p>
                </div>
              </div>
              <br />
            </div>
          );
        })}
      </>
    );
  }, [JSON.stringify(state.home.data)]);
};

export default List;
