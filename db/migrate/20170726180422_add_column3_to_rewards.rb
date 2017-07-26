class AddColumn3ToRewards < ActiveRecord::Migration
  def change
    add_column :rewards, :title, :string, null: false
  end
end
