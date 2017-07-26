class CreatePledges < ActiveRecord::Migration
  def change
    create_table :pledges do |t|
      t.integer :user_id, null: false
      t.integer :reward_id, null: false
      t.timestamps null: false
    end
  end
end
