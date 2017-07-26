class CreateRewards < ActiveRecord::Migration
  def change
    create_table :rewards do |t|
      t.string :description, null: false
      t.integer :project_id, null: false
      t.integer :amount, null: false
      t.timestamps null: false
    end
  end
end
