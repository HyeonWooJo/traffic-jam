// getController.js

exports.getIndexPage = (req, res) => {
    res.render('index', { name: 'YourName' });
};