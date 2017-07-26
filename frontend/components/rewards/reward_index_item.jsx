import React from 'react';
import {Link} from 'react-router-dom';
import { Line } from 'rc-progress';

const RewardIndexItem = ({reward, project}) => {


  return(
      <div className="reward-index-item">
        <div>
          <div className="reward-info">
            <h4>{`Pledge $${reward.amount} or more`}</h4>
            <h1>{reward.title}</h1>
            <h2>{reward.description}</h2>
            <span>
            <h2>Estimated Delivery</h2>
            <h2>{reward.delivery_date}</h2>
            </span>
            <h2>{(reward.backers ? `${reward.backers} ` : "0 ")}backers</h2>
          </div>
        </div>
      </div>
  );
};

export default RewardIndexItem;
