import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import i_reducer from 'src/interface/reducer';
import Constant from 'src/constant';

import slice, { post } from 'src/reducers/home';

export default () => {
  const state = useSelector(state => state) as i_reducer;
  const dispatch = useDispatch();

  return React.useMemo(() => {
    return (
      <>
        <div className="modal" id="homeModal" role="dialog" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">板をつくる</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="form-group">
                  <label>板名</label>
                  <textarea
                    className="form-control"
                    rows={3}
                    placeholder="50文字内"
                    maxLength={50}
                    value={state.home.post.name}
                    onChange={e =>
                      dispatch(slice.actions.post_name(e.target.value))
                    }
                  ></textarea>
                </div>

                <div className="form-group">
                  <label>ジャンル</label>
                  <select
                    className="form-control"
                    value={state.home.post.genreId}
                    onChange={e =>
                      dispatch(
                        slice.actions.post_genreId(Number(e.target.value))
                      )
                    }
                  >
                    {Object.keys(Constant.genre).map((_, i) => {
                      return (
                        <option key={i} value={i}>
                          {Constant.genre[i]}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => {
                    if (confirm('作成しますか?')) {
                      dispatch(
                        post({
                          name: state.home.post.name,
                          genreId: state.home.post.genreId,
                        })
                      );
                    }
                  }}
                >
                  作成
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }, [JSON.stringify(state.home.post)]);
};
