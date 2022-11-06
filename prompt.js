const mongo = require('mongodb');
function handlePrompt(db)
{
    return function(req, res)
    {
        console.log("from prompt");
        var sid = req.query.sid
        sid = new mongo.ObjectId(sid);
        console.log(sid)
        db.collection("Sessions").findOne({_id: sid}).then(session => {
            console.log(session)
            const pid = session.prompts[session.index]
            res.send({is:pid})
        })
    }
    
}
module.exports = function (db) 
{
    var module = {};
    module.handlePrompt = handlePrompt(db);

    return module;
}