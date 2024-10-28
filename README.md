# Mini Message Board App

A simple Express app with EJS templates that displays messages and allows users to add new ones.

## Setup

1. **Install dependencies**:

   ```bash
   npm install express ejs
   ```

2. **Run the app**:

   ```bash
   node app.js
   ```

3. Open `http://localhost:3000` in your browser.

## Routes

- **GET /** - Shows all messages.
- **GET /new** - Form to add a new message.
- **POST /new** - Submits the new message.

## Folder Structure

- `views/` - EJS templates (`index.ejs` for messages, `form.ejs` for the add message form)
- `app.js` - Main app file
- `routes/index.js` - Routes

Enjoy adding and viewing messages!
