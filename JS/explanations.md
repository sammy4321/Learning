## == vs ===

- **==** : Flexible Equality Operator  
- **===** : Strict Equality Operator

## Node Package Usage : 
```bash
mkdir my-date-project
cd my-date-project
npm init -y
npm install moment
```

```bash
const moment = require('moment');
const now = moment();
console.log('Current Date and Time:', now.format('YYYY-MM-DD HH:mm:ss'));
```