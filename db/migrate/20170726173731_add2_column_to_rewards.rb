class Add2ColumnToRewards < ActiveRecord::Migration
  def change
    add_column :rewards, :delivery_date, :date, null: false
    add_column :rewards, :backing_limit, :integer, null: false
  end
end
