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
            // console.log(session)
            db.collection("Prompts").findOne({_id :session.prompts[session.index]}).then(prompt => {
                console.log(prompt)
                res.send(prompt)
            })
        })
    }
    
}
module.exports = function (db) 
{
    var module = {};
    module.handlePrompt = handlePrompt(db);

    return module;
}