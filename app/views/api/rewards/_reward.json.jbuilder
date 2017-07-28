json.extract! reward, :id, :project_id, :description, :amount, :title, :backing_limit, :delivery_date, :pledge_count, :backer_count, :backers

json.current_user_is_backer reward.current_user_is_backer(current_user) 
