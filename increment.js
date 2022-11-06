function handleIncrement(db)
{
    return function(req, res)
    {
        console.log("from increment");
        var name = req.query.name
        db.collection("Counters").updateOne(
            {_id: name},
            { $inc: {count: 1}}
        ).then(x => res.send(x))
    }
}
module.exports = function (db) 
{
    var module = {};
    module.handleIncrement = handleIncrement(db);

    return module;
}