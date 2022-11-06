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
            if (session.index >= session.prompts.length){
                res.send(undefined)
                return
            }
            db.collection("Prompts").findOne({_id :session.prompts[session.index]}).then(prompt => {
                db.collection("Sessions").updateOne(
                    {_id: sid},
                    { $inc: {index: 1}})
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