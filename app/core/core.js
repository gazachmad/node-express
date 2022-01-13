import db from '../../config/database.js';

class Core {
    constructor() {
        this._initialize();
    }

    _initialize = async () => {
        this.db = await db.getConnection();
    }
}

export default Core;