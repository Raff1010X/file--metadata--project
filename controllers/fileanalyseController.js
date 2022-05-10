exports.getFileanalyse = (req, res) => {
    // get uploaded file name
    const file = req.file;
    if (!file) {
        return res.status(400).json({
            error: 'No file uploaded',
        });
    }
    // get uploaded file name
    const name = file.originalname;
    // get uploaded file type
    const type = file.mimetype;
    // get uploaded file size
    const size = file.size;

    res.json({
        name,
        type,
        size,
    });
};
