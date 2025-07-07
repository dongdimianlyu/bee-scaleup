# Authentication System

This project uses a **mock authentication system** that doesn't require Firebase or any external services. This makes it perfect for deployment without any paid services or credit card requirements.

## How It Works

### Mock Authentication Features
- ✅ **No Firebase required** - Completely self-contained
- ✅ **No credit card needed** - Zero external dependencies
- ✅ **localStorage persistence** - Login state persists across browser sessions
- ✅ **Full UI integration** - User menu, logout, protected routes
- ✅ **Email/Password login** - Any combination works for testing
- ✅ **Google OAuth simulation** - Mock Google sign-in functionality

### For Testing/Demo
- **Any email/password combination will work**
- Examples:
  - Email: `test@example.com`, Password: `anything`
  - Email: `demo@beescaleup.com`, Password: `demo123`
  - Email: `user@test.com`, Password: `password`

### User Experience
1. **Login/Register**: Users can enter any credentials
2. **Persistence**: Login state is saved in browser storage
3. **User Menu**: Shows user avatar and email in header
4. **Logout**: Clears authentication state
5. **Responsive**: Works on desktop and mobile

## Implementation Details

### Files Modified
- `context/AuthContext.tsx` - Mock authentication context
- `app/login/page.tsx` - Login page with mock auth
- `app/register/page.tsx` - Register page with mock auth  
- `app/components/Header.tsx` - User menu integration
- `package.json` - Removed Firebase dependency

### State Management
- Uses React Context for authentication state
- localStorage for persistence across sessions
- No server-side authentication required

## Future Firebase Integration

When ready to implement real authentication:
1. Install Firebase: `npm install firebase`
2. Replace mock functions in `AuthContext.tsx`
3. Add Firebase config
4. Update environment variables

This mock system provides the exact same user experience as real authentication while requiring zero setup or costs. 