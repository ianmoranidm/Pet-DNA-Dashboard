const app = require('./src/app'); // Ensure the correct path to app.js

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
