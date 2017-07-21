class Projects < ActiveRecord::Migration
  def change
    add_column :projects, :funding_raised, :integer
  end
end
