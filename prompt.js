function handlePrompt(db)
{
    return function(req, res)
    {
        console.log("from prompt");
        sid = req.query.sid
        db.collection("Prompts").findOne({_id: sid}).then(x => console.log(x))
    }
    
}
module.exports = function (db) 
{
    var module = {};
    module.handlePrompt = handlePrompt(db);

    return module;
}