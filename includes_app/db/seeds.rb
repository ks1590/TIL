5.times do
  email = Faker::Internet.email
  password = "password"
  User.create!(email: email, password: password, password_confirmation: password)
end

200.times do
  user_id = rand(1..3)
  name = Faker::JapaneseMedia::Doraemon.gadget
  Post.create!(user_id: user_id, name: name)
end