class CreateProjects < ActiveRecord::Migration
  def change
    create_table :projects do |t|

      t.string :title, null: false
      t.string :website_url, null: false
      t.text :category, null: false
      t.text :description, null: false
      t.integer :creator_id, null: false
      t.integer :funding_goal, null: false
      t.date :end_date, null: false
      t.string :title, null: false

      t.timestamps null: false
    end

    add_index :users, :username, unique: true
  end
end
