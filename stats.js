function handleStats(db)
{
    return function(req, res)
    {
        console.log("from stats");
        var counterlist = []
        cursor = db.collection("Counters").find().project({_id:0, name: 1, count: 1})
        cursor.forEach(x => {
            counterlist.push(x)
        }).then(x => {
            res.send(counterlist)
        })

    }
}
module.exports = function (db) 
{
    var module = {};
    module.handleStats = handleStats(db);

    return module;
}