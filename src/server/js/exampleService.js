module.exports = (function () {

    function getListOfNames(req, res) {
      res.json({names: [
        {name: 'moses'},
        {name: 'aharon'},
        {name: 'katia'},
        {name: 'salomon'},
        {name: 'harmony'},
        {name: 'salamandra'}
      ]});
    }

    //this is what we expose to queries
    return exampleService = {
        getSomeList: getListOfNames,
        getAnotherList: getListOfNames
    };

})();
