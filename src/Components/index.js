
import fs from 'fs';
import path from 'path';
const basename = path.basename(module.filename);

fs
.readdirSync(__dirname)
.forEach(file => console.log(file));
