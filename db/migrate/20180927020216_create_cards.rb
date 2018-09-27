class CreateCards < ActiveRecord::Migration[5.2]
  def change
    create_table :cards do |t|
      t.string :name
      t.string :post
      t.boolean :liked

      t.timestamps
    end
  end
end
