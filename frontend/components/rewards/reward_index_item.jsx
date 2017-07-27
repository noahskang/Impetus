import React from 'react';
import {Link} from 'react-router-dom';
import { Line } from 'rc-progress';
import { values } from 'lodash';

const RewardIndexItem = ({reward, onClick, project, backers, pledges, userRewards}) => {

  const includesReward = (el) =>{
    return el.id===reward.id;
  };

  return(
      <div className="reward-index-item" onClick={onClick}>
        <div className="reward-info">
          <h4>{`Pledge $${reward.amount} or more`}</h4>
          <h1>{reward.title}</h1>
          <h2>{reward.description}</h2>
          <span>
          <h2>Estimated Delivery</h2>
          <h2>{reward.delivery_date}</h2>
          </span>
          <h2>{backers} backers</h2>
          <h2 id="limited-message">limited ({reward.backing_limit - reward.backer_count} out of {reward.backing_limit}) left</h2>
          <p>
            <h2>pledge count {pledges}</h2>
            <h2 className="backing-message">{userRewards.some(includesReward) ? "You backed this reward" : ""}</h2>
          </p>
        </div>
        <div className="choose-reward">
          <h1>Select This Reward</h1>
        </div>
      </div>
  );
};

export default RewardIndexItem;
