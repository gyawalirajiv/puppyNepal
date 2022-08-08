import * as Path from 'path';

export const settings = {
    PORT: process.env.PORT || 3000,
    PUBLIC_PATH: process.env.PUBLIC_PATH || Path.resolve(__dirname, '../public'),
};
