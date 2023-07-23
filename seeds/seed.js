const sequelize = require('../config/connection');
const User = require('../models/user');

const seedData = async () => {
  try {
    await sequelize.sync();
    await User.create({
      name: 'userexample',
      email: 'usereg@example.com',
      password: 'password123',
    });
    console.log('Seed data created successfully');
    process.exit(0);
  } catch (error) {
    console.error('Error creating seed data:', error);
    process.exit(1);
  }
};


seedData();
