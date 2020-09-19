import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';

import i_reducer from 'src/interface/reducer';
import slice, { post } from 'src/reducers/talk';

export default () => {
  const state = useSelector(state => state) as i_reducer;
  const dispatch = useDispatch();
  const { id } = useRouter().query as { id: string };

  return React.useMemo(() => {
    return (
      <>
        <div className="modal" id="talkModal" role="dialog" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">投稿</h5>
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
                  <label>なまえ</label>
                  <input
                    className="form-control"
                    placeholder="なまえ15文字内"
                    maxLength={15}
                    value={state.talk.post.name}
                    onChange={e =>
                      dispatch(slice.actions.post_name(e.target.value))
                    }
                  />
                </div>

                <div className="form-group">
                  <label>メッセージ</label>
                  <textarea
                    className="form-control"
                    rows={5}
                    placeholder="150文字内"
                    maxLength={150}
                    value={state.talk.post.message}
                    onChange={e =>
                      dispatch(slice.actions.post_message(e.target.value))
                    }
                  ></textarea>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => {
                    if (confirm('投稿しますか?')) {
                      dispatch(
                        post({
                          id: id,
                          name: state.talk.post.name,
                          message: state.talk.post.message,
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
  }, [JSON.stringify(state.talk.post)]);
};
