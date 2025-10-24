# Security Setup Guide

## Admin Password Configuration

Your admin panel is now protected with **bcrypt-hashed passwords** for maximum security.

### Initial Setup

1. **Generate a password hash** by running:
   ```bash
   node scripts/hash-password.js
   ```
   
2. **Enter your desired password** when prompted

3. **Copy the generated hash** to your `.env.local` file:
   ```
   ADMIN_PASSWORD_HASH=your-generated-hash-here
   JWT_SECRET=your-random-secret-key
   ```

4. **Restart your development server**:
   ```bash
   npm run dev
   ```

### Security Features

✅ **Password Hashing**: Passwords are hashed with bcrypt (10 rounds)  
✅ **Secure Sessions**: JWT tokens with 24-hour expiration  
✅ **HTTP-only Cookies**: Session cookies can't be accessed by JavaScript  
✅ **Environment Variables**: Sensitive data never committed to Git  
✅ **Protected API Routes**: All admin endpoints require authentication  

### Production Deployment (Vercel)

When deploying to production:

1. Generate a production password hash:
   ```bash
   node scripts/hash-password.js
   ```

2. Add environment variables in Vercel dashboard:
   - `ADMIN_PASSWORD_HASH`: Your generated hash
   - `JWT_SECRET`: A random secret (generate with `openssl rand -base64 32`)

3. Never use the same password for development and production!

### Best Practices

- ✅ Use strong passwords (minimum 12 characters, mix of letters/numbers/symbols)
- ✅ Use different passwords for development and production
- ✅ Never commit `.env.local` to Git
- ✅ Regenerate JWT_SECRET periodically
- ✅ Use HTTPS in production (Vercel does this automatically)
- ❌ Never share your password hash
- ❌ Never store plain-text passwords

### How It Works

1. You enter your plain-text password in the login form
2. The system hashes it with bcrypt
3. The hash is compared to the stored hash in `.env.local`
4. If they match, a JWT session token is created
5. The token is stored in an HTTP-only cookie
6. All subsequent requests verify the token

This means your actual password is **never stored anywhere** - only the hash is stored, which cannot be reversed to get the original password.

