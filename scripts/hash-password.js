#!/usr/bin/env node

const bcrypt = require('bcryptjs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter the password you want to hash: ', (password) => {
  if (!password) {
    console.log('❌ Password cannot be empty');
    rl.close();
    process.exit(1);
  }

  const hash = bcrypt.hashSync(password, 10);
  
  console.log('\n✅ Password hashed successfully!');
  console.log('\nAdd this to your .env.local file:');
  console.log('─'.repeat(60));
  console.log(`ADMIN_PASSWORD_HASH=${hash}`);
  console.log('─'.repeat(60));
  console.log('\n⚠️  Keep this hash secret and never commit it to Git!');
  
  rl.close();
});

