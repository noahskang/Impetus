import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import { Line } from 'rc-progress';
import { values } from 'lodash';

const RewardIndexItem = ({reward, history, clickMethod, project, pledges, currentUser}) => {

  const checkLoggedIn = () => {
    if(currentUser.id){
      return clickMethod();
    }
    else{
      history.push("/login");
    }
  };

  return(
      <div className="reward-index-item" onClick={checkLoggedIn}>
        <div className="reward-info">
          <h4>{`Pledge $${reward.amount} or more`}</h4>
          <h1>{reward.title}</h1>
          <h2>{reward.description}</h2>
          <span>
          <h2>Estimated Delivery</h2>
          <h2>{reward.delivery_date}</h2>
          </span>
          <h2>{reward.pledge_count} backers</h2>
          <h2 id="limited-message">limited ({reward.backing_limit - reward.pledge_count} out of {reward.backing_limit}) left</h2>
          <p>
            <h2 className="backing-message">{reward.current_user_is_backer ? "You backed this reward" : ""}</h2>
          </p>
        </div>
        <div className="choose-reward">
          <h1>Select This Reward</h1>
        </div>
      </div>
  );
};

export default withRouter(RewardIndexItem);
