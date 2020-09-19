import * as React from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';
const reactStringReplace = require('react-string-replace');

import i_reducer from 'src/interface/reducer';

export default () => {
  const state = useSelector(state => state) as i_reducer;

  return React.useMemo(() => {
    return (
      <>
        {state.talk.data.map((m, i) => {
          return (
            <div key={i}>
              <div className="card">
                <div
                  className="card-header"
                  style={{ fontSize: 14, textAlign: 'center' }}
                >
                  <time>
                    <i className="fa fa-clock-o" aria-hidden="true"></i>
                    {moment(new Date(m.createdAt)).format(
                      'YYYY-MM-DD HH:mm:ss'
                    )}
                  </time>

                  <div style={{ color: 'green', fontWeight: 'bold' }}>
                    {m.name}
                  </div>
                </div>
                <div
                  className="card-body"
                  style={{ background: 'rgba(0, 0, 0, 0.03)' }}
                >
                  <p
                    className="card-text"
                    style={{
                      whiteSpace: 'pre-line',
                      fontWeight: 'bold',
                    }}
                  >
                    {reactStringReplace(
                      m.message,
                      /(https?:\/\/\S+)/g,
                      (match: string, j: number) => (
                        <a
                          href={match}
                          key={match + j}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {match}
                        </a>
                      )
                    )}
                  </p>
                </div>
              </div>
              <br />
            </div>
          );
        })}
      </>
    );
  }, [JSON.stringify(state.talk.data)]);
};
