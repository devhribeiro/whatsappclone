import React from 'react';
import './ChatListItem.css';

export default ({onClick, data, active}) => {
    return (
        <div
            onClick={onClick}
            className={`chatListItem ${active?'active':''}`}
        >
            <img className="chatListItem--avatar" src={data.avatar} alt="avatar" />
            <div className="chatListItem--lines">
                <div className="chatListItem--line">
                    <div className="chatListItem--name">{data.title}</div>
                    <div className="chatListItem--date">23:48</div>
                </div>

                <div className="chatListItem--line">
                    <div className="chatListItem--lastMsg">
                        <p>​top gostei desse designer</p>
                    </div>
                </div>
            </div>
        </div>
    )
}