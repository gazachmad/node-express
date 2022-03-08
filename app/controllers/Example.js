class _Example {
    index = async (req, res) => {
        try {
            return res.json();
        } catch {
            return res.status(500).json();
        }
    }
    create = async (req, res) => {
        try {
            return res.json();
        } catch {
            return res.status(500).json();
        }
    }
    store = async (req, res) => {
        try {
            return res.json();
        } catch {
            return res.status(500).json();
        }
    }
    show = async (req, res) => {
        try {
            return res.json();
        } catch {
            return res.status(500).json();
        }
    }
    edit = async (req, res) => {
        try {
            return res.json();
        } catch {
            return res.status(500).json();
        }
    }
    update = async (req, res) => {
        try {
            return res.json();
        } catch {
            return res.status(500).json();
        }
    }
    destroy = async (req, res) => {
        try {
            return res.json();
        } catch {
            return res.status(500).json();
        }
    }
}
export const Example = new _Example();