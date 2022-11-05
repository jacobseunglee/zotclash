function handleSession(db)
{
    return function(req, res)
    {
        console.log("from session");
        res.send("123");
        try
        {

        }
        catch(e)
        {
            console.error(e);
        }
        finally
        {
    
        }
    }
    
}

module.exports = function (db) 
{
    var module = {};
    module.handleSession = handleSession(db);

    return module;
}