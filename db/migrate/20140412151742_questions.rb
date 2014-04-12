class Questions < ActiveRecord::Migration
  def change
    create_table :questions do |t|
      t.text :body
      t.text :response

      t.timestamps
    end
  end
end
