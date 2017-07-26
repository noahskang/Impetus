class AddColumnToRewards < ActiveRecord::Migration
  def change
    add_column :rewards, :project_id, :integer, null: false
    add_column :rewards, :amount, :integer, null: false
    add_column :rewards, :description, :string, null: false
  end
end
